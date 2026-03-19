"use client";

import { useEffect, useRef } from "react";

export default function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    const gridSize = 40;
    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Create a gradient for the "horizon" feel
      const gradient = ctx.createLinearGradient(0, height * 0.4, 0, height);
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(0.5, "rgba(255, 87, 34, 0.05)");
      gradient.addColorStop(1, "rgba(255, 87, 34, 0.2)");

      ctx.strokeStyle = "rgba(255, 87, 34, 0.15)";
      ctx.lineWidth = 1;

      offset += 1.5;
      if (offset >= gridSize) offset = 0;

      // Vertical lines with perspective
      for (let x = -width; x <= width * 2; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(width / 2, height * 0.4);
        ctx.lineTo(x + (x - width / 2) * 2, height);
        ctx.stroke();
      }

      // Horizontal lines with movement
      for (let y = height * 0.4; y <= height + gridSize; y += gridSize) {
        const movedY = y + offset;
        if (movedY < height * 0.4) continue;
        
        // Calculate perspective scale
        const ratio = (movedY - height * 0.4) / (height * 0.6);
        ctx.lineWidth = 0.5 + ratio * 2;
        ctx.strokeStyle = `rgba(255, 87, 34, ${0.05 + ratio * 0.2})`;

        ctx.beginPath();
        ctx.moveTo(0, movedY);
        ctx.lineTo(width, movedY);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-40"
      style={{ maskImage: "linear-gradient(to bottom, transparent, black 40%, black)" }}
    />
  );
}

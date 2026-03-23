"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Loader2, Bot } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function ChatDemo() {
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", text: "Hi. I'm the Forge Lead-Gen Agent. Tell me — what workflow bottleneck is costing your business the most right now?" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isQualified, setIsQualified] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chatMessages, showLeadForm]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isLoading) return;

    const userMessage = { role: "user", text: chatInput };
    const updatedMessages = [...chatMessages, userMessage];
    setChatMessages(updatedMessages);
    setChatInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      if (data.message) {
        setChatMessages((prev) => [...prev, { role: "assistant", text: data.message }]);
      }
      if (data.qualified && !isQualified) {
        setIsQualified(true);
        setShowLeadForm(true);
      }
    } catch {
      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="max-w-6xl mx-auto px-6 mb-32" style={{ scrollMarginTop: '80px' }}>
      <p data-reveal className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-3">Live Demo</p>
      <h2 data-reveal data-delay="100" className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">
        Talk to the Lead-Gen Agent.
      </h2>
      <p data-reveal data-delay="150" className="text-stone-500 font-light leading-relaxed mb-10 max-w-xl">
        This agent qualifies B2B leads around the clock. Try it — describe your business and what you&apos;re trying to automate.
      </p>

      <div data-reveal data-delay="200" className="grid md:grid-cols-2 gap-8 items-start">
        {/* Chat Widget */}
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm flex flex-col" style={{ minHeight: "420px", height: "480px", maxHeight: "80vh" }}>
          <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Lead-Gen Agent · Online</span>
            </div>
            <Bot size={16} className="text-stone-400" />
          </div>

          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
            {chatMessages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-stone-900 text-white rounded-br-sm"
                    : "bg-stone-100 text-stone-800 rounded-bl-sm"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-100 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-2">
                  <Loader2 size={13} className="animate-spin text-stone-400" />
                  <span className="text-xs text-stone-400 font-medium">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="px-4 py-4 border-t border-stone-100 flex gap-2 flex-shrink-0">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Describe your business or workflow..."
              disabled={isLoading}
              className="flex-1 bg-stone-50 border border-stone-200 rounded-full px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 disabled:opacity-50 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-stone-700 disabled:opacity-50 transition-colors flex-shrink-0"
            >
              <Send size={15} />
            </button>
          </form>
        </div>

        {/* Lead Form or Feature List */}
        {showLeadForm ? (
          <LeadForm
            onClose={() => setShowLeadForm(false)}
            conversation={JSON.stringify(chatMessages)}
          />
        ) : (
          <div className="space-y-6">
            {[
              { title: "24/7 Qualification", desc: "Never miss an inbound lead. The agent handles discovery at any hour." },
              { title: "Deep Context", desc: "Understands Forge Agency's services better than a junior SDR — without the overhead." },
              { title: "Instant Handoff", desc: "When a lead is qualified, a booking form appears immediately — no friction." },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 p-6 bg-white rounded-2xl border border-stone-200">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2.5 shrink-0" />
                <div>
                  <div className="font-medium tracking-tight text-stone-900 mb-1">{item.title}</div>
                  <div className="text-sm text-stone-500 font-light leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

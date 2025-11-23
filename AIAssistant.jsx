import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ShoppingBag, Send, X, MessageSquare } from 'lucide-react';

const AIAssistant = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'ai', text: "Hey! I'm your AI Planner. Need to adjust your schedule?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const userMsg = { id: Date.now(), type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        // Simulate AI response logic
        setTimeout(() => {
            let aiResponseText = "I can help with that. What's your goal today?";

            if (inputValue.toLowerCase().includes('skip') && inputValue.toLowerCase().includes('leg')) {
                aiResponseText = "No problem. Skipping leg day isn't ideal, but we can compensate. How about a 20min HIIT Cardio session to keep the calorie burn high?";
            } else if (inputValue.toLowerCase().includes('diet') || inputValue.toLowerCase().includes('food')) {
                aiResponseText = "Based on your recent activity, I'd recommend increasing your protein intake. Try the 'Whey Isolate' from the store.";
            }

            const aiMsg = { id: Date.now() + 1, type: 'ai', text: aiResponseText };
            setMessages(prev => [...prev, aiMsg]);
        }, 1000);
    };

    const quickActions = [
        "Skip Leg Day",
        "Update Goal",
        "Diet Check"
    ];

    const handleQuickAction = (action) => {
        setInputValue(action);
        // Optional: auto-send or just populate
    };

    return (
        <>
            {/* Floating Dock */}
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                <div className="glass-panel rounded-full p-2 flex items-center gap-2 shadow-2xl border border-white/20">

                    {/* AI Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#5E4B56] text-white' : 'bg-[#D4A587]/20 text-[#D4A587] hover:bg-[#D4A587]/30'}`}
                    >
                        <Sparkles size={18} />
                        <span className="text-xs font-bold uppercase tracking-wide">Ask AI</span>
                    </button>

                    {/* Divider */}
                    <div className="w-px h-6 bg-[#5E4B56]/10"></div>

                    {/* Store Button */}
                    <button
                        onClick={() => onNavigate && onNavigate('store')}
                        className="w-10 h-10 rounded-full bg-[#9D9176]/20 text-[#9D9176] flex items-center justify-center hover:bg-[#9D9176]/30 transition-colors"
                    >
                        <ShoppingBag size={18} />
                    </button>
                </div>
            </div>

            {/* Chat Interface Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-[#5E4B56]/20 backdrop-blur-sm flex items-end justify-center pb-24 animate-in fade-in duration-300" onClick={() => setIsOpen(false)}>
                    <div
                        className="w-[90%] max-w-md h-[60vh] glass-panel rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-white/40 animate-in slide-in-from-bottom-10 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-[#5E4B56]/5 flex justify-between items-center bg-white/50">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-[#D4A587]/20 flex items-center justify-center text-[#D4A587]">
                                    <Sparkles size={16} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#5E4B56] text-sm">Fitness AI</h3>
                                    <p className="text-[10px] text-[#7A6364]">Always active</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full hover:bg-[#5E4B56]/5 flex items-center justify-center text-[#7A6364]">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-[#5E4B56] text-white rounded-tr-none'
                                            : 'bg-white border border-[#5E4B56]/10 text-[#5E4B56] rounded-tl-none shadow-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions & Input */}
                        <div className="p-4 bg-white/80 border-t border-[#5E4B56]/5">
                            <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar">
                                {quickActions.map((action, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleQuickAction(action)}
                                        className="px-3 py-1.5 rounded-full bg-[#5E4B56]/5 text-[10px] font-bold text-[#5E4B56] hover:bg-[#5E4B56]/10 transition-colors whitespace-nowrap"
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 bg-[#F7F2EB] rounded-full p-1 pl-4 border border-[#5E4B56]/5 focus-within:border-[#D4A587] transition-colors">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-transparent border-none outline-none text-sm text-[#5E4B56] placeholder-[#7A6364]/50"
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                />
                                <button
                                    onClick={handleSend}
                                    className="w-8 h-8 rounded-full bg-[#D4A587] text-white flex items-center justify-center hover:bg-[#C2947A] transition-colors shadow-sm"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIAssistant;

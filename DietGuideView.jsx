import React from 'react';
import { ArrowLeft, BookOpen, Sparkles, ChevronRight, Droplets, Flame, Target } from 'lucide-react';

const DietGuideView = ({ onBack }) => {
    const articles = [
        {
            title: "Superfoods 101",
            desc: "Why blueberries and kale are your best friends.",
            readTime: "5 min read",
            color: "bg-[#D4A587]/10 text-[#D4A587]"
        },
        {
            title: "Gut Health Secrets",
            desc: "The connection between probiotics and mood.",
            readTime: "8 min read",
            color: "bg-[#9D9176]/10 text-[#9D9176]"
        },
        {
            title: "Protein Myths",
            desc: "How much do you actually need?",
            readTime: "4 min read",
            color: "bg-[#7A6364]/10 text-[#5E4B56]"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col gap-6 animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-white border border-[#5E4B56]/10 flex items-center justify-center text-[#5E4B56] hover:bg-white/80 transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-2xl font-bold text-[#5E4B56]">Diet Guide</h1>
            </div>

            {/* Nutrition Status Card - Comprehensive Metrics */}
            <div className="w-full p-8 rounded-[32px] bg-[#D4A587] text-white relative overflow-hidden shadow-xl shadow-[#D4A587]/20 min-h-[320px] flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col gap-8">
                    {/* Header */}
                    <div className="flex items-center gap-2">
                        <Sparkles size={16} className="text-white" />
                        <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Nutrition Status</span>
                    </div>

                    {/* Main Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-white/80 uppercase tracking-wide">Protein</span>
                            <span className="text-2xl font-bold text-white">120g</span>
                            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                <div className="w-[85%] h-full bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-white/80 uppercase tracking-wide">Calories</span>
                            <span className="text-2xl font-bold text-white">1,850</span>
                            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                <div className="w-[65%] h-full bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-white/80 uppercase tracking-wide">Water</span>
                            <span className="text-2xl font-bold text-white">2.1L</span>
                            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                <div className="w-[70%] h-full bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Insight */}
                    <div className="p-3 rounded-2xl bg-white/10 border border-white/10 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#D4A587]">
                            <Flame size={14} fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-xs text-white/80">Daily Insight</p>
                            <p className="text-sm font-bold text-white">Increase protein by 15%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommended Reading - Swipeable Carousel */}
            <div className="flex flex-col gap-3">
                <h2 className="text-xs font-bold text-[#7A6364] uppercase tracking-widest px-1">Recommended Reading</h2>
                <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-4">
                    {articles.map((article, idx) => (
                        <div key={idx} className="min-w-[85%] snap-center">
                            <div className="w-full p-6 rounded-[32px] bg-white border border-[#5E4B56]/5 shadow-xl shadow-[#5E4B56]/5 flex flex-col justify-between min-h-[220px] relative overflow-hidden group cursor-pointer">
                                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 transition-opacity group-hover:opacity-40 ${article.color.split(' ')[0].replace('bg-', 'bg-')}`}></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${article.color}`}>
                                            Nutrition
                                        </div>
                                        <span className="text-[10px] text-[#7A6364] font-medium">{article.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#5E4B56] mb-2 group-hover:text-[#D4A587] transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-[#7A6364] leading-relaxed mb-6">
                                        {article.desc}
                                    </p>
                                </div>

                                <div className="relative z-10 flex items-center gap-2 text-xs font-bold text-[#9D9176] group-hover:text-[#5E4B56] transition-colors">
                                    Read Article <ChevronRight size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Weekly Breakdown Section */}
            <div className="flex flex-col gap-3 pb-8">
                <div className="flex items-center gap-2 px-1">
                    <Target size={16} className="text-[#D4A587]" />
                    <h2 className="text-xs font-bold text-[#7A6364] uppercase tracking-widest">Weekly Breakdown</h2>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-white border border-[#5E4B56]/5 shadow-sm">
                        <span className="text-[10px] text-[#7A6364] uppercase font-bold">Protein</span>
                        <div className="flex items-end gap-1 mt-1">
                            <span className="text-2xl font-bold text-[#5E4B56]">850g</span>
                            <span className="text-xs text-[#7A6364] mb-1">/ week</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#F7F2EB] rounded-full mt-2 overflow-hidden">
                            <div className="w-[75%] h-full bg-[#D4A587] rounded-full"></div>
                        </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-[#5E4B56]/5 shadow-sm">
                        <span className="text-[10px] text-[#7A6364] uppercase font-bold">Calories</span>
                        <div className="flex items-end gap-1 mt-1">
                            <span className="text-2xl font-bold text-[#5E4B56]">12.5k</span>
                            <span className="text-xs text-[#7A6364] mb-1">/ week</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#F7F2EB] rounded-full mt-2 overflow-hidden">
                            <div className="w-[60%] h-full bg-[#D4A587] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DietGuideView;

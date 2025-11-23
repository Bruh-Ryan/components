import React from 'react';
import { ArrowLeft, Target, Flame, Dumbbell, TrendingUp, Calendar } from 'lucide-react';

const WeeklyGoalsView = ({ onBack }) => {
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
                <h1 className="text-2xl font-bold text-[#5E4B56]">Weekly Progress</h1>
            </div>

            {/* Main Summary Card */}
            <div className="w-full p-6 rounded-[32px] bg-[#5E4B56] text-white relative overflow-hidden shadow-xl shadow-[#5E4B56]/20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4A587]/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <Target size={16} className="text-[#D4A587]" />
                        <span className="text-xs font-bold text-[#D4A587] uppercase tracking-wider">Weekly Overview</span>
                    </div>

                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-3xl font-light">On Track</p>
                            <p className="text-sm text-white/60">You're crushing your goals!</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[#D4A587] flex items-center justify-center text-[#5E4B56] font-bold text-lg">
                            A+
                        </div>
                    </div>
                </div>
            </div>

            {/* Goals Grid */}
            <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-6 pb-20">

                {/* Diet Goals Section */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 px-1">
                        <Flame size={16} className="text-[#D4A587]" />
                        <h2 className="text-sm font-bold text-[#5E4B56] uppercase tracking-wide">Nutrition Goals</h2>
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

                {/* Fitness Goals Section */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 px-1">
                        <Dumbbell size={16} className="text-[#9D9176]" />
                        <h2 className="text-sm font-bold text-[#5E4B56] uppercase tracking-wide">Fitness Goals</h2>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-[#5E4B56]/5 shadow-sm flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#9D9176]/10 flex items-center justify-center text-[#9D9176]">
                                    <TrendingUp size={18} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#5E4B56]">Workout Frequency</h3>
                                    <p className="text-xs text-[#7A6364]">4 of 5 sessions completed</p>
                                </div>
                            </div>
                            <span className="text-xl font-bold text-[#9D9176]">80%</span>
                        </div>
                        <div className="w-full h-2 bg-[#F7F2EB] rounded-full overflow-hidden">
                            <div className="w-[80%] h-full bg-[#9D9176] rounded-full"></div>
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-[#5E4B56]/5 shadow-sm flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#7A6364]/10 flex items-center justify-center text-[#7A6364]">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#5E4B56]">Active Minutes</h3>
                                    <p className="text-xs text-[#7A6364]">180 of 250 mins</p>
                                </div>
                            </div>
                            <span className="text-xl font-bold text-[#7A6364]">72%</span>
                        </div>
                        <div className="w-full h-2 bg-[#F7F2EB] rounded-full overflow-hidden">
                            <div className="w-[72%] h-full bg-[#7A6364] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeeklyGoalsView;

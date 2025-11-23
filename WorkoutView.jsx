import React, { useState, useEffect } from 'react';
import { ArrowLeft, Activity, Play, X, Zap, Dumbbell, Timer, Headphones } from 'lucide-react';

const WorkoutView = ({ onBack }) => {
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [showPodcast, setShowPodcast] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false);

    const handleWorkoutSelect = (workout) => {
        setSelectedWorkout(workout);
        // Show podcast toast if not already closed explicitly in this session (simplified logic for prototype)
        setShowPodcast(true);
    };

    return (
        <div className="w-full h-full flex flex-col gap-6 animate-in slide-in-from-right duration-300 relative">
            {/* Header */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-white border border-[#5E4B56]/10 flex items-center justify-center text-[#5E4B56] hover:bg-white/80 transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-2xl font-bold text-[#5E4B56]">Workout Mode</h1>
            </div>

            {/* Workout Status Card - Comprehensive Metrics */}
            <div className="w-full p-6 rounded-[32px] bg-[#5E4B56] text-white relative overflow-hidden shadow-xl shadow-[#5E4B56]/20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4A587]/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex items-center gap-2">
                        <Activity size={16} className="text-[#D4A587]" />
                        <span className="text-xs font-bold text-[#D4A587] uppercase tracking-wider">Workout Status</span>
                    </div>

                    {/* Main Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-white/60 uppercase tracking-wide">Efficiency</span>
                            <span className="text-2xl font-bold text-white">94%</span>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-[94%] h-full bg-[#D4A587] rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-white/60 uppercase tracking-wide">Recovery</span>
                            <span className="text-2xl font-bold text-white">82%</span>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-[82%] h-full bg-[#9D9176] rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-white/60 uppercase tracking-wide">Intensity</span>
                            <span className="text-2xl font-bold text-white">High</span>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-[100%] h-full bg-[#7A6364] rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Recommendation */}
                    <div className="p-3 rounded-2xl bg-white/10 border border-white/10 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D4A587] flex items-center justify-center text-[#5E4B56]">
                            <Zap size={14} fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-xs text-white/80">Recommended Focus</p>
                            <p className="text-sm font-bold text-white">HIIT & Cardio</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Workout Selection */}
            <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-4 pb-20">
                {/* Workout List */}
                <div className="grid grid-cols-2 gap-4">
                    {['HIIT', 'Yoga', 'Strength', 'Cardio'].map((type, i) => (
                        <div
                            key={i}
                            onClick={() => handleWorkoutSelect(type)}
                            className="aspect-square rounded-3xl bg-white border border-[#5E4B56]/10 p-4 flex flex-col justify-between hover:bg-[#F7F2EB] transition-colors cursor-pointer group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#F7F2EB] flex items-center justify-center text-[#5E4B56] group-hover:scale-110 transition-transform">
                                <Play size={18} fill="currentColor" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#5E4B56]">{type}</h3>
                                <p className="text-[10px] text-[#7A6364]">20-30 min</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Podcast Toast */}
            {showPodcast && (
                <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm glass-panel p-4 rounded-2xl shadow-2xl border border-[#5E4B56]/10 flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-300 z-50 bg-white/90 backdrop-blur-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#5E4B56] flex items-center justify-center text-white">
                        <Headphones size={20} />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-[#5E4B56]">Power Podcast</h4>
                        <p className="text-[10px] text-[#7A6364]">Ep. 42 • Mindset</p>
                    </div>

                    {/* Auto-play toggle simulation */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setAutoPlay(!autoPlay)}>
                        <span className="text-[10px] font-bold text-[#7A6364] uppercase">Auto-play</span>
                        <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${autoPlay ? 'bg-[#9D9176]' : 'bg-stone-300'}`}>
                            <div className={`w-3 h-3 rounded-full bg-white transition-transform ${autoPlay ? 'translate-x-4' : 'translate-x-0'}`}></div>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowPodcast(false)}
                        className="text-[#7A6364] hover:text-[#5E4B56] ml-2"
                    >
                        <X size={18} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default WorkoutView;

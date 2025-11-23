import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Camera, Dumbbell, Utensils, User, Plus, X } from 'lucide-react';

const ActionHub = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (view) => {
        setIsMenuOpen(false);
        onNavigate(view);
    };

    return (
        <div className="w-full flex items-center justify-between gap-4 h-36 px-1">
            {/* Left: Quick Tasks Menu */}
            <div
                className="flex-1 h-full bg-gradient-to-br from-[#FFFBF5] to-[#F2E8D9] dark:from-[#3D3D3D] dark:to-[#2D2D2D] border border-glass-border rounded-[32px] p-5 flex flex-col justify-between relative overflow-hidden group shadow-lg shadow-glass-shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>

                {/* Halftone Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle,#5E4B56_1px,transparent_1px)] dark:bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:4px_4px]"></div>

                {!isMenuOpen && (
                    <div className="absolute bottom-5 left-5 z-10 animate-in fade-in duration-300">
                        <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1 block">Quick</span>
                        <span className="text-xl font-bold text-text-primary">Task</span>
                    </div>
                )}

            </div>


            {/* Center: Profile / Main Action */}
            <div className="relative z-10 -mt-8">
                <div
                    className="w-24 h-24 rounded-[36px] bg-bg-card shadow-2xl shadow-glass-shadow flex items-center justify-center relative group cursor-pointer hover:scale-105 transition-transform duration-300 border-4 border-bg-primary"
                    onClick={() => onNavigate('profile')}
                >
                    {/* Pulsing Rings - REMOVED */}
                    <div className="absolute -inset-1 rounded-[36px] border border-glass-border"></div>

                    <User size={32} className="text-text-primary relative z-10" />

                    {/* Status Dot */}
                    <div className="absolute bottom-2 right-2 w-3 h-3 bg-accent-secondary rounded-full border-2 border-bg-card z-20"></div>
                </div>
            </div>

            {/* Right: Social Hub (Replaces Score) */}
            <div
                className="flex-1 h-full bg-gradient-to-br from-[#FFFBF5] to-[#F2E8D9] dark:from-[#3D3D3D] dark:to-[#2D2D2D] border border-glass-border rounded-[32px] p-5 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:bg-bg-card transition-all duration-300 group shadow-lg shadow-glass-shadow hover:-translate-y-1"
                onClick={() => onNavigate('social')}
            >
                {/* Pulsing Rings - Added here */}
                <div className="absolute inset-0 rounded-3xl border-2 border-accent-secondary/30 animate-ping opacity-20"></div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-accent-secondary/10 rounded-full blur-2xl group-hover:bg-accent-secondary/20 transition-colors"></div>

                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-glass-border w-fit shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
                        </span>
                        <span className="text-[10px] font-bold text-text-primary uppercase tracking-wide">Live</span>
                    </div>
                </div>

                <div className="relative z-10 mt-2">
                    <div className="flex -space-x-2 mb-2">
                        <div className="w-8 h-8 rounded-full border-2 border-bg-card bg-accent-primary/30 flex items-center justify-center text-[10px] font-bold text-text-primary">S</div>
                        <div className="w-8 h-8 rounded-full border-2 border-bg-card bg-accent-secondary/30 flex items-center justify-center text-[10px] font-bold text-text-primary">M</div>
                        <div className="w-8 h-8 rounded-full border-2 border-bg-card bg-text-secondary/30 flex items-center justify-center text-[10px] font-bold text-text-primary">J</div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-text-primary leading-none">3</span>
                        <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Active Friends</span>
                    </div>
                </div>
            </div>


            {/* Quick Task Overlay Modal - Portaled to Body */}
            {
                isMenuOpen && createPortal(
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div
                            className="bg-[#2C2C2E]/90 backdrop-blur-xl w-72 p-2 rounded-[24px] relative shadow-2xl animate-in zoom-in-95 duration-200 border border-white/10 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Menu Items */}
                            <div className="flex flex-col">
                                <button onClick={() => handleNavigation('scan')} className="flex items-center justify-between w-full p-4 text-white hover:bg-white/10 rounded-[16px] transition-colors group">
                                    <span className="text-[17px] font-medium tracking-tight">Food Scan</span>
                                    <Camera size={20} className="text-[#A9BFA8] group-hover:scale-110 transition-transform" />
                                </button>

                                <div className="h-px w-full bg-white/10 mx-4 my-0.5 w-[calc(100%-32px)]"></div>

                                <button onClick={() => handleNavigation('workout')} className="flex items-center justify-between w-full p-4 text-white hover:bg-white/10 rounded-[16px] transition-colors group">
                                    <span className="text-[17px] font-medium tracking-tight">Workout</span>
                                    <Dumbbell size={20} className="text-[#D4A587] group-hover:scale-110 transition-transform" />
                                </button>

                                <div className="h-px w-full bg-white/10 mx-4 my-0.5 w-[calc(100%-32px)]"></div>

                                <button onClick={() => handleNavigation('diet')} className="flex items-center justify-between w-full p-4 text-white hover:bg-white/10 rounded-[16px] transition-colors group">
                                    <span className="text-[17px] font-medium tracking-tight">Diet Guide</span>
                                    <Utensils size={20} className="text-[#9D9176] group-hover:scale-110 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )
            }
        </div>
    );
};

export default ActionHub;

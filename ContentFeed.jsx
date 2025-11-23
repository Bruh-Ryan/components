import React from 'react';
import { Play, Clock, Flame } from 'lucide-react';

const ContentFeed = () => {
    const items = [
        {
            id: 1,
            title: 'Morning Flow',
            type: 'Yoga',
            duration: '15 min',
            calories: '120 kcal',
            icon: Play,
            color: 'bg-[#A9BFA8] dark:bg-[#9D9176] text-white',
            pillGradient: 'bg-gradient-to-br from-[#A9BFA8] to-[#5E4B56]',
            emoji: '🧘‍♀️'
        },
        {
            id: 2,
            title: 'HIIT Blast',
            type: 'Cardio',
            duration: '25 min',
            calories: '350 kcal',
            icon: Play,
            color: 'bg-[#A9BFA8] dark:bg-[#9D9176] text-white',
            pillGradient: 'bg-gradient-to-br from-[#D4A587] to-[#A87C7C]',
            emoji: '🏃'
        },
        {
            id: 3,
            title: 'Deep Focus',
            type: 'Meditation',
            duration: '10 min',
            calories: '',
            icon: Play,
            color: 'bg-[#A9BFA8] dark:bg-[#9D9176] text-white',
            pillGradient: 'bg-gradient-to-br from-[#9D9176] to-[#5E4B56]',
            emoji: '🧠'
        }
    ];

    return (
        <div className="w-full flex flex-col gap-6">
            <h3 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4 ml-1">Recommended</h3>

            <div className="flex flex-col gap-4">
                {items.map((item) => (
                    <div key={item.id} className="group flex items-center gap-4 p-4 rounded-[28px] bg-bg-card dark:bg-white/5 border border-glass-border hover:border-accent-primary/30 transition-all duration-300 cursor-pointer shadow-md shadow-glass-shadow hover:shadow-xl hover:-translate-y-0.5">
                        <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                            <item.icon size={20} fill="currentColor" />
                        </div>

                        <div className="flex-1">
                            <h4 className="text-lg font-bold text-text-primary mb-1">{item.title}</h4>
                            <div className="flex items-center gap-3 text-xs font-medium text-text-secondary">
                                <div className="flex items-center gap-1">
                                    <Clock size={12} />
                                    <span>{item.duration}</span>
                                </div>
                                {item.calories && (
                                    <div className="flex items-center gap-1">
                                        <Flame size={12} />
                                        <span>{item.calories}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={`px-3 py-1 rounded-full ${item.pillGradient} flex items-center gap-1.5 shadow-sm relative overflow-hidden`}>
                            {/* Dot Pattern Overlay */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] relative z-10 backdrop-blur-sm shadow-sm">{item.emoji}</span>
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider relative z-10">{item.type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentFeed;

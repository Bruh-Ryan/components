import React, { useState, useRef } from 'react';
import { Sparkles, ArrowUpRight, Camera, ShoppingBag, Droplets, Activity, Flame, Zap } from 'lucide-react';

const InsightSection = ({ onNavigate }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const cards = [
        {
            id: 1,
            type: 'nutrition',
            title: 'Nutrition',
            subtitle: 'Status',
            metrics: [
                { label: 'Protein', value: '120g', progress: 85, color: 'bg-white' },
                { label: 'Calories', value: '1,850', progress: 65, color: 'bg-white' },
                { label: 'Water', value: '2.1L', progress: 70, color: 'bg-white' }
            ],
            insight: 'Increase protein by 15%',
            icon: Droplets,
            color: 'text-white',
            bg: 'bg-accent-primary',
            accent: 'bg-white/20',
            action: () => onNavigate('goals')
        },
        {
            id: 2,
            type: 'workout',
            title: 'Workout',
            subtitle: 'Status',
            metrics: [
                { label: 'Efficiency', value: '94%', progress: 94, color: 'bg-accent-primary' },
                { label: 'Recovery', value: '82%', progress: 82, color: 'bg-accent-secondary' },
                { label: 'Intensity', value: 'High', progress: 100, color: 'bg-[#7A6364]' }
            ],
            insight: 'Recommended: HIIT',
            icon: Activity,
            color: 'text-white',
            bg: 'bg-[#5E4B56] dark:bg-[#5E4B56]', // Keep specific brand color for this card or map to a variable if strictly needed, but semantic might be better. Let's try to map to semantic if possible, or keep as accent.
            // Actually, let's use hardcoded for these specific "brand" cards to maintain the specific look, but ensure text contrast.
            // Wait, user wants dark mode. If I keep hex, it won't change.
            // Let's use the semantic variables where appropriate.
            // For the "Workout" card, it was #5E4B56 (Deep Mauve). In dark mode, that's text-primary.
            // If I make the card background text-primary, it might blend with the background if I'm not careful.
            // But wait, dark mode bg-primary is #3E3232. #5E4B56 is lighter. It should be fine.
            // Let's stick to the requested palette mapping.
            // Nutrition card was #D4A587 (Peach). Dark mode accent-primary is #A87C7C.
            accent: 'bg-white/10',
            action: () => onNavigate('workout')
        },
        {
            id: 3,
            type: 'store',
            title: 'Whey',
            subtitle: 'Isolate',
            desc: 'Boost your recovery with our premium grass-fed whey protein.',
            goal: 'Shop',
            icon: ShoppingBag,
            color: 'text-text-secondary',
            bg: 'bg-bg-card border border-glass-border',
            accent: 'bg-accent-secondary/10',
            action: () => onNavigate('store') // Or store view
        }
    ];

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollPosition = scrollRef.current.scrollLeft;
            const cardWidth = scrollRef.current.offsetWidth;
            const newIndex = Math.round(scrollPosition / cardWidth);
            setActiveIndex(newIndex);
        }
    };

    return (
        <div className="w-full flex flex-col gap-4">
            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 px-4 pb-8"
                onScroll={handleScroll}
            >
                {cards.map((card) => (
                    <div key={card.id} className="min-w-[100%] snap-center">
                        <div
                            onClick={() => {
                                if (card.action) {
                                    card.action();
                                }
                            }}
                            className={`w-full p-6 rounded-[32px] relative overflow-hidden shadow-xl shadow-glass-shadow cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${card.bg}`}
                        >
                            {/* Background Blobs for specific cards */}
                            {card.type === 'nutrition' && <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>}
                            {card.type === 'workout' && <div className="absolute top-0 right-0 w-40 h-40 bg-accent-primary/20 rounded-full blur-3xl pointer-events-none"></div>}
                            {card.type === 'store' && <div className="absolute top-0 right-0 w-40 h-40 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none"></div>}

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2">
                                        <card.icon size={16} className={card.color} />
                                        <span className={`text-xs font-bold uppercase tracking-wider ${card.type === 'store' ? 'text-text-secondary' : 'text-white/80'}`}>
                                            {card.title} {card.subtitle}
                                        </span>
                                    </div>
                                    <ArrowUpRight size={24} className={`${card.type === 'store' ? 'text-text-secondary' : 'text-white'} opacity-50`} />
                                </div>

                                {/* Content based on type */}
                                {card.metrics ? (
                                    <div className="flex flex-col gap-6">
                                        <div className="grid grid-cols-3 gap-4">
                                            {card.metrics.map((metric, i) => (
                                                <div key={i} className="flex flex-col gap-1">
                                                    <span className={`text-[10px] uppercase tracking-wide ${card.type === 'store' ? 'text-text-secondary' : 'text-white/60'}`}>{metric.label}</span>
                                                    <span className={`text-xl font-bold ${card.type === 'store' ? 'text-text-primary' : 'text-white'}`}>{metric.value}</span>
                                                    <div className={`w-full h-1 rounded-full overflow-hidden ${card.accent}`}>
                                                        <div className={`h-full rounded-full ${metric.color}`} style={{ width: `${metric.progress}%` }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className={`p-3 rounded-2xl border flex items-center gap-3 ${card.type === 'store' ? 'bg-bg-primary border-glass-border' : 'bg-white/10 border-white/10'}`}>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${card.type === 'nutrition' ? 'bg-white text-accent-primary' : card.type === 'workout' ? 'bg-accent-primary text-text-primary' : 'bg-text-primary text-white'}`}>
                                                {card.type === 'nutrition' ? <Flame size={14} fill="currentColor" /> : card.type === 'workout' ? <Zap size={14} fill="currentColor" /> : <ShoppingBag size={14} />}
                                            </div>
                                            <div>
                                                <p className={`text-xs ${card.type === 'store' ? 'text-text-secondary' : 'text-white/80'}`}>Insight</p>
                                                <p className={`text-sm font-bold ${card.type === 'store' ? 'text-text-primary' : 'text-white'}`}>{card.insight || card.goal}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-3xl font-light text-[#5E4B56]">{card.title}</h2>
                                        <h2 className="text-3xl font-bold text-[#7A6364] mb-4">{card.subtitle}</h2>
                                        <p className="text-[#7A6364] text-sm">{card.desc}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 -mt-4 mb-4">
                {cards.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-6 bg-text-primary' : 'w-1.5 bg-text-primary/20'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default InsightSection;

import React, { useState } from 'react';
import { ArrowLeft, Sparkles, ShoppingBag, Search, Filter, Star, Plus } from 'lucide-react';

const StoreView = ({ onBack }) => {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [showRecommendations, setShowRecommendations] = useState(false);

    const products = [
        {
            id: 1,
            name: "Whey Isolate",
            category: "Protein",
            price: "$45.00",
            rating: 4.8,
            image: "bg-[#D4A587]",
            recommended: true,
            reason: "Matches your high protein goal"
        },
        {
            id: 2,
            name: "Keto Cookies",
            category: "Snacks",
            price: "$12.50",
            rating: 4.5,
            image: "bg-[#9D9176]",
            recommended: false
        },
        {
            id: 3,
            name: "Pre-Workout",
            category: "Energy",
            price: "$32.00",
            rating: 4.9,
            image: "bg-[#7A6364]",
            recommended: true,
            reason: "Boosts HIIT performance"
        },
        {
            id: 4,
            name: "Multivitamin",
            category: "Health",
            price: "$25.00",
            rating: 4.7,
            image: "bg-[#5E4B56]",
            recommended: false
        }
    ];

    const handleAnalyze = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setShowRecommendations(true);
        }, 1500);
    };

    return (
        <div className="w-full h-full flex flex-col gap-6 animate-in slide-in-from-right duration-300 relative">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="w-10 h-10 rounded-full bg-white border border-[#5E4B56]/10 flex items-center justify-center text-[#5E4B56] hover:bg-white/80 transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-2xl font-bold text-[#5E4B56]">Wellness Store</h1>
                </div>

                <button
                    onClick={handleAnalyze}
                    disabled={showRecommendations}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${showRecommendations ? 'bg-[#D4A587]/10 text-[#D4A587]' : 'bg-[#5E4B56] text-white shadow-lg shadow-[#5E4B56]/20'}`}
                >
                    {isAnalyzing ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span className="text-xs font-bold">Analyzing...</span>
                        </>
                    ) : showRecommendations ? (
                        <>
                            <Sparkles size={16} />
                            <span className="text-xs font-bold">Personalized</span>
                        </>
                    ) : (
                        <>
                            <Sparkles size={16} />
                            <span className="text-xs font-bold">AI Analyze</span>
                        </>
                    )}
                </button>
            </div>

            {/* Search Bar */}
            <div className="flex gap-3">
                <div className="flex-1 h-12 bg-white rounded-2xl border border-[#5E4B56]/5 flex items-center px-4 gap-3">
                    <Search size={18} className="text-[#7A6364]" />
                    <input
                        type="text"
                        placeholder="Search for supplements..."
                        className="flex-1 bg-transparent border-none outline-none text-sm text-[#5E4B56] placeholder-[#7A6364]/50"
                    />
                </div>
                <button className="w-12 h-12 rounded-2xl bg-white border border-[#5E4B56]/5 flex items-center justify-center text-[#5E4B56]">
                    <Filter size={18} />
                </button>
            </div>

            {/* AI Recommendation Banner */}
            {showRecommendations && (
                <div className="w-full p-4 rounded-2xl bg-[#D4A587]/10 border border-[#D4A587]/20 flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                    <div className="w-8 h-8 rounded-full bg-[#D4A587] flex items-center justify-center text-white shrink-0">
                        <Sparkles size={14} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-[#5E4B56]">Curated for You</h3>
                        <p className="text-xs text-[#7A6364] leading-relaxed">
                            Based on your goal to <span className="font-bold">Gain Muscle</span> and recent <span className="font-bold">HIIT</span> activity, we recommend these essentials.
                        </p>
                    </div>
                </div>
            )}

            {/* Products Grid */}
            <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
                <div className="grid grid-cols-2 gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`p-3 rounded-[24px] bg-white border transition-all duration-300 group cursor-pointer ${showRecommendations && product.recommended ? 'border-[#D4A587] shadow-lg shadow-[#D4A587]/10 ring-1 ring-[#D4A587]' : 'border-[#5E4B56]/5 shadow-sm'}`}
                        >
                            {/* Image Placeholder */}
                            <div className={`w-full aspect-square rounded-2xl ${product.image} mb-3 relative overflow-hidden`}>
                                {showRecommendations && product.recommended && (
                                    <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[8px] font-bold text-[#D4A587] uppercase tracking-wider shadow-sm">
                                        Recommended
                                    </div>
                                )}
                                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#5E4B56] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                    <Plus size={16} />
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <span className="text-[10px] font-bold text-[#7A6364] uppercase tracking-wide">{product.category}</span>
                                    <div className="flex items-center gap-0.5">
                                        <Star size={10} className="text-[#9D9176] fill-[#9D9176]" />
                                        <span className="text-[10px] font-bold text-[#5E4B56]">{product.rating}</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-[#5E4B56] leading-tight">{product.name}</h3>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-sm font-bold text-[#5E4B56]">{product.price}</span>
                                    {showRecommendations && product.recommended && (
                                        <span className="text-[9px] text-[#D4A587] font-medium truncate max-w-[60px]">{product.reason}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoreView;

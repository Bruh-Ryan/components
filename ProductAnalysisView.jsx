import React from 'react';
import { ArrowLeft, Check, AlertCircle, Plus, Share2, ScanLine } from 'lucide-react';

const ProductAnalysisView = ({ onBack }) => {
    // Mock Data for "Greek Yogurt"
    const product = {
        name: 'Greek Yogurt',
        brand: 'Oikos Triple Zero',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a029177b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9ndXJ0fGVufDB8fDB8fHww', // Placeholder
        score: 92,
        calories: 100,
        macros: {
            protein: { value: 15, unit: 'g', percentage: 60, color: 'bg-[#D4A587]' },
            carbs: { value: 10, unit: 'g', percentage: 30, color: 'bg-[#9D9176]' },
            fats: { value: 0, unit: 'g', percentage: 10, color: 'bg-[#7A6364]' }
        },
        analysis: [
            { id: 1, type: 'good', text: 'Excellent source of Protein', icon: Check },
            { id: 2, type: 'good', text: 'Low in Sugar', icon: Check },
            { id: 3, type: 'neutral', text: 'Contains artificial sweeteners', icon: AlertCircle }
        ],
        goalImpact: 'Matches your High Protein goal'
    };

    return (
        <div className="w-full h-full flex flex-col animate-in slide-in-from-right duration-300 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-white border border-[#5E4B56]/10 flex items-center justify-center text-[#5E4B56] hover:bg-white/80 transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-lg font-bold text-[#5E4B56]">Product Analysis</h1>
                <button className="w-10 h-10 rounded-full bg-white border border-[#5E4B56]/10 flex items-center justify-center text-[#5E4B56] hover:bg-white/80 transition-colors">
                    <Share2 size={18} />
                </button>
            </div>

            {/* Product Card */}
            <div className="w-full bg-white rounded-[32px] p-6 shadow-xl shadow-[#5E4B56]/5 border border-[#5E4B56]/10 relative overflow-hidden mb-6">
                <div className="absolute top-4 right-4 bg-[#A9BFA8] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Health Score: {product.score}
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 rounded-full bg-[#F7F2EB] flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                        {/* Using a generic icon if image fails or for prototype */}
                        <div className="text-4xl">🥣</div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-[#5E4B56]">{product.name}</h2>
                        <p className="text-sm text-[#7A6364]">{product.brand}</p>
                    </div>
                </div>

                {/* Macro Rings (Simplified as Bars for now) */}
                <div className="mt-8 flex justify-center gap-4">
                    {Object.entries(product.macros).map(([key, macro]) => (
                        <div key={key} className="flex flex-col items-center gap-2">
                            <div className="h-24 w-2 bg-[#F7F2EB] rounded-full relative overflow-hidden">
                                <div
                                    className={`absolute bottom-0 left-0 w-full rounded-full ${macro.color}`}
                                    style={{ height: `${macro.percentage}%` }}
                                ></div>
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-bold text-[#5E4B56] uppercase">{key}</p>
                                <p className="text-[10px] text-[#7A6364]">{macro.value}{macro.unit}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Goal Impact */}
            <div className="w-full bg-[#D4A587] rounded-2xl p-4 text-white mb-6 flex items-center gap-3 shadow-lg shadow-[#D4A587]/20">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Check size={20} />
                </div>
                <div>
                    <p className="text-xs font-bold opacity-80 uppercase tracking-wide">Goal Impact</p>
                    <p className="font-bold">{product.goalImpact}</p>
                </div>
            </div>

            {/* Detailed Analysis */}
            <div className="flex flex-col gap-3">
                <h3 className="text-xs font-bold text-[#7A6364] uppercase tracking-widest px-1">Detailed Analysis</h3>
                {product.analysis.map((item) => (
                    <div key={item.id} className="w-full p-4 rounded-2xl bg-white border border-[#5E4B56]/5 flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.type === 'good' ? 'bg-[#A9BFA8]/20 text-[#A9BFA8]' : 'bg-[#D4A587]/20 text-[#D4A587]'
                            }`}>
                            <item.icon size={16} />
                        </div>
                        <span className="text-sm font-medium text-[#5E4B56]">{item.text}</span>
                    </div>
                ))}
            </div>

            {/* Action Button */}
            <div className="mt-auto pt-6">
                <button className="w-full py-4 rounded-2xl bg-[#5E4B56] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#4A3B44] transition-colors shadow-lg shadow-[#5E4B56]/20">
                    <Plus size={20} />
                    Add to Diary
                </button>
            </div>
        </div>
    );
};

export default ProductAnalysisView;

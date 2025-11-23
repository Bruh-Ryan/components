import React, { useState } from 'react';
import { ArrowLeft, Target, Settings, Shield, Bell, ChevronRight, Edit2, Database } from 'lucide-react';

const ProfileView = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('goals'); // 'goals', 'stats', 'nutrition'

    const [goals, setGoals] = useState([
        { id: 1, title: 'Bulk Mode', current: 78, target: 85, unit: 'kg', color: 'bg-[#D4A587]', bg: 'bg-[#D4A587]/20' },
        { id: 2, title: 'Monthly Run', current: 35, target: 50, unit: 'km', color: 'bg-[#9D9176]', bg: 'bg-[#9D9176]/20' },
    ]);

    const [settings, setSettings] = useState([
        { id: 1, label: 'Notifications', type: 'toggle', value: true, icon: Bell },
        { id: 2, label: 'Ad Data Sharing', type: 'toggle', value: false, icon: Database },
        { id: 3, label: 'Privacy & Security', type: 'link', icon: Shield },
    ]);

    const toggleSetting = (id) => {
        setSettings(settings.map(s => s.id === id ? { ...s, value: !s.value } : s));
    };

    return (
        <div className="w-full h-full flex flex-col gap-6 animate-in slide-in-from-right duration-300 pb-20">
            {/* Header */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-white border border-[#5E4B56]/10 flex items-center justify-center text-[#5E4B56] hover:bg-white/80 transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-2xl font-bold text-[#5E4B56]">Profile</h1>
            </div>

            {/* User Info */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full bg-[#D4A587]/20 border-4 border-white shadow-lg flex items-center justify-center text-3xl font-bold text-[#5E4B56]">
                    U
                </div>
                <h2 className="text-xl font-bold text-[#5E4B56]">Ryan G.</h2>
                <span className="px-3 py-1 rounded-full bg-white border border-[#5E4B56]/10 text-xs font-bold text-[#7A6364] uppercase tracking-wide">Pro Member</span>
            </div>

            {/* Goals Section */}
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center px-1">
                    <h2 className="text-xs font-bold text-[#7A6364] uppercase tracking-widest">Current Progress</h2>
                    <button className="text-[#D4A587] hover:text-[#C2947A]">
                        <Edit2 size={14} />
                    </button>
                </div>

                {/* Tab Pill */}
                <div className="flex p-1 bg-white rounded-full border border-[#5E4B56]/10 relative">
                    <div
                        className={`absolute top-1 bottom-1 rounded-full bg-[#5E4B56] transition-all duration-300 ease-out shadow-sm ${activeTab === 'goals' ? 'left-1 w-[32%]' : activeTab === 'stats' ? 'left-[34%] w-[32%]' : 'left-[67%] w-[32%]'
                            }`}
                    ></div>
                    <button
                        onClick={() => setActiveTab('goals')}
                        className={`flex-1 py-2 rounded-full text-xs font-bold text-center relative z-10 transition-colors duration-300 ${activeTab === 'goals' ? 'text-white' : 'text-[#7A6364] hover:text-[#5E4B56]'}`}
                    >
                        Goals
                    </button>
                    <button
                        onClick={() => setActiveTab('stats')}
                        className={`flex-1 py-2 rounded-full text-xs font-bold text-center relative z-10 transition-colors duration-300 ${activeTab === 'stats' ? 'text-white' : 'text-[#7A6364] hover:text-[#5E4B56]'}`}
                    >
                        Stats
                    </button>
                    <button
                        onClick={() => setActiveTab('nutrition')}
                        className={`flex-1 py-2 rounded-full text-xs font-bold text-center relative z-10 transition-colors duration-300 ${activeTab === 'nutrition' ? 'text-white' : 'text-[#7A6364] hover:text-[#5E4B56]'}`}
                    >
                        Nutrition
                    </button>
                </div>

                {/* Tab Content */}
                <div className="flex flex-col gap-4 min-h-[180px] animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {activeTab === 'goals' && (
                        <>
                            {goals.map((goal) => (
                                <div key={goal.id} className="w-full p-5 rounded-2xl bg-white border border-[#5E4B56]/10 shadow-sm animate-in fade-in duration-300">
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <h3 className="font-bold text-[#5E4B56]">{goal.title}</h3>
                                            <p className="text-xs text-[#7A6364]">
                                                <span className="font-bold text-[#5E4B56]">{goal.current}</span> / {goal.target} {goal.unit}
                                            </p>
                                        </div>
                                        <span className="text-xs font-bold text-[#7A6364]">
                                            {Math.round((goal.current / goal.target) * 100)}%
                                        </span>
                                    </div>
                                    <div className={`w-full h-2 rounded-full ${goal.bg} overflow-hidden`}>
                                        <div
                                            className={`h-full rounded-full ${goal.color} transition-all duration-1000 ease-out`}
                                            style={{ width: `${(goal.current / goal.target) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {activeTab === 'stats' && (
                        <>
                            <div className="w-full p-5 rounded-2xl bg-white border border-[#5E4B56]/10 shadow-sm animate-in fade-in duration-300">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-[#5E4B56]">Workout Frequency</h3>
                                    <span className="text-xs font-bold text-[#9D9176]">4/5</span>
                                </div>
                                <div className="flex justify-between items-end gap-2 h-16">
                                    {[60, 45, 0, 75, 50, 0, 0].map((h, i) => (
                                        <div key={i} className="flex-1 flex flex-col justify-end gap-1 group">
                                            <div
                                                className={`w-full rounded-t-lg transition-all duration-500 ${h > 0 ? 'bg-[#9D9176]' : 'bg-[#9D9176]/10'}`}
                                                style={{ height: `${h > 0 ? h : 10}%` }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-2 text-[10px] text-[#7A6364] font-bold uppercase">
                                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'nutrition' && (
                        <>
                            <div className="grid grid-cols-2 gap-3 animate-in fade-in duration-300">
                                <div className="p-4 rounded-2xl bg-white border border-[#5E4B56]/10 shadow-sm">
                                    <span className="text-[10px] text-[#7A6364] uppercase font-bold">Protein</span>
                                    <div className="flex items-end gap-1 mt-1">
                                        <span className="text-2xl font-bold text-[#5E4B56]">120g</span>
                                        <span className="text-xs text-[#7A6364] mb-1">/ 140g</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-[#F7F2EB] rounded-full mt-2 overflow-hidden">
                                        <div className="w-[85%] h-full bg-[#D4A587] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white border border-[#5E4B56]/10 shadow-sm">
                                    <span className="text-[10px] text-[#7A6364] uppercase font-bold">Calories</span>
                                    <div className="flex items-end gap-1 mt-1">
                                        <span className="text-2xl font-bold text-[#5E4B56]">1.8k</span>
                                        <span className="text-xs text-[#7A6364] mb-1">/ 2.2k</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-[#F7F2EB] rounded-full mt-2 overflow-hidden">
                                        <div className="w-[65%] h-full bg-[#D4A587] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-4 rounded-2xl bg-[#D4A587]/10 border border-[#D4A587]/20 flex items-center justify-between">
                                <span className="text-xs font-bold text-[#D4A587]">Water Intake</span>
                                <span className="text-sm font-bold text-[#5E4B56]">2.1L <span className="text-[#7A6364] font-normal text-xs">/ 3L</span></span>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Settings Section */}
            <div className="flex flex-col gap-2 mt-2">
                <h2 className="text-xs font-bold text-[#7A6364] uppercase tracking-widest px-1 mb-1">Settings</h2>

                <div className="bg-white rounded-2xl border border-[#5E4B56]/10 overflow-hidden">
                    {settings.map((item, idx) => (
                        <div
                            key={item.id}
                            className={`p-4 flex items-center justify-between ${idx !== settings.length - 1 ? 'border-b border-[#5E4B56]/5' : ''}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#F7F2EB] flex items-center justify-center text-[#7A6364]">
                                    <item.icon size={14} />
                                </div>
                                <span className="text-sm font-medium text-[#5E4B56]">{item.label}</span>
                            </div>

                            {item.type === 'toggle' ? (
                                <div
                                    onClick={() => toggleSetting(item.id)}
                                    className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 ${item.value ? 'bg-[#9D9176]' : 'bg-[#7A6364]/20'}`}
                                >
                                    <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${item.value ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                </div>
                            ) : (
                                <ChevronRight size={16} className="text-[#7A6364]/50" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileView;

import React from 'react';
import { ArrowLeft, Users, Video, Trophy, Heart, Swords } from 'lucide-react';

const SocialView = ({ onBack }) => {
    const liveFriends = [
        { id: 1, name: 'Sarah M.', activity: 'Morning Flow Yoga', time: '12:30', color: 'bg-orange-100', avatar: 'bg-orange-200' },
        { id: 2, name: 'Mike T.', activity: 'HIIT Blast', time: '05:45', color: 'bg-teal-100', avatar: 'bg-teal-200' },
        { id: 3, name: 'Jessica L.', activity: 'Meditation', time: '08:00', color: 'bg-purple-100', avatar: 'bg-purple-200' },
    ];

    const recentActivity = [
        { id: 1, user: 'Alex K.', action: 'completed a 5k run', time: '2h ago' },
        { id: 2, user: 'Sarah M.', action: 'hit a new PR!', time: '4h ago' },
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
                <h1 className="text-2xl font-bold text-[#5E4B56]">Live Club</h1>
            </div>

            {/* Live Now Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between px-1">
                    <h2 className="text-xs font-bold text-[#7A6364] uppercase tracking-widest">Active Now</h2>
                    <span className="px-2 py-0.5 rounded-full bg-[#9D9176]/10 text-[10px] font-bold text-[#9D9176] border border-[#9D9176]/20">3 Online</span>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
                            <div className="w-16 h-16 rounded-full bg-white border-2 border-[#9D9176] p-1 relative">
                                <div className="w-full h-full rounded-full bg-[#D4A587]/20 flex items-center justify-center text-[#5E4B56] font-bold text-lg">
                                    U{i}
                                </div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#9D9176] border-2 border-white"></div>
                            </div>
                            <span className="text-xs font-medium text-[#5E4B56]">User {i}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Challenge Button */}
            <button className="w-full py-4 rounded-2xl bg-[#5E4B56] text-white font-bold text-lg shadow-lg shadow-[#5E4B56]/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                <Users size={20} />
                Start Group Challenge
            </button>

            {/* Recent Activity */}
            <div className="flex flex-col gap-3 mt-2">
                <h2 className="text-xs font-bold text-[#7A6364] uppercase tracking-widest px-1">Recent Activity</h2>
                {[1, 2].map((i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white border border-[#5E4B56]/5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#D4A587]/20 flex items-center justify-center text-[#5E4B56] font-bold">
                            U{i}
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-[#5E4B56]"><span className="font-bold">User {i}</span> completed a 5k run.</p>
                            <span className="text-[10px] text-[#7A6364]">2 hours ago</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#D4A587]"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialView;

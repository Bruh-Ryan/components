
import React, { useState, useEffect } from 'react';
import AIAssistant from './AIAssistant';
import { Moon, Sun } from 'lucide-react';

const Layout = ({ children, showAssistant = true, onNavigate }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <div className="w-full min-h-screen bg-bg-primary flex items-center justify-center p-4 font-['Space_Grotesk'] text-text-primary transition-colors duration-300">
            <div className="w-full max-w-md h-[850px] bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-[40px] shadow-2xl border border-glass-border relative overflow-hidden transition-colors duration-300">
                {/* Background Blobs - Earthy Tones */}
                <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-accent-primary/30 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-accent-secondary/30 rounded-full blur-[80px]"></div>

                {/* Status Bar Placeholder */}
                <div className="w-full h-12 flex justify-between items-center px-6 relative z-10">
                    <span className="text-xs font-bold text-text-secondary">9:41</span>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="text-text-secondary hover:text-text-primary transition-colors"
                        >
                            {isDark ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                        <div className="flex gap-1.5">
                            <div className="w-4 h-4 rounded-full bg-text-secondary/20"></div>
                            <div className="w-4 h-4 rounded-full bg-text-secondary/20"></div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="w-full h-[calc(100%-48px)] overflow-y-auto no-scrollbar px-6 pt-20 pb-20 relative z-10">
                    {children}
                </div>

                {/* Floating AI Assistant */}
                {showAssistant && <AIAssistant onNavigate={onNavigate} />}
            </div>
        </div>
    );
};

export default Layout;

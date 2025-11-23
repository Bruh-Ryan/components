import React, { useState } from 'react';
import { Smartphone, ArrowRight } from 'lucide-react';

const LoginView = ({ onLogin }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            onLogin();
        }, 1500);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden animate-in fade-in duration-500">
            {/* Abstract Retro Background Shapes */}
            <div className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] bg-[#D4A587]/40 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-[400px] h-[400px] bg-[#9D9176]/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-xs flex flex-col items-center gap-8">

                {/* Branding */}
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-[#5E4B56] tracking-tighter mb-2">FITNESS<br /><span className="text-[#D4A587]">RETRO</span></h1>
                    <p className="text-[#7A6364] font-medium tracking-wide">Your daily dose of movement.</p>
                </div>

                {/* Actions */}
                <div className="w-full flex flex-col gap-4 mt-8">
                    {/* Google Button */}
                    <button
                        onClick={handleLogin}
                        className="w-full py-4 rounded-full bg-white border border-[#5E4B56]/10 shadow-lg shadow-[#5E4B56]/5 flex items-center justify-center gap-3 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 group"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-[#D4A587] border-t-[#5E4B56] rounded-full animate-spin"></div>
                        ) : (
                            <>
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                <span className="font-bold text-[#5E4B56]">Continue with Google</span>
                            </>
                        )}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 w-full">
                        <div className="h-px bg-[#5E4B56]/10 flex-1"></div>
                        <span className="text-xs font-bold text-[#7A6364] uppercase">Or</span>
                        <div className="h-px bg-[#5E4B56]/10 flex-1"></div>
                    </div>

                    {/* Phone Input */}
                    <div className="w-full relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#7A6364] group-focus-within:text-[#9D9176] transition-colors">
                            <Smartphone size={18} />
                        </div>
                        <input
                            type="tel"
                            placeholder="Enter Phone Number"
                            className="w-full py-4 pl-12 pr-12 rounded-full bg-white/50 border border-[#5E4B56]/10 focus:outline-none focus:border-[#9D9176] focus:ring-2 focus:ring-[#9D9176]/20 transition-all font-medium text-[#5E4B56] placeholder-[#7A6364]/50"
                        />
                        <button
                            onClick={handleLogin}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#9D9176] text-white flex items-center justify-center hover:bg-[#8C8166] transition-colors shadow-md"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-[10px] text-[#7A6364] text-center mt-8 max-w-[200px] leading-relaxed">
                    By continuing, you agree to our <span className="underline cursor-pointer hover:text-[#5E4B56]">Terms</span> and <span className="underline cursor-pointer hover:text-[#5E4B56]">Privacy Policy</span>.
                </p>
            </div>
        </div>
    );
};

export default LoginView;

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function CTASection() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <section className="relative bg-black py-20 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-stone-700/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div
                    className={`relative bg-gradient-to-br from-red-950 via-stone-900 to-stone-950 rounded-3xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                    onMouseMove={handleMouseMove}
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-stone-800/10 to-transparent" />

                    {/* Mouse Tracking Glow */}
                    <div
                        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.15), transparent 70%)`
                        }}
                    />

                    {/* Border Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl border border-red-900/50 shadow-[inset_0_0_60px_rgba(239,68,68,0.1)]" />

                    {/* Content Container */}
                    <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
                        {/* Badge */}
                        <div
                            className={`inline-flex items-center px-4 py-2 bg-red-600/20 border border-red-600/40 rounded-full mb-8 transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            <Sparkles className="w-4 h-4 mr-2 text-red-400" />
                            <span className="text-red-300 text-sm font-medium">Limited Time Offer</span>
                        </div>

                        {/* Heading */}
                        <h2
                            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1200 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            Bring Your Team{' '}
                            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                Together
                            </span>{' '}
                            Today
                        </h2>

                        {/* Description */}
                        <p
                            className={`text-stone-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            Join thousands of teams who have transformed their collaboration with our platform.
                            Start your free trial today and experience the difference.
                        </p>

                        {/* CTA Button */}
                        <div
                            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1200 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            <Link href="/contact" className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/40 hover:scale-105 flex items-center overflow-hidden">
                                <span className="relative z-10 flex items-center">
                                    Start Collaborating Free
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                {/* Button Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                            </Link>


                        </div>

                        {/* Trust Indicators */}
                        <div
                            className={`mt-12 flex flex-wrap justify-center items-center gap-6 text-stone-400 text-sm transition-all duration-1200 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                No credit card required
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                14-day free trial
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Cancel anytime
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-red-600/30 rounded-tl-3xl" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-red-600/30 rounded-br-3xl" />
                </div>

                {/* Social Proof */}
                <div
                    className={`mt-12 text-center transition-all duration-1200 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <p className="text-stone-500 text-sm mb-4">Trusted by leading companies worldwide</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="w-24 h-8 bg-stone-800 rounded-md"
                                style={{ opacity: 0.3 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
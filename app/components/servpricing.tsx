'use client';

import React, { useState, useEffect, useRef } from 'react';

// --- Data Structure ---
interface ServiceTier {
    name: string;
    tagline: string;
    features: string[];
    isPremier: boolean;
    color: 'red' | 'stone';
}

const serviceTiers: ServiceTier[] = [
    {
        name: 'Basic Assurance',
        tagline: 'Ideal for small web projects and static sites.',
        features: ['24/7 Monitoring', 'Monthly Security Patches', '99.5% Uptime Guarantee', 'Basic Incident Response', 'Web & DNS Management'],
        isPremier: false,
        color: 'stone',
    },
    {
        name: 'Premium Support',
        tagline: 'Best for dynamic applications and growing e-commerce.',
        features: ['Real-time Threat Detection', 'Weekly Software Updates', '99.9% Uptime SLA', 'Priority Incident Resolution', 'Cloud Infrastructure Optimization'],
        isPremier: true,
        color: 'red',
    },
    {
        name: 'Enterprise Custom',
        tagline: 'Dedicated solution for complex systems and high traffic.',
        features: ['Proactive Code Review', '24/7 Dedicated Engineer', '100% Uptime Guarantee', 'Advanced Load Balancing', 'Full Disaster Recovery Plan'],
        isPremier: false,
        color: 'stone',
    },
];

// --- Sub Component: Individual Service Card ---
const ServiceCard: React.FC<{ tier: ServiceTier; index: number }> = ({ tier, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer for staggered scroll animation (reveal and hide)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger the animation timing (150ms per card) when revealing
                    const delay = index * 150;
                    setTimeout(() => setIsVisible(true), delay);
                    // NOTE: observer.unobserve is removed to allow re-hiding when scrolling up
                } else {
                    // Hide the card smoothly when it leaves the viewport
                    // This handles the smooth hide on scroll up/down
                    setIsVisible(false);
                }
            },
            {
                // Trigger when 10% of the card is visible
                threshold: 0.1,
                // Look ahead 50px so animation starts just before it hits the bottom
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(cardRef.current);
            }
        };
    }, [index]);

    // Determine primary classes based on tier color and premier status
    const isRed = tier.color === 'red';
    const cardShadow = isRed ? 'shadow-2xl shadow-red-700/50' : 'shadow-xl shadow-stone-900/40';

    return (
        <div
            ref={cardRef}
            className={`
                relative w-full p-1 transition-all duration-700 ease-out 
                ${cardShadow} rounded-2xl group cursor-pointer
                ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16' // Animation: Slide in Up/Down
                }
                // ADD Hover Transformation
                transform hover:scale-[1.05] transition-transform duration-300 hover:shadow-red-500/80
            `}
            aria-label={`Service tier ${tier.name}`}
        >
            <div className={`p-6 md:p-8 rounded-xl h-full flex flex-col ${isRed ? 'bg-gradient-to-br from-red-800 to-black/90 scale-[1.03] border-2 border-red-600' : 'bg-stone-900'}`}>

                {/* Premier Tag */}
                {tier.isPremier && (
                    <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 px-4 py-1 text-xs font-bold tracking-wider rounded-full bg-red-600 text-white shadow-lg">
                        RECOMMENDED
                    </span>
                )}

                {/* Title and Tagline */}
                <div className="mb-4">
                    <h3 className={`text-3xl md:text-4xl font-extrabold mt-2 ${isRed ? 'text-white' : 'text-stone-300'}`}>{tier.name}</h3>
                </div>

                {/* Description */}
                <p className={`text-sm mb-6 ${isRed ? 'text-red-300' : 'text-stone-400'}`}>
                    {tier.tagline}
                </p>

                {/* Features List */}
                <ul className="space-y-3 flex-grow mb-8">
                    {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                            <svg
                                className={`w-5 h-5 mr-3 flex-shrink-0 ${isRed ? 'text-red-400' : 'text-stone-400'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={isRed ? 'text-white/90' : 'text-stone-300'}>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Removed individual "Contact Sales" button as requested */}
            </div>
        </div>
    );
};


// --- Main Component ---
export default function MaintenanceSalesSection() {
    return (
        // Main container with deep black/stone gradient background and extra padding for scroll space
        <section className="relative min-h-[120vh] pt-20 pb-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-black to-black">

            {/* Background Aesthetic Blur Spots (Red/Stone) */}
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-800/20 blur-[150px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-stone-700/20 blur-[150px] animate-pulse-slow-reverse" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Text */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-normal text-white mb-4 tracking-tighter">
                        World-Class <span className="text-red-500">Maintenance</span> & Support
                    </h1>
                    <p className="text-xl  font-light text-stone-400 mb-8">
                        Dedicated service tiers to ensure your software and web assets run flawlessly, 24/7.
                    </p>

                    {/* Simple Call to Action (Replaces the Monthly/Yearly toggle) */}
                    <div className="inline-flex rounded-full p-1 bg-stone-800 border border-stone-700 shadow-inner">
                        <span className="px-6 py-3 text-sm font-semibold rounded-full bg-red-600 text-white shadow-md">
                            No Commitments. Just Performance.
                        </span>
                    </div>
                </div>

                {/* Service Grid - Responsive layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start  justify-center mb-16">
                    {serviceTiers.map((tier, index) => (
                        <ServiceCard key={tier.name} tier={tier} index={index} />
                    ))}
                </div>

                {/* Single Global CTA Button: Book a meeting */}
                <div className="text-center">
                    <button className="group px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full font-normal text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/40 hover:scale-[1.03] relative overflow-hidden">
                        <span className="relative z-10">Book a meeting</span>
                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    </button>
                    <p className="text-stone-400 text-sm mt-4">Speak to our dedicated support team about custom requirements.</p>
                </div>
            </div>

            <style jsx global>{`
                /* CSS for smooth background animations */
                @keyframes pulse-slow {
                    0%, 100% {
                        transform: scale(1) translate(0, 0);
                        opacity: 0.6;
                    }
                    50% {
                        transform: scale(1.05) translate(10px, -10px);
                        opacity: 0.9;
                    }
                }
                @keyframes pulse-slow-reverse {
                    0%, 100% {
                        transform: scale(1) translate(0, 0);
                        opacity: 0.6;
                    }
                    50% {
                        transform: scale(1.05) translate(-10px, 10px);
                        opacity: 0.9;
                    }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 20s ease-in-out infinite alternate;
                }
                .animate-pulse-slow-reverse {
                    animation: pulse-slow-reverse 20s ease-in-out infinite alternate;
                }
            `}</style>
        </section>
    );
}

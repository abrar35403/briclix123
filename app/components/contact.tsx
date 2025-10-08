'use client';

import React, { useState, useEffect } from 'react';

type InquiryType = 'contactSales' | 'takeService' | 'workOnProject' | 'workWithTeam' | 'outsourceProject';

// Define inquiry options with an explicit index for directional change logic
const inquiryOptions: { id: InquiryType; label: string; index: number }[] = [
    { id: 'contactSales', label: 'Contact Sales', index: 0 },
    { id: 'takeService', label: 'Get Service', index: 1 },
    { id: 'workOnProject', label: 'New Project', index: 2 },
    { id: 'workWithTeam', label: 'Staff Augmentation', index: 3 },
    { id: 'outsourceProject', label: 'Outsource', index: 4 },
];

const AnimatedInput: React.FC<{
    label: string;
    id: string;
    type?: string;
    placeholder: string;
    required?: boolean;
}> = ({ label, id, type = 'text', placeholder, required = false }) => {
    return (
        <div className="relative w-full group">
            <label htmlFor={id} className="block text-sm font-medium text-stone-400 mb-2 group-focus-within:text-red-400 transition-colors duration-300">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {type === 'textarea' ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    rows={4}
                    className="w-full p-4 bg-black/20 backdrop-blur-md border border-stone-700/50 text-white rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:bg-black/30 transition-all duration-300 placeholder:text-stone-600 hover:border-stone-600 hover:bg-black/25 focus:scale-[1.01] shadow-inner"
                    required={required}
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className="w-full p-3 bg-black/20 backdrop-blur-md border border-stone-700/50 text-white rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:bg-black/30 transition-all duration-300 placeholder:text-stone-600 hover:border-stone-600 hover:bg-black/25 focus:scale-[1.01] shadow-inner"
                    required={required}
                />
            )}
        </div>
    );
};

// Conditional fields component with animation managed by the key prop
const ConditionalFields: React.FC<{ inquiryType: InquiryType; slideDirection: 'right' | 'left' }> = ({ inquiryType, slideDirection }) => {
    let content;

    switch (inquiryType) {
        case 'contactSales':
            content = (
                <>
                    <AnimatedInput label="Company Name" id="company" placeholder="Acme Software Solutions" />
                    <AnimatedInput label="Budget Range (USD)" id="budget" placeholder="$5,000 - $10,000" />
                </>
            );
            break;
        case 'takeService':
            content = (
                <>
                    <AnimatedInput label="Platform Type" id="platform" placeholder="React, Angular, Django" required />
                    <AnimatedInput label="Uptime Requirement" id="uptime" placeholder="99.9%" required />
                </>
            );
            break;
        case 'workOnProject':
        case 'outsourceProject':
            content = (
                <>
                    <AnimatedInput label="Launch Date" id="launch_date" type="date" placeholder="" />
                    <AnimatedInput label="Tech Stack" id="tech_stack" placeholder="Next.js, FastAPI" />
                </>
            );
            break;
        case 'workWithTeam':
            content = (
                <>
                    <AnimatedInput label="Required Role" id="role" placeholder="Senior Frontend Developer" required />
                    <AnimatedInput label="Duration (Months)" id="duration" type="number" placeholder="6" required />
                </>
            );
            break;
        default:
            content = null;
    }

    // Use inquiryType as a key to force re-render, triggering the CSS animation
    return (
        <div key={inquiryType} className={`conditional-fields ${slideDirection === 'right' ? 'slide-in-right' : 'slide-in-left'}`}>
            <div className="grid md:grid-cols-2 gap-6">
                {content}
            </div>
        </div>
    );
};

export default function App() {
    const [inquiryType, setInquiryType] = useState<InquiryType>('contactSales');
    const [prevInquiryType, setPrevInquiryType] = useState<InquiryType | null>(null);
    const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');
    const [isVisible, setIsVisible] = useState(false);

    // Initial load animation
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Determine slide direction
    useEffect(() => {
        if (!prevInquiryType) return;

        const oldIndex = inquiryOptions.findIndex(opt => opt.id === prevInquiryType);
        const newIndex = inquiryOptions.findIndex(opt => opt.id === inquiryType);

        // If the index is increasing (moving down the list), the new form slides in from the right.
        // If the index is decreasing (moving up the list), the new form slides in from the left.
        const direction = newIndex > oldIndex ? 'right' : 'left';
        setSlideDirection(direction);

    }, [inquiryType, prevInquiryType]);


    const handleTabChange = (newType: InquiryType) => {
        if (newType !== inquiryType) {
            setPrevInquiryType(inquiryType);
            setInquiryType(newType);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would handle form submission logic here
        console.log('Form submitted for:', inquiryType);
    };

    const currentOption = inquiryOptions.find(opt => opt.id === inquiryType) || inquiryOptions[0];

    // Options with red/stone gradients only, removing all blue/cyan
    const gradientOptions = [
        { id: 'contactSales', gradient: 'from-red-600/30 via-stone-900/40 to-red-900/30' },
        { id: 'takeService', gradient: 'from-stone-700/30 via-red-600/30 to-stone-800/30' },
        { id: 'workOnProject', gradient: 'from-red-700/30 via-stone-900/30 to-red-800/30' },
        { id: 'workWithTeam', gradient: 'from-stone-600/30 via-red-700/30 to-stone-900/30' },
        { id: 'outsourceProject', gradient: 'from-red-800/30 via-stone-700/30 to-red-600/30' },
    ];

    const currentGradient = gradientOptions.find(opt => opt.id === inquiryType)?.gradient || gradientOptions[0].gradient;

    return (
        <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-black font-inter">
            {/* Dynamic Gradient Background (Red/Stone only) */}
            <div
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentGradient}`}
            />

            {/* Animated Blob Overlays (Red/Stone only) */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-stone-600/20 rounded-full blur-[150px] animate-blob animation-delay-2000" />
                {/* The third blob is now a darker stone color */}
                <div className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-stone-800/15 rounded-full blur-[130px] animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`}>
                    {/* Glassmorphism Container (Red/Stone only) */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-stone-900/60 to-black/70 border border-red-900/20 rounded-3xl overflow-hidden shadow-2xl shadow-black/90">
                        <div className="grid md:grid-cols-5">

                            {/* Left Panel - Navigation/Tabs */}
                            <div className="md:col-span-2 p-8 md:p-12 backdrop-blur-3xl bg-gradient-to-br from-red-900/10 to-stone-900/60 border-r border-red-900/30 relative overflow-hidden">
                                {/* Glass shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-transparent opacity-50" />

                                <div className="relative z-10">
                                    <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-md border border-red-900/30 rounded-full mb-6 hover:scale-105 transition-transform duration-300">
                                        {/* Accent text changed to red-400 */}
                                        <span className="text-red-400 text-sm font-medium">Inquire Now</span>
                                    </div>

                                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                        Forge a <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Connection</span>
                                    </h1>

                                    <p className="text-stone-300 text-lg leading-relaxed mb-8">
                                        Select the type of inquiry below to adjust the form fields accordingly and tell us your needs.
                                    </p>

                                    {/* Tab Navigation */}
                                    <div className="mt-12 space-y-2">
                                        {inquiryOptions.map((option) => (
                                            <button
                                                key={option.id}
                                                onClick={() => handleTabChange(option.id as InquiryType)}
                                                className={`w-full text-left px-4 py-3 rounded-xl backdrop-blur-md transition-all duration-300 ${inquiryType === option.id
                                                    ? 'bg-gradient-to-r from-red-600/80 to-red-700/80 text-white shadow-lg shadow-red-600/30 scale-105 border border-red-500/50 font-semibold'
                                                    : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white hover:scale-102 border border-stone-800/50'
                                                    }`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Panel - Form (Contains the Sliding Content) */}
                            <div className="md:col-span-3 p-8 md:p-12 backdrop-blur-2xl bg-black/50 relative overflow-hidden">

                                {/* Static Form Content */}
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold text-white mb-2">Detailed Inquiry</h2>
                                    <p className="text-stone-400 mb-8">Fill out the general and specific details below.</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <AnimatedInput label="First Name" id="firstName" placeholder="John" required />
                                            <AnimatedInput label="Last Name" id="lastName" placeholder="Doe" required />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <AnimatedInput label="Postal Code" id="postal" placeholder="12345" />
                                            <AnimatedInput label="Email Address" id="email" type="email" placeholder="john@example.com" required />
                                        </div>

                                        {/* Dynamic Sliding Content Container */}
                                        <div className="pt-4 overflow-hidden relative min-h-[150px]">
                                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                                                <span className="w-8 h-1 bg-gradient-to-r from-red-500 to-stone-500 mr-3" />
                                                Specific Details for: {currentOption.label}
                                            </h3>
                                            <ConditionalFields inquiryType={inquiryType} slideDirection={slideDirection} />
                                        </div>
                                        {/* End Dynamic Sliding Content Container */}

                                        <div className="pt-4">
                                            <AnimatedInput label="Message" id="message" type="textarea" placeholder="Tell us more..." />
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                className="group w-full px-8 py-4 bg-gradient-to-r from-red-600/80 to-stone-700/80 backdrop-blur-md hover:from-red-500 hover:to-stone-600 text-white rounded-xl font-bold text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/40 hover:scale-[1.02] relative overflow-hidden border border-red-800/20"
                                            >
                                                <span className="relative z-10">Submit Inquiry</span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* General Animations */
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
                    33% { transform: translate(30px, -30px) scale(1.1) rotate(120deg); }
                    66% { transform: translate(-20px, 20px) scale(0.9) rotate(240deg); }
                }

                .animate-blob {
                    animation: blob 20s ease-in-out infinite;
                }

                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
                .hover\\:scale-102:hover { transform: scale(1.02); }

                /* Custom Directional Slide Animations */
                
                /* Base state for the component being animated (ConditionalFields) */
                .conditional-fields {
                    position: absolute; /* Allows smooth positioning without affecting static flow */
                    width: 100%;
                }

                /* Slide In from the Right (Forwards movement in tabs) */
                @keyframes slide-in-right-kf {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .slide-in-right {
                    animation: slide-in-right-kf 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; /* Smooth ease-out curve */
                }

                /* Slide In from the Left (Backwards movement in tabs) */
                @keyframes slide-in-left-kf {
                    from { transform: translateX(-100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .slide-in-left {
                    animation: slide-in-left-kf 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; /* Smooth ease-out curve */
                }
            `}</style>
        </section>
    );
}
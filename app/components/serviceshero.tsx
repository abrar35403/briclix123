import React from 'react';
// import Image from 'next/image'; // <-- Removed
import Link from 'next/link';

const LightspeedHero: React.FC = () => {
    return (
        <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image/effect */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                {/* This would ideally be a more complex animation or a high-res image
            For a simple static representation, we'll use a placeholder or
            recreate the core visual with CSS/SVG if possible.
            For now, let's assume an image asset.
        */}
                <video
                    src="/portbg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <div className="flex flex-col space-y-4">
                    <h1 className="text-6xl font-semibold leading-tight">
                        Lightspeed <br /> Services
                    </h1>
                    <p className="text-3xl mt-4 font-normal">
                        Accelerating Digital <br /> Innovation
                    </p>
                </div>

                {/* Right Section - Text and Call to Action */}
                <div className="flex flex-col items-end text-right space-y-16">
                    <p className="max-w-md text-lg font-light">
                        We bring cutting-edge solutions to clients worldwide, bridging local insights with global reach
                    </p>

                    <div className="flex items-center space-x-4 mt-8">

                        <Link href="/portfolio" className="px-4 py-2 border-1 rounded border-white text-lg hover:bg-red-800 hover:text-red-50 transition-colors duration-300">
                            Discover our work
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default LightspeedHero;
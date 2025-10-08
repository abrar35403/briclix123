'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Star } from 'lucide-react';
// 1. Import the Image component
import Image from 'next/image';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    rating: number;
    bgColor: string;
}

const testimonials: Testimonial[] = [
    // ... (Your testimonials array remains the same)
    {
        id: 1,
        name: 'Mateen',
        role: 'Branch Manager',
        bio: 'Working at GoStudy means so much to me and I am indeed proud of my work. My heart feels full when students keep in touch with me. I brim with pride when I see my students graduating successfully and working in reputable companies.',
        image: '/Oan.jpeg',
        rating: 5,
        bgColor: 'from-red-600 to-stone-700'
    },
    {
        id: 2,
        name: 'Mateen',
        role: 'Branch Manager',
        bio: 'Working at GoStudy means so much to me and I am indeed proud of my work. My heart feels full when students keep in touch with me. I brim with pride when I see my students graduating successfully and working in reputable companies.',
        image: '/bakr.png',
        rating: 5,
        bgColor: 'from-red-600 to-stone-700'
    },
    {
        id: 3,
        name: 'Anas Shahid',
        role: 'Senior Developer',
        bio: 'Working at GoStudy means so much to me and I am indeed proud of my work. My heart feels full when students keep in touch with me. I brim with pride when I see my students graduating successfully and working in reputable companies.',
        image: '/anas.jpeg',
        rating: 5,
        bgColor: 'from-stone-600 to-stone-800'
    },
    {
        id: 4,
        name: 'Steffi',
        role: 'Senior Consultant',
        bio: 'Working at GoStudy means so much to me and I am indeed proud of my work. My heart feels full when students keep in touch with me. I brim with pride when I see my students graduating successfully and working in reputable companies.',
        image: '/umar.jpg',
        rating: 5,
        bgColor: 'from-red-500 to-red-700'
    },
    {
        id: 5,
        name: 'Sarah',
        role: 'Product Designer',
        bio: 'Working at GoStudy means so much to me and I am indeed proud of my work. My heart feels full when students keep in touch with me. I brim with pride when I see my students graduating successfully and working in reputable companies.',
        image: '/abd.jpg',
        rating: 5,
        bgColor: 'from-stone-700 to-red-800'
    },
    {
        id: 6,
        name: 'Alex',
        role: 'Lead Engineer',
        bio: 'Working at GoStudy means so much to me and I am indeed proud of my work. My heart feels full when students keep in touch with me. I brim with pride when I see my students graduating successfully and working in reputable companies.',
        image: '/sad.jpg',
        rating: 5,
        bgColor: 'from-red-700 to-stone-900'
    }
];

const TestimonialCard = ({
    testimonial,
    isFocused
}: {
    testimonial: Testimonial;
    isFocused: boolean;
}) => {
    return (
        <div
            className={`flex-shrink-0 transition-all duration-700 ease-out ${isFocused ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
                }`}
            style={{ width: '400px' }}
        >
            <div className="relative">
                {/* Image with colored background */}
                <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${testimonial.bgColor} p-1`}>
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">

                        {/* 2. Replace <img> with <Image /> and 3. Add width and height */}
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            // You must define explicit width and height when using the Image component
                            // The ratio is 4/5 based on your aspect-[4/5] class in the parent div
                            width={400} // Set an appropriate intrinsic width
                            height={500} // Set an appropriate intrinsic height (400*5/4 = 500)
                            // Use 'object-cover' within the style or Tailwind class to manage sizing
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Info Card Overlay */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-11/12 bg-stone-900 rounded-2xl p-6 shadow-2xl">
                    <h3 className="text-lime-400 text-2xl font-bold mb-1">{testimonial.name}</h3>
                    <p className="text-stone-300 text-sm mb-3">{testimonial.role}</p>
                    <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bio Text */}
            <div className="mt-24 text-center px-4">
                <p className="text-stone-400 leading-relaxed text-sm">
                    {testimonial.bio}
                </p>
            </div>
        </div>
    );
};

export default function ScrollingTestimonials() {
    // ... (Rest of your component remains the same)
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [focusedIndex, setFocusedIndex] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const lastScrollY = useRef(0);
    const animationFrameId = useRef<number | undefined>(undefined);

    // Vertical scroll handling (moves carousel horizontally)
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking && !isDragging) {
                animationFrameId.current = window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const scrollDelta = currentScrollY - lastScrollY.current;

                    // Move right on scroll down, left on scroll up
                    setScrollOffset(prev => prev + scrollDelta * 0.8);

                    lastScrollY.current = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [isDragging]);

    // Horizontal scroll/drag handling
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
                setScrollOffset(prev => prev + e.deltaX);
            }
        };

        const handleMouseDown = (e: MouseEvent) => {
            setIsDragging(true);
            setStartX(e.pageX - scrollContainer.offsetLeft);
            setScrollLeft(scrollOffset);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            setScrollOffset(scrollLeft - walk);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleMouseLeave = () => {
            setIsDragging(false);
        };

        scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
        scrollContainer.addEventListener('mousedown', handleMouseDown);
        scrollContainer.addEventListener('mousemove', handleMouseMove);
        scrollContainer.addEventListener('mouseup', handleMouseUp);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            scrollContainer.removeEventListener('wheel', handleWheel);
            scrollContainer.removeEventListener('mousedown', handleMouseDown);
            scrollContainer.removeEventListener('mousemove', handleMouseMove);
            scrollContainer.removeEventListener('mouseup', handleMouseUp);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDragging, startX, scrollLeft, scrollOffset]);

    // Calculate focused card
    useEffect(() => {
        const cardWidth = 400;
        const gap = 32;
        const totalWidth = cardWidth + gap;
        const containerWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
        const centerPosition = containerWidth / 2;

        // Loop the scroll offset
        const loopedOffset = ((scrollOffset % (totalWidth * testimonials.length)) + (totalWidth * testimonials.length)) % (totalWidth * testimonials.length);

        const adjustedOffset = loopedOffset + centerPosition;
        let closest = 1;
        let minDistance = Infinity;

        testimonials.forEach((_, index) => {
            const cardPosition = (index * totalWidth) + (cardWidth / 2);
            const distance = Math.abs(cardPosition - adjustedOffset);

            if (distance < minDistance) {
                minDistance = distance;
                closest = index;
            }
        });

        setFocusedIndex(closest);
    }, [scrollOffset]);


    return (
        <section className="relative bg-gradient-to-br from-stone-950 via-black to-stone-950 py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-stone-700/5 rounded-full blur-3xl" />
            </div>

            {/* Section Header */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    Meet Our{' '}
                    <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                        Amazing Team
                    </span>
                </h2>
                <p className="text-stone-400 text-lg max-w-2xl mx-auto">
                    Dedicated professionals passionate about making a difference
                </p>
            </div>

            {/* Scrolling Container */}
            <div
                ref={scrollContainerRef}
                className="relative cursor-grab active:cursor-grabbing"
            >
                <div
                    ref={containerRef}
                    className="flex gap-8 px-[calc(50vw-200px)] overflow-visible select-none"
                    style={{
                        transform: `translateX(${-scrollOffset}px)`,
                        transition: isDragging ? 'none' : 'transform 0.1s linear'
                    }}
                >
                    {/* Triple the testimonials for seamless infinite scroll */}
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                        <TestimonialCard
                            key={`${testimonial.id}-${index}`}
                            testimonial={testimonial}
                            isFocused={index % testimonials.length === focusedIndex}
                        />
                    ))}
                </div>

                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
            </div>

        </section>
    );
}
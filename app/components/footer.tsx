'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// TypeScript interfaces for footer data
interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface SocialLink {
    label: string;
    href: string;
    icon: React.ReactNode;
}

// Footer data structure
const footerData: FooterSection[] = [
    {
        title: "Company",
        links: [
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "About", href: "/about" },
            { label: "Career", href: "/career" }
        ]
    },
    {
        title: "Services",
        links: [
            { label: "Web Design & Dev.", href: "/services/web-design" },
            { label: "App Design & Dev.", href: "/services/app-design" },
            { label: "Visual Design", href: "/services/visual-design" },
            { label: "AI Integrations", href: "/services/ai-integrations" },
            { label: "Cybersecurity", href: "/services/cybersecurity" }
        ]
    }
];

// Social media data with icons
const socialLinks: SocialLink[] = [
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
        )
    },
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
        )
    },
    {
        label: "Facebook",
        href: "https://facebook.com",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
        )
    },
    {
        label: "Youtube",
        href: "https://youtube.com",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
            </svg>
        )
    },
    {
        label: "Behance",
        href: "https://behance.net",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-behance" viewBox="0 0 16 16">
                <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z" />
            </svg>
        )
    }
];

// Lightning bolt icon component
const LightningIcon = () => (
    <svg
        className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-red-500"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M13 0L8.5 8H1l6 8 8.5-8H22L13 0z" />
    </svg>
);

// Individual footer column component
interface FooterColumnProps {
    section: FooterSection;
    index: number;
}

const FooterColumn = ({ section, index }: FooterColumnProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
        >
            {/* Section Title */}
            <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6">
                {section.title}
            </h3>

            {/* Links List */}
            <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                        <Link
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base block"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

// Social media icons component
const SocialIcons = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
        >
            <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6">
                Follow Us
            </h3>

            <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 hover:bg-red-600 rounded-lg transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                    >
                        <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {social.icon}
                        </div>
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

// Main Footer Component
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0">
                {/* Base dark background */}
                <div className="absolute inset-0 bg-black" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900/30" />

                {/* Flowing red gradient effect */}
                <div className="absolute bottom-0 right-0 w-full h-full">
                    <div className="absolute bottom-0 right-0 w-full h-3/4 bg-gradient-to-tl from-red-600/40 via-red-800/20 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-gradient-to-tl from-red-500/30 via-red-700/15 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-red-400/20 to-transparent" />
                </div>

                {/* Flowing curve effect */}
                <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-32">
                    <svg
                        className="absolute bottom-0 w-full h-full opacity-20"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,50 C300,120 600,0 900,80 C1050,120 1150,60 1200,80 L1200,120 L0,120 Z"
                            fill="url(#gradient)"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3" />
                                <stop offset="50%" stopColor="#ef4444" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#f87171" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                <div className="max-w-6xl xl:max-w-7xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
                        {/* Logo Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="sm:col-span-2 lg:col-span-1"
                        >
                            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                                <LightningIcon />
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                    BRICKLIX
                                </h2>
                            </div>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm">
                                Transforming businesses through innovative digital solutions and cutting-edge technology.
                            </p>
                        </motion.div>

                        {/* Footer Columns */}
                        {footerData.map((section, index) => (
                            <FooterColumn
                                key={section.title}
                                section={section}
                                index={index + 1}
                            />
                        ))}

                        {/* Social Media Section */}
                        <SocialIcons />
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {/* Divider Line */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent mb-6 sm:mb-8" />

                        {/* Copyright and Legal Links */}
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                                © All Rights Reserved @Bricklix {currentYear}
                            </p>

                            <div className="flex items-center space-x-4 sm:space-x-6">
                                <Link
                                    href="/privacy-policy"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                                >
                                    Privacy policy
                                </Link>
                                <Link
                                    href="/terms-conditions"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                                >
                                    T&C
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
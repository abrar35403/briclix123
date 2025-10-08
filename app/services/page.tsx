// app/services/page.tsx

import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/serviceshero'
import AgendaSection from '../components/circles'
import ServicesBentoGrid from '../components/bento'
import PricingSection from '../components/servpricing'

import CTASection from '../components/servicesCTA'
import Footer from "../components/footer";

// You can import components like Header, Footer, and ServiceCards here
// import ServiceCard from '@/components/ServiceCard'; 

export default function servicesPage() {
    return (<>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <AgendaSection></AgendaSection>
        <ServicesBentoGrid></ServicesBentoGrid>
        <PricingSection></PricingSection>
        <CTASection></CTASection>
        <Footer></Footer>
    </>
    );
}

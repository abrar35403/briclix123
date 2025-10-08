// app/services/page.tsx

import React from 'react';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import PortHero from "../components/porthero";
import PerfCards from "../components/perfcards";

export default function portfolioPage() {
    return (<>
        <Navbar></Navbar>
        <PortHero></PortHero>
        <PerfCards></PerfCards>
        <Footer></Footer>
    </>
    );
}
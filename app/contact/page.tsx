// app/services/page.tsx

import React from 'react';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import ContactSection from "../components/contact";


export default function teamPage() {
    return (<>
        <Navbar></Navbar>
        <ContactSection></ContactSection>
        <Footer></Footer>
    </>
    );
}
// app/services/page.tsx

import React from 'react';
import Navbar from '../components/navbar';
import TeamHeroSection from '../components/teamhero';
import TeamScrollSection from '../components/teamscroll';
import ProfilesSection from '../components/profiles';
import TeamIntroSection from '../components/teams';
import Footer from "../components/footer";


export default function teamPage() {
    return (<>
        <Navbar></Navbar>
        <TeamHeroSection></TeamHeroSection>
        <TeamScrollSection></TeamScrollSection>

        <ProfilesSection></ProfilesSection>
        <TeamIntroSection></TeamIntroSection>

        <Footer></Footer>
    </>
    );
}
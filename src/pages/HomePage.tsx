import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
} from "../components";
import FadeIn from '../components/FadeIn';

function HomePage() {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.state?.scrollTo;
        console.log(sectionId)

        if (sectionId) {
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            window.history.replaceState({}, '', location.pathname);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
    );
}

export default HomePage;
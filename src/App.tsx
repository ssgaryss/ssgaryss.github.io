import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import {
    Navigation,
    Footer,
} from "./components";
import INFO from "./assets/data/user";
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/PikaEnginePage';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    return (
    <BrowserRouter>
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {INFO.projects.map(project => (
                <Route 
                    key={project.id}
                    path={project.path}
                    element={<ProjectDetail />}
                />
                ))}
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
    );
}

export default App;
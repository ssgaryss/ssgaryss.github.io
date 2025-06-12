import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import {
    Navigation,
    Footer,
} from "./components";
import INFO from "./assets/data/user";
import HomePage from './pages/HomePage';
import PikaEnginePage from './pages/PikaEnginePage';
import RayTracingPage from './pages/RayTracingPage';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    const ProjectPageMap: Record<string, React.FC> = {
        'project-pika-engine': PikaEnginePage,
        'project-raytracing': RayTracingPage,
    };

    return (
    <BrowserRouter>
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {INFO.projects.map(project => {
                    const Component = ProjectPageMap[project.id];
                    return (
                        <Route 
                        key={project.id}
                        path={project.path}
                        element={<Component />}  // ✅ 这里动态加载组件
                        />
                    );
                })}
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
    );
}

export default App;
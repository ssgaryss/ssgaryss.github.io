import React, {useState, useEffect} from "react";
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
    <I18nextProvider i18n={i18n}>
        <HashRouter>
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
        </HashRouter>
    </I18nextProvider>
    );
}

export default App;
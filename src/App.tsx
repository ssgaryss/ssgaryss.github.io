import React, { useState } from "react";
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
import CODAnalysisPage from './pages/CODAnalysisPage';
import InfinityNikkiAnalysisPage from './pages/InfinityNikkiAnalysisPage';
import RDCParserPage from './pages/RDCParserPage';
import PUBGConfigUpgraderPage from './pages/PUBGConfigUpgraderPage';
import MAppLinkPage from './pages/MAppLinkPage';
import ModelGrayPage from './pages/ModelGrayPage';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    const ProjectPageMap: Record<string, React.ComponentType<any>> = {
        'project-pika-engine': PikaEnginePage,
        'project-cod-analysis': CODAnalysisPage,
        'project-nikki-analysis': InfinityNikkiAnalysisPage,
        'project-rdc-parser': RDCParserPage,
        'project-pubg-upgrader': PUBGConfigUpgraderPage,
        'project-mapplink': MAppLinkPage,
        'project-model-gray': ModelGrayPage,
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
                                element={<Component mode={mode} />}
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
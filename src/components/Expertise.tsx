import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBookOpen, faFileCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import TransText from '../components/TransParagraph';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Unreal Engine", 
    "RenderDoc", 
    "Vulkan", 
    "OpenGL"
];

const labelsSecond = [
    "C++", 
    "Python", 
];

const labelsThird = [
    "Gaussian Splatting", 
    "Relighting", 
    "Deep Learning", 
    "PyTorch", 
];

function Expertise() {
    const { t } = useTranslation();

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{t('HomePage.Expertise.Title')}</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faGamepad} size="3x" />
                    <h3>{t('HomePage.Expertise.Part1.title')}</h3>
                    <p>
                    {t('HomePage.Expertise.Part1.content', { returnObjects: true }).map(
                        (_, index, array) => (
                        <TransText
                        key={index}
                        i18nKey="HomePage.Expertise.Part1.content"
                        index={index}
                        isLast={index === array.length - 1}
                        />
                        )
                    )}
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('HomePage.Expertise.KeyWords')}:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className="chip" label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFileCode} size="3x" />
                    <h3>{t('HomePage.Expertise.Part2.title')}</h3>
                    <p>
                    {t('HomePage.Expertise.Part2.content', { returnObjects: true }).map(
                        (_, index, array) => (
                        <TransText
                        key={index}
                        i18nKey="HomePage.Expertise.Part2.content"
                        index={index}
                        isLast={index === array.length - 1}
                        />
                        )
                    )}
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('HomePage.Expertise.KeyWords')}:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBookOpen} size="3x" />
                    <h3>{t('HomePage.Expertise.Part3.title')}</h3>
                    <p>
                    {t('HomePage.Expertise.Part3.content', { returnObjects: true }).map(
                        (_, index, array) => (
                        <TransText
                        key={index}
                        i18nKey="HomePage.Expertise.Part3.content"
                        index={index}
                        isLast={index === array.length - 1}
                        />
                        )
                    )}
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">{t('HomePage.Expertise.KeyWords')}:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className="chip" label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
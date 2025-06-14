import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBookOpen, faFileCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
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
                        (text, index, array) => (
                        <React.Fragment key={index}>
                            <Trans
                            i18nKey={`HomePage.Expertise.Part1.content.${index}` as any}
                            components={{
                                1: <strong></strong>,
                                2: <strong></strong>,
                                3: <strong></strong>,
                                4: <strong></strong>,
                                5: <strong></strong>,
                                6: <strong></strong>,
                                7: <em></em>,
                                8: <em></em>,
                                9: <em></em>,
                                10: <em></em>,
                                11: <em></em>,
                                12: <em></em>,
                            }}
                            />
                            {index < array.length - 1 && <br />}
                        </React.Fragment>
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
                        (text, index, array) => (
                        <React.Fragment key={index}>
                            <Trans
                            i18nKey={`HomePage.Expertise.Part2.content.${index}` as any}
                            components={{
                                1: <strong></strong>,
                                2: <em></em>,
                                3: <strong></strong>,
                                4: <em></em>,
                                5: <strong></strong>,
                                6: <em></em>,
                                7: <strong></strong>,
                                8: <em></em>,
                                9: <strong></strong>,
                                10: <em></em>,
                                11: <strong></strong>,
                                12: <em></em>,
                                13: <strong></strong>,
                                14: <em></em>,
                            }}
                            />
                            {index < array.length - 1 && <br />}
                        </React.Fragment>
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
                        (text, index, array) => (
                        <React.Fragment key={index}>
                            <Trans
                            i18nKey={`HomePage.Expertise.Part3.content.${index}` as any}
                            components={{
                                1: <strong></strong>,
                                2: <strong></strong>,
                                3: <strong></strong>,
                                4: <strong></strong>,
                                5: <em></em>,
                                6: <em></em>,
                                7: <em></em>,
                                8: <em></em>,
                            }}
                            />
                            {index < array.length - 1 && <br />}
                        </React.Fragment>
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
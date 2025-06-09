import React from "react";
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
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faGamepad} size="3x" />
                    <h3>Game Client Development</h3>
                    <p>
                        I specialize in <strong><em>game client development</em></strong> with hands-on experience from my internship at <strong><em>Tencent Lightspeed Studio</em></strong>.<br />
                        I am skilled in using <strong><em>RenderDoc</em></strong> for frame capturing and reverse-engineering complex rendering workflows.<br />
                        With a strong foundation in <strong><em>OpenGL</em></strong> and a portfolio of related projects, I also have a working knowledge of <strong><em>Vulkan</em></strong>.<br />
                        Additionally, I am familiar with <strong><em>Unreal Engine</em></strong> and have experience developing custom plugins to extend its functionality.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Key words:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className="chip" label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFileCode} size="3x" />
                    <h3>Programming Languages</h3>
                    <p>
                        I am highly familiar with <strong><em>C++</em></strong>, having completed <em>Advanced C++20 Programming</em> and developed numerous related projects such as a mini-engine.<br />
                        I specialize in profiling programs and resolving performance bottlenecks efficiently, while maintaining strict and consistent coding standards.<br />
                        In addition, I have extensive experience with <strong><em>Python</em></strong>, which has been an essential tool throughout my graduate research.<br />
                        Beyond typical scripting, I have developed various plugins using Python, including those for <strong><em>ZBrush</em></strong>, <strong><em>3ds Max</em></strong>, <strong><em>Blender</em></strong>, and <strong><em>RenderDoc</em></strong>.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Key words:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBookOpen} size="3x" />
                    <h3>Research</h3>
                    <p>
                        My research focuses on real-time relighting algorithms based on <strong><em>2D Gaussian Splatting</em></strong>.<br />
                        I have a solid background in <strong><em>deep learning</em></strong> and am familiar with <strong><em>Python</em></strong> and <strong><em>PyTorch</em></strong>.<br />
                        I am skilled at implementing academic papers and rapidly understanding their key contributions.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Key words:</span>
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
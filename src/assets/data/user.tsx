import { toBeChecked } from '@testing-library/jest-dom/matchers';
import pikaCover from '../images/project-pika-engine/cover.png';
import codCover from '../images/project-cod-analysis/cover.png';
import nikkiCover from '../images/project-nikki-analysis/cover.png';
import raytracingCover from '../images/project-raytracing/cover.png';

const INFO = {
	main: {
		title: "Huidi Qiu",
		email: "qiuhuidi31@gmail.com",
		profile: "../../profile.png",
		resume: "../../files/resume.pdf",
	},

	socials: {
        github: "https://github.com/ssgaryss",
	},

	projects: [
		{
			id: "project-pika-engine",
			title: "Pika Engine",
			date: "2024.5 - 2024.10",
			path: "/projects/project-pika-engine",
			cover: pikaCover,
			keyword: [
				"Personal Project",
				"ECS",
				"Lighting & Shadow",
				"2D Physics",
				"Serialization"
			]
		},
		{
			id: "project-cod-analysis",
			title: "CoD: BO6 Analysis",
			date: "2025.6 - 2025.6",
			path: "/projects/project-cod-analysis",
			cover: codCover,
			keyword: [
				"Tencent",
				"Rendering Analysis"
			]
		},
		{
			id: "project-nikki-analysis",
			title: "Infinity Nikki Analysis",
			date: "2024.12 - 2025.1",
			path: "/projects/project-nikki-analysis",
			cover: nikkiCover,
			keyword: [
				"Tencent",
				"Rendering Analysis"
			]
		},
		// {
		// 	id: "project-raytracing",
		// 	title: "Ray-Tracing",
		// 	date: "2024.7 - 2024.7",
		// 	path: "/projects/project-raytracing",
		// 	link: "https://github.com/ssgaryss/Ray-Tracing.git",
		// 	cover: raytracingCover,
		// 	keyword: [
		// 		"Personal Project",
		// 		"CPU Muiti-threading"
		// 	]
		// },
	],
};

export default INFO;

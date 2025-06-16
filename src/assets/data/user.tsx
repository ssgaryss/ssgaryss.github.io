import { toBeChecked } from '@testing-library/jest-dom/matchers';
import pikaCover from '../images/project-pika-engine/cover.png';
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
			date: "2024.5 - 2024.10",
			path: "/projects/project-pika-engine",
			link: "https://github.com/ssgaryss/Pika.git",
			cover: pikaCover,
			keyword: [
				"Personal Project",
				"ECS",
				"Lighting & Shadow",
				"2D Physics",
				"Serialization"
			]
		},

		// {
		// 	id: "project-raytracing",
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

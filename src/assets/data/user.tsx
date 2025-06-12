import pikaCover from '../images/project-pika-engine/cover.png';
import raytracingCover from '../images/project-raytracing/cover.png';

const INFO = {
	main: {
		title: "Huidi Qiu",
		email: "qiuhuidi31@gmail.com",
		profile: "../../profile.png",
		resume: "../../resume.pdf",
	},

	socials: {
        github: "https://github.com/ssgaryss",
	},

	projects: [
		{
			id: "project-pika-engine",
			title: "Pika Engine",
			path: "/projects/project-pika-engine",
			link: "https://github.com/ssgaryss/Pika.git",
			description: "Pika Engine is a self-developed mini-engine designed to apply and realize the knowledge I’ve acquired through hands-on implementation.",
			cover: pikaCover,
		},

		{
			id: "project-raytracing",
			title: "Ray-Tracing",
			path: "/projects/project-raytracing",
			link: "https://github.com/ssgaryss/Ray-Tracing.git",
			description: "A ray-tracing practice project. Currently implemented with CPU multithreading; the goal is to migrate to Vulkan for GPU acceleration.",
			cover: raytracingCover,
		},
	],
};

export default INFO;

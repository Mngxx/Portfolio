import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import project4 from "./images/project4.png";
import project5 from "./images/project5.png";
import project6 from "./images/project6.png";
import type { CurrentProject, Project } from "./types";
export const NAV_LINKS = [
	{ href: "#intromain", label: "Home" },
	{ href: "#aboutme", label: "About" },
	{ href: "#projects", label: "Projects" },
];

export const CURRENT_PROJECTS: CurrentProject[] = [
	{
		slug: "englishpal",
		name: "EnglishPal",
		tagline:
			"AI-powered voice coach for practicing English conversation, with structured feedback after every session.",
		description:
			"A full-stack, AI-powered English speaking coach built for a Filipino software engineer preparing to work abroad. Real-time voice conversations run through Groq's Llama 3.1 model in Casual or Formal mode, with a structured feedback report — grammar, vocabulary, filler words, and a clarity score — generated after every session. Progress is tracked on a dashboard, backed by a full AWS stack (Lambda, DynamoDB, CDK) with Cognito-authenticated, per-user accounts.",
		status: "live",
		techStack: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Node.js",
			"Express",
			"AWS Lambda",
			"AWS Cognito",
			"AWS DynamoDB",
			"AWS CDK",
			"Groq AI",
		],
		demoVideoUrl: "https://www.youtube.com/embed/6_vb7teKHP0",
		liveUrl: "https://english-pal-one.vercel.app/login",
		repoUrl: "https://github.com/Mngxx/EnglishPal",
	},
	{
		slug: "esportslens",
		name: "EsportsLens",
		tagline:
			"Esports analytics platform turning live match data into player and meta insights via an AWS data pipeline.",
		description:
			"An esports analytics platform ingesting live and historical match data (Valorant, Dota 2) through a serverless AWS data pipeline — Lambda ingestion, Glue ETL, an S3 data lake, and Athena for querying — surfaced through a FastAPI backend and a React dashboard for player stats, match history, and meta analysis.",
		status: "in-development",
		techStack: [
			"Python",
			"FastAPI",
			"AWS Lambda",
			"AWS Glue",
			"AWS Athena",
			"AWS CDK",
			"React",
			"TypeScript",
			"Recharts",
		],
		demoVideoUrl: "",
		liveUrl: "",
		repoUrl: "https://github.com/Mngxx/EsportsLens",
	},
];

export const PROJECTS: Project[] = [
	{
		name: "Aninaw Tech",
		role: "Lead Developer",
		description:
			"Advanced data visualization and forecasting platform for government fund appropriations. Led architecture and implementation of complex visualization components and real-time data processing.",
		image: project1,
		url: "https://aninaw-tech.herokuapp.com/",
		gradient: "from-cyan-500 to-blue-600",
		border: "hover:border-cyan-400/50",
		badgeBg: "bg-cyan-500/20",
		badgeText: "text-cyan-400",
	},
	{
		name: "Reddot",
		role: "Back-end Developer",
		description:
			"Community-driven forum platform with user engagement features. Developed robust backend infrastructure with user authentication, content management, and real-time collaboration.",
		image: project2,
		url: "https://github.com/Library-of-Vivec/Reddot",
		gradient: "from-purple-500 to-pink-600",
		border: "hover:border-purple-400/50",
		badgeBg: "bg-purple-500/20",
		badgeText: "text-purple-400",
	},
	{
		name: "FeuARubrics",
		role: "Front-end Lead",
		description:
			"Digital grading and evaluation system for capstone projects. Engineered intuitive frontend UI and implemented features for instructor evaluation and student feedback.",
		image: project3,
		url: "http://feuarubrics.000webhostapp.com/",
		gradient: "from-emerald-500 to-teal-600",
		border: "hover:border-emerald-400/50",
		badgeBg: "bg-emerald-500/20",
		badgeText: "text-emerald-400",
	},
	{
		name: "Mandanas Ruling",
		role: "Front-end Developer",
		description:
			"Government compliance platform implementing the Mandanas-Garcia Ruling. Developed responsive frontend for efficient information access and management by government officials.",
		image: project5,
		url: "https://mandanasruling.ph/",
		gradient: "from-amber-500 to-orange-600",
		border: "hover:border-amber-400/50",
		badgeBg: "bg-amber-500/20",
		badgeText: "text-amber-400",
	},
	{
		name: "Bago Tayo",
		role: "Lead Developer",
		description:
			"Social impact platform for youth empowerment and idea exchange. Led full-stack development with focus on community engagement features and user experience.",
		image: project6,
		url: "http://bagotayo.net/",
		gradient: "from-rose-500 to-red-600",
		border: "hover:border-rose-400/50",
		badgeBg: "bg-rose-500/20",
		badgeText: "text-rose-400",
	},
	{
		name: "Guiding Lands",
		role: "Lead Developer",
		description:
			"Mobile survival and outdoor guide application. Built native Android app with offline functionality and comprehensive resource management system.",
		image: project4,
		url: "https://drive.google.com/drive/u/1/folders/1LGf2WOtsZN1N3miMqD1taOUhKcX1OvRa",
		gradient: "from-indigo-500 to-purple-600",
		border: "hover:border-indigo-400/50",
		badgeBg: "bg-indigo-500/20",
		badgeText: "text-indigo-400",
	},
];

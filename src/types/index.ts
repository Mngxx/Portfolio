export type Project = {
	name: string;
	role: string;
	description: string;
	image: string;
	url: string;
	gradient: string;
	border: string;
	badgeBg: string;
	badgeText: string;
};

export type ProjectStatus = "live" | "in-development";

export type CurrentProject = {
	slug: string;
	name: string;
	tagline: string;
	description: string;
	status: ProjectStatus;
	techStack: string[];
	images?: string[];
	demoVideoUrl?: string;
	liveUrl?: string;
	repoUrl?: string;
};

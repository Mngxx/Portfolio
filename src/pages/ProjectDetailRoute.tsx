import { Navigate, useParams } from "react-router-dom";
import { CURRENT_PROJECTS } from "../config";
import { ProjectDetailPage } from "./ProjectDetailPage";

export function ProjectDetailRoute() {
	const { project: slug } = useParams<{ project: string }>();
	const project = CURRENT_PROJECTS.find((p) => p.slug === slug);

	if (!project) {
		return <Navigate to="/" replace />;
	}

	return <ProjectDetailPage project={project} />;
}

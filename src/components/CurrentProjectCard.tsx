import { Link } from "react-router-dom";
import type { CurrentProject } from "../types";
import { StatusBadge } from "./StatusBadge";

type CurrentProjectCardProps = {
	project: CurrentProject;
};

export function CurrentProjectCard({ project }: CurrentProjectCardProps) {
	return (
		<Link
			to={`/projects/${project.slug}`}
			className="group flex flex-col rounded-lg border border-slate-700 bg-slate-800 p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
		>
			<div className="mb-3 flex items-center justify-between gap-2">
				<h3 className="text-xl font-bold">{project.name}</h3>
				<StatusBadge status={project.status} />
			</div>
			<p className="mb-4 text-sm text-gray-400">{project.tagline}</p>
			<div className="mt-auto flex flex-wrap gap-2">
				{project.techStack.map((tech) => (
					<span
						key={tech}
						className="rounded-full bg-slate-700 px-2 py-1 text-xs text-gray-300"
					>
						{tech}
					</span>
				))}
			</div>
		</Link>
	);
}

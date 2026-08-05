import { Link } from "react-router-dom";
import type { Project } from "../types";

type LegacyProjectsCardProps = {
	projects: Project[];
};

export function LegacyProjectsCard({ projects }: LegacyProjectsCardProps) {
	return (
		<Link
			to="/projects/legacy"
			className="group flex flex-col rounded-lg border border-slate-700 bg-slate-800 p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:border-indigo-400/50"
		>
			<h3 className="mb-3 text-xl font-bold">Legacy Projects</h3>
			<p className="mb-4 text-sm text-gray-400">
				{projects.length} earlier projects from internships and school.
			</p>
			<div className="flex flex-wrap gap-2">
				{projects.map((project) => (
					<span
						key={project.name}
						className="rounded-full bg-slate-700 px-2 py-1 text-xs text-gray-300"
					>
						{project.name}
					</span>
				))}
			</div>
			<span className="mt-auto pt-4 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300">
				View all legacy projects →
			</span>
		</Link>
	);
}

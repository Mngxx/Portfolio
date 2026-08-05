import { Layout } from "../components/Layout";
import { PROJECTS } from "../config";

export function LegacyProjectsPage() {
	return (
		<Layout>
			<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
				<h1 className="section-title">Legacy Projects</h1>
				<p className="section-subtitle">
					Earlier work from internships and school — {PROJECTS.length}{" "}
					projects
				</p>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{PROJECTS.map((project) => (
						<a
							key={project.name}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className={`group overflow-hidden rounded-lg border border-slate-700 bg-slate-800 shadow-xl ${project.border} transition-all duration-300 hover:scale-105`}
						>
							<div
								className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}
							>
								<img
									className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
									src={project.image}
									alt={project.name}
								/>
							</div>
							<div className="p-6">
								<h3 className="mb-2 text-xl font-bold">{project.name}</h3>
								<p className="mb-3 text-sm text-gray-400">
									{project.description}
								</p>
								<span
									className={`inline-block ${project.badgeBg} ${project.badgeText} rounded-full px-3 py-1 text-xs font-semibold`}
								>
									{project.role}
								</span>
							</div>
						</a>
					))}
				</div>
			</div>
		</Layout>
	);
}

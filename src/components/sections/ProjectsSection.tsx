import { CURRENT_PROJECTS, PROJECTS } from "../../config";
import { CurrentProjectCard } from "../CurrentProjectCard";
import { LegacyProjectsCard } from "../LegacyProjectsCard";
import { Section } from "../Section";

export function ProjectsSection() {
	return (
		<Section id="projects" className="bg-slate-900">
			<div className="max-w-6xl mx-auto">
				<h2 className="section-title">Featured Projects</h2>
				<p className="section-subtitle">
					Showcasing my current work and a compilation of earlier projects
				</p>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{CURRENT_PROJECTS.map((project) => (
						<CurrentProjectCard key={project.slug} project={project} />
					))}
					<LegacyProjectsCard projects={PROJECTS} />
				</div>
			</div>
		</Section>
	);
}

import { Layout } from "../components/Layout";
import { StatusBadge } from "../components/StatusBadge";
import type { CurrentProject } from "../types";

type ProjectDetailPageProps = {
	project: CurrentProject;
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
	return (
		<Layout>
			<div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="mb-4 flex items-center justify-between gap-4">
					<h1 className="text-4xl font-bold sm:text-5xl">{project.name}</h1>
					<StatusBadge status={project.status} />
				</div>
				<p className="mb-8 text-xl text-gray-300">{project.tagline}</p>

				<div className="mb-10 flex flex-wrap gap-2">
					{project.techStack.map((tech) => (
						<span
							key={tech}
							className="rounded-full bg-slate-700 px-3 py-1 text-sm text-gray-300"
						>
							{tech}
						</span>
					))}
				</div>

				{project.demoVideoUrl && (
					<div className="mb-10 aspect-video overflow-hidden rounded-lg border border-slate-700">
						<iframe
							src={project.demoVideoUrl}
							title={`${project.name} demo`}
							className="h-full w-full"
							allowFullScreen
						/>
					</div>
				)}

				<p className="mb-10 text-lg leading-relaxed text-gray-300">
					{project.description}
				</p>

				<div className="flex flex-wrap gap-4">
					{project.liveUrl && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary px-6 py-3"
						>
							View Live
						</a>
					)}
					{project.repoUrl && (
						<a
							href={project.repoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-secondary px-6 py-3"
						>
							View Source
						</a>
					)}
				</div>
			</div>
		</Layout>
	);
}

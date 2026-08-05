import { Section } from "../Section";

export function HeroSection() {
	return (
		<Section
			id="intromain"
			className="bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/30 min-h-screen flex items-center justify-center relative overflow-hidden"
		>
			<div className="absolute inset-0 overflow-hidden">
				<div className="blob -top-40 -right-40 h-80 w-80 bg-blue-500" />
				<div className="blob animation-delay-2000 -bottom-40 -left-40 h-80 w-80 bg-purple-500" />
			</div>

			<div className="relative z-10 max-w-4xl mx-auto text-center">
				<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
					Hi! I'm{" "}
					<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
						Ron Lara
					</span>
					,
					<br />
					<span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
						Software Engineer
					</span>{" "}
					with <br />
					<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
						4+ Years
					</span>{" "}
					of Experience
				</h1>
				<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
					Building scalable web applications and delivering high-impact
					solutions. Specialized in full-stack development, system design, and
					modern technologies.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="#projects" className="btn-primary px-6 py-3">
						View My Work
					</a>
					<a href="#contacts" className="btn-secondary px-6 py-3">
						Get In Touch
					</a>
				</div>
			</div>
		</Section>
	);
}

import { Section } from "../Section";
export function ExpertiseSection() {
	return (
		<Section id="expertise" className="bg-slate-900">
			<div className="max-w-6xl mx-auto">
				<h2 className="section-title">Technical Expertise</h2>
				<p className="section-subtitle">
					Years of hands-on experience in building scalable and maintainable
					software solutions
				</p>

				<div className="grid md:grid-cols-2 gap-8">
					<div className="group expertise-card border-cyan-500/20 hover:border-cyan-400/50">
						<div className="expertise-icon bg-cyan-500/10 group-hover:bg-cyan-500/20">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								width="32"
								height="32"
								fill="currentColor"
								className="text-cyan-400"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"
								/>
							</svg>
						</div>
						<h3 className="text-2xl font-bold mb-4">Full Stack Development</h3>
						<p className="text-gray-400 leading-relaxed">
							Proficient in modern frontend technologies including React, HTML5,
							CSS3, and JavaScript. Backend expertise in Python (Flask), PHP,
							and Node.js. Experienced in building responsive, user-centric
							applications with scalable architecture.
						</p>
					</div>

					<div className="group expertise-card border-purple-500/20 hover:border-purple-400/50">
						<div className="expertise-icon bg-purple-500/10 group-hover:bg-purple-500/20">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								width="32"
								height="32"
								fill="currentColor"
								className="text-purple-400"
								viewBox="0 0 16 16"
							>
								<path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
								<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
							</svg>
						</div>
						<h3 className="text-2xl font-bold mb-4">
							System Design & Architecture
						</h3>
						<p className="text-gray-400 leading-relaxed">
							Strong foundation in Object-Oriented Programming, design patterns,
							and system architecture. Experience with Python, Java, and C++.
							Expertise in designing maintainable, efficient solutions for
							complex technical challenges.
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
}

import ronPhoto from "../../images/graduation_ron.jpg";
import { Section } from "../Section";
export function AboutSection() {
	return (
		<Section
			id="aboutme"
			className="bg-gradient-to-br from-slate-800 to-slate-900 "
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="section-title">About Me</h2>

				<div className="grid md:grid-cols-3 gap-8 mb-16 mt-12">
					<div className="md:col-span-2">
						<p className="text-gray-300 text-lg leading-relaxed">
							I'm a{" "}
							<span className="text-cyan-400 font-semibold">
								Software Engineer
							</span>{" "}
							with 4+ years of professional experience in developing scalable
							web applications and software solutions. Throughout my career,
							I've worked on diverse projects including{" "}
							<span className="text-cyan-400 font-semibold">
								data visualization platforms
							</span>
							,{" "}
							<span className="text-cyan-400 font-semibold">
								community forums
							</span>
							, and{" "}
							<span className="text-cyan-400 font-semibold">
								government systems
							</span>
							.
						</p>
						<p className="text-gray-300 text-lg leading-relaxed mt-4">
							I'm passionate about writing clean, maintainable code and solving
							complex technical problems. My expertise spans both frontend and
							backend technologies, with a focus on delivering high-quality
							solutions that make an impact. I thrive in collaborative
							environments and am committed to continuous learning and growth in
							this ever-evolving field.
						</p>
					</div>
					<div className="flex justify-center md:justify-end">
						<img
							src={ronPhoto}
							alt="Ron Lara"
							className="h-48 w-48 rounded-lg border border-slate-700 object-cover shadow-xl md:h-56 md:w-56"
						/>
					</div>
				</div>

				{/* Social Links */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					<a
						href="https://github.com/Mngxx"
						target="_blank"
						rel="noopener noreferrer"
						className="group social-card hover:border-cyan-400/50"
					>
						<div className="flex items-center justify-center mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								width="40"
								height="40"
								fill="currentColor"
								className="text-cyan-400 icon-scale"
								viewBox="0 0 16 16"
							>
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg>
						</div>
						<h3 className="font-bold text-center text-white">GitHub</h3>
						<p className="text-gray-400 text-center text-sm mt-2">
							View my repositories
						</p>
					</a>

					<a
						href="https://www.credly.com/users/ron-lara.619b3f00/badges/credly"
						target="_blank"
						rel="noopener noreferrer"
						className="group social-card hover:border-purple-400/50"
					>
						<div className="flex items-center justify-center mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								width="40"
								height="40"
								fill="currentColor"
								className="text-purple-400 icon-scale"
								viewBox="0 0 16 16"
							>
								<path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
							</svg>
						</div>
						<h3 className="font-bold text-center text-white">Certificates</h3>
						<p className="text-gray-400 text-center text-sm mt-2">
							My achievements
						</p>
					</a>

					<a
						href="https://www.linkedin.com/in/ron-lara-1067b0212/"
						target="_blank"
						rel="noopener noreferrer"
						className="group social-card hover:border-blue-400/50"
					>
						<div className="flex items-center justify-center mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								width="40"
								height="40"
								fill="currentColor"
								className="text-blue-400 icon-scale"
								viewBox="0 0 16 16"
							>
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg>
						</div>
						<h3 className="font-bold text-center text-white">LinkedIn</h3>
						<p className="text-gray-400 text-center text-sm mt-2">
							Connect with me
						</p>
					</a>

					<a
						href="mailto:lararon2428@gmail.com"
						className="group social-card hover:border-pink-400/50"
					>
						<div className="flex items-center justify-center mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								width="40"
								height="40"
								fill="currentColor"
								className="text-pink-400 icon-scale"
								viewBox="0 0 16 16"
							>
								<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741Z" />
							</svg>
						</div>
						<h3 className="font-bold text-center text-white">Email</h3>
						<p className="text-gray-400 text-center text-sm mt-2">
							Drop me a line
						</p>
					</a>
				</div>
			</div>
		</Section>
	);
}

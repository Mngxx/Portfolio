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
					<div className="group expertise-card md:col-span-2 border-emerald-500/20 hover:border-emerald-400/50">
						<div className="expertise-icon bg-emerald-500/10 group-hover:bg-emerald-500/20">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								width="32"
								height="32"
								fill="currentColor"
								className="text-emerald-400"
								viewBox="0 0 16 16"
							>
								<path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525" />
							</svg>
						</div>
						<h3 className="text-2xl font-bold mb-4">
							Data Engineering & Cloud Pipelines
						</h3>
						<p className="text-gray-400 leading-relaxed">
							AWS Certified Data Engineer – Associate. Experienced in designing
							and building serverless data pipelines on AWS: Lambda ingestion,
							S3 data lakes, Glue (PySpark) ETL into partitioned Parquet, and
							Athena for SQL analytics. Infrastructure as code with AWS CDK,
							data-serving APIs with FastAPI, and CI/CD with GitHub Actions.
						</p>
					</div>

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

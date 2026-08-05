import { useState } from "react";
import {
	AboutSection,
	ContactSection,
	ExpertiseSection,
	HeroSection,
	ProjectsSection,
} from "../components/sections";
import { NAV_LINKS } from "../config";

export function LandingPage() {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	return (
		<div className="bg-slate-950 text-white">
			{/* Navigation */}
			<nav className="sticky top-0 z-50 bg-slate-900 shadow-lg border-b border-cyan-500/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<a
							href="#intromain"
							className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
						>
							Ron Lara
						</a>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							{NAV_LINKS.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="text-gray-300 hover:text-cyan-400 transition-colors"
								>
									{link.label}
								</a>
							))}
							<a href="#contacts" className="btn-primary px-5 py-2">
								Contact
							</a>
						</div>

						{/* Mobile Menu Button */}
						<button
							type="button"
							onClick={() => setMobileNavOpen((open) => !open)}
							aria-expanded={mobileNavOpen}
							aria-label="Toggle navigation menu"
							className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								viewBox="0 0 16 16"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
								/>
							</svg>
						</button>
					</div>

					{/* Mobile Navigation */}
					{mobileNavOpen && (
						<ul className="md:hidden flex flex-col space-y-2 pb-4">
							{NAV_LINKS.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										onClick={() => setMobileNavOpen(false)}
										className="block py-2 px-4 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded"
									>
										{link.label}
									</a>
								</li>
							))}
							<li>
								<a
									href="#contacts"
									onClick={() => setMobileNavOpen(false)}
									className="btn-primary block px-4 py-2 text-center"
								>
									Contact
								</a>
							</li>
						</ul>
					)}
				</div>
			</nav>

			<main>
				<HeroSection />
				<ExpertiseSection />
				<AboutSection />
				<ProjectsSection />
				<ContactSection />
			</main>

			{/* Footer */}
			<footer className="bg-slate-950 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto text-center">
					<p className="text-gray-400">Designed & Built with by Ron Lara</p>
					<p className="text-gray-500 text-sm mt-2">
						© {new Date().getFullYear()}. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

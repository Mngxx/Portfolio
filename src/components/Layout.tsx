import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type LayoutProps = {
	children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
	return (
		<div className="flex min-h-screen flex-col bg-slate-950 text-white">
			<header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-900 shadow-lg">
				<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
					<Link
						to="/"
						className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-bold text-transparent"
					>
						Ron Lara
					</Link>
					<Link
						to="/"
						className="text-sm text-gray-300 transition-colors hover:text-cyan-400"
					>
						← Back to Portfolio
					</Link>
				</div>
			</header>

			<main className="flex-1">{children}</main>

			<footer className="border-t border-slate-800 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-6xl text-center">
					<p className="text-gray-400">Designed & Built with by Ron Lara</p>
					<p className="mt-2 text-sm text-gray-500">
						© {new Date().getFullYear()}. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

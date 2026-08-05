import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export function NotFoundPage() {
	return (
		<Layout>
			<div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
				<h1 className="mb-4 text-6xl font-bold text-cyan-400">404</h1>
				<p className="mb-8 text-lg text-gray-300">
					This page doesn't exist — it may have been moved or the link is
					outdated.
				</p>
				<Link to="/" className="btn-primary px-6 py-3">
					Back to Portfolio
				</Link>
			</div>
		</Layout>
	);
}

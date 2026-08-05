import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	LandingPage,
	LegacyProjectsPage,
	NotFoundPage,
	ProjectDetailRoute,
} from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Define routes mapping paths to components */}
				<Route path="/" element={<LandingPage />} />
				<Route path="/projects/legacy/" element={<LegacyProjectsPage />} />
				<Route path="/projects/:project" element={<ProjectDetailRoute />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

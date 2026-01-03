import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "@/App";

// biome-ignore lint/style/noNonNullAssertion: explicitly asserting non-null for root element
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Gloria from "./Gloria.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Gloria />
	</StrictMode>,
);

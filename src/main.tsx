import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodoListContextProvider } from "./contexts/TodoListContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<TodoListContextProvider>
			<App />
		</TodoListContextProvider>
	</React.StrictMode>,
);

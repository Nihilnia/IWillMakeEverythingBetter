import { useState } from "react";
import { log } from "./log.js";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
	log("<App /> rendered");

	const [chosenCount, setChosenCount] = useState(0);

	function handleChoosenCount(count) {
		setChosenCount(count);
	}

	return (
		<>
			<Header />
			<main>
				<ConfigureCounter onHandleChoosenCount={handleChoosenCount} />
				<Counter initialCount={chosenCount} />
				<Counter initialCount={0} />
			</main>
		</>
	);
}

export default App;

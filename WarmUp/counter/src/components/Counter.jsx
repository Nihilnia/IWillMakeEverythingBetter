import { useState } from "react";
import ButtonUI from "./UI/ButtonUI";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<section className="bg-color">
			<div>
				<h2 className={count < 0 ? "bg-red-100" : ""}>Count: {count}</h2>
			</div>
			<div>
				<ButtonUI
					title="Increase"
					color="red"
					onClick={() => setCount((prev) => prev + 1)}
				/>
				<ButtonUI
					title="Decrease"
					color="blue"
					onClick={() => setCount((prev) => prev - 1)}
				/>
				<ButtonUI
					title="Reset"
					color="yellow"
					onClick={() => setCount((prev) => 0)}
				/>
			</div>
		</section>
	);
}

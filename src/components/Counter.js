import React from "react";

function Counter() {
	return (
		<div>
			<h1>Count: </h1>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
}

export default Counter;

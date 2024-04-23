import React from "react";
import { useState, useEffect } from "react";




function Counter() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		document.title = `Count: ${count}`;
	  }, [count]);
	const increment = () => {
		setCount(c=>c+1);
	};
	const decrement = () => {
		setCount(c=>c-1);
	};
	const reset = () => {
		setCount(0);
  	};



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

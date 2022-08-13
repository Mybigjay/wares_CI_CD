import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [userName, setUsername] = useState("");

	//useEffect is a react hook that runs when a function loads
	useEffect(() => {
		getNames();
	}, []);

	const getNames = async () => {
		const response = await axios.get("/names");
		console.log(response);
		setUsername(response.data);
		//userName is state for saving user name // setUsername is an annonymous
		//function that will run when ever you want to update the state //useState
		//is REACT HOOK
	};
	return (
		<>
			<h1>My website</h1>
			<h3>My name is {userName}</h3>
		</>
	);
}

export default App;

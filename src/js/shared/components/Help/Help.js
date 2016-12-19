import React from "react";
import ReactDOM from "react-dom"; 
import NavigationBar from "../NavigationBar";


export default class Help extends React.Component{
	constructor() {
		super();
	}


	render(){	
		return(
			<div>
				<NavigationBar/>
				<h1>Help page !!!</h1>
			</div>
		);
	}
}

 


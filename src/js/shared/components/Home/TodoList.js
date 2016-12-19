import React from "react";
import ReactDOM from "react-dom"; 

import ListToDoItems from "./ListToDoItems";
import AddTodo from "./AddTodo";



export default class TodoList extends React.Component{
	constructor() {
		super();
	}


	render(){	
		return(
			<div>

				<AddTodo/>

	    		<ListToDoItems/>

			</div>
		);
	}
}



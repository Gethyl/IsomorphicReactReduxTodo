import React from "react";
import { LinkContainer } from 'react-router-bootstrap';

import TodoList from './Home/TodoList';
import NavigationBar from "./NavigationBar";

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Index extends React.Component{
	constructor() {
		super();
		this.state = {title:"TO   DO    LIST"};
	}

	changeTitle(title){
		this.setState({title});
	}

	 

	render(){	

		return(
			<div>
				<NavigationBar/>
				<Grid>
				    <Row >
				      <Col xs={12} md={8}><h1>{this.state.title}</h1></Col>
				    </Row>

				    <TodoList/>

			    </Grid>
			</div>
		);
	}
}
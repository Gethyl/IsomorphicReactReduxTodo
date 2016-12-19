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

export default class Layout extends React.Component{

	render(){	
		return(
			<div>
				
				<div className="app-content">{this.props.children}</div>
			</div>
		);
	}
}
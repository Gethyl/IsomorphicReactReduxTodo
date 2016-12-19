import React from "react";
import ReactDOM from "react-dom"; 
import {DeleteItem, EditIconClicked, EditItem, CompleteItem} from "../../Actions/ToDoActions";
import Redux from "redux";
import { connect} from "react-redux";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import FormControl from 'react-bootstrap/lib/FormControl';

const mapStateToProps = (state) => ({
  items: state.todoReducer.items
})


@connect(mapStateToProps)
export default class ListToDoItems extends React.Component{
	close(id,editedItem){
		this.props.dispatch(EditItem(id, editedItem));	
	}

	render(){	
		let testModal=false;
		// console.dir(this.props)

		return(
			<div >
				<Grid>
				    <Row>
				      <Col xs={12} md={8}><h2>To Do Items</h2></Col>
				    </Row>
			    	
			    	<Row >
				      <Col xs={12} md={8}>
				      	<ListGroup>
					    	{this.props.items.map((item, index) => {
				    			return <ListGroupItem key={index}>

				    				<Row >
								     	<Col md={8}>
								     		<div className={item.completed?"complete-item":""} onClick={(e) => {
							    					this.props.dispatch(CompleteItem(index,!item.completed));
							    				}}>{item.text}
						    				</div>
					    			  	</Col>
					    			  	<Col md={1}>
								     		<Glyphicon glyph="trash" onClick={() => {
								     				this.props.dispatch(DeleteItem(index));
							    				}}>
						    				</Glyphicon>
					    			  	</Col>
					    			  	<Col md={1}>
								     		<Glyphicon glyph="pencil" onClick={(e) => {
								     				this.props.dispatch(EditIconClicked(index));
							    				}}>
						    				</Glyphicon>
					    			  	</Col>
								    </Row>

								    <Modal show={item.editItem}>
										<Modal.Header>
											<Modal.Title>Edit {item.text}</Modal.Title>
										</Modal.Header>

										<Modal.Body>
											<FormControl type="text" ref="itemEditText"/>
										</Modal.Body>

										<Modal.Footer>
											<Button bsStyle="primary" onClick={()=>{
												var editedItem = ReactDOM.findDOMNode(this.refs.itemEditText).value
												this.close(index,editedItem)}}>Save Item
											</Button>
										</Modal.Footer>

								    </Modal>
					    			
					    			
				    			</ListGroupItem>
				    		})}
					    	
					    </ListGroup>
				      </Col>
				    </Row>

			    


			    </Grid>

			</div>
		);
	}
}


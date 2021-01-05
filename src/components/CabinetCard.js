import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CabinetView from './CabinetView'
import './CabinetCard.css';

import HeaderView from './HeaderView'

export class CabinetCard extends Component {
	render() {
		return (
	
			
     
			<Card className="box">
				
				<Card.Img variant="top" src={this.props.pick.imgPath} />
				<Card.Body>
					<Card.Title>{this.props.pick.title}</Card.Title>
                    
 <Link to={`/cabinet/${this.props.pick.title}`}>
					<Button variant="outline-secondary">More Information</Button>
                    </Link>
				</Card.Body>
			</Card>

			
			
		);
	}
}



export default CabinetCard;

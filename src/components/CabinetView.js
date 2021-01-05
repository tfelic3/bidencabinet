import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './CabinetView.css';


export class CabinetCard extends Component {
	render() {
		return (
			<div className="view">
				<img className="mugshot" src={this.props.cabinet.imgPath} />
			
					<h2>{this.props.cabinet.title}</h2>
          <h4>{this.props.cabinet.name}</h4>

          <p>{this.props.cabinet.description}</p>
          
          <Link to={"/"}>
					<Button variant="outline-dark">Back</Button>
                    </Link>

          
          </div>            
 
		
		);
	}
}


export default CabinetCard;

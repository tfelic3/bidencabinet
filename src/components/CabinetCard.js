import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './CabinetCard.css';




export class CabinetCard extends Component {




	render() {
		
		return (
	
		
     
			<Card className="box" style={{
				
													 
						   }}>
				
				<Card.Img variant="top" src={this.props.pick.imgPath} />
			
				<Card.Body>
					<Card.Title id="title">{this.props.pick.title}</Card.Title>
			  <p className ="electedStatus">{this.props.pick.isConfirmed}</p>
			
                    
 <Link to={`/cabinet/${this.props.pick.title}`}>
	 
					<Button className="moreInfoButton" id ="info" variant="outline-secondary">More Information</Button>
                    </Link>
					
			

				
					
				</Card.Body>
			
			</Card>

			
			
		);
	}
}



export default CabinetCard;

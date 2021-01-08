import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CabinetCard from './CabinetCard';
import './CabinetView.css';
import CarouselView from './CarouselView';


export class CabinetView extends Component {
	
	
	
	render() {
		
		return (
			<div className="view">
				<React.Fragment>
					<img className="mugshot" src={this.props.cabinet.imgPath} />

					<h2>{this.props.cabinet.title}</h2>
					<h4>{this.props.cabinet.name}</h4>
					<h5></h5>

					<p>{this.props.cabinet.description}</p>

					



					
						
					<Link to={`/`}>
						<Button variant="outline-dark" onClick={this.props.nextCandidate}>Previous</Button>
</Link>

<br />
						

					
					<Button onClick={this.props.nextCandidate} variant="outline-dark">
						Next
					</Button>

					<div>
					<CarouselView  />
					</div>

					
					
				</React.Fragment>
			</div>
		);
	}
}

export default CabinetView;

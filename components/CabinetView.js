import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CabinetCard from './CabinetCard';
import './CabinetView.css';

export class CabinetView extends Component {
	state = {
		candidates: this.props.candidates,
		idx: this.props.idx
	}


	nextCandidate = () => {
		this.setState({ idx: (this.state.idx + 1) % this.state.value.length });
	
	}
	
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
						<Button variant="outline-dark">Previous</Button>
</Link>
						

					
					<Button onClick={this.props.nextCandidate} variant="outline-dark">
						Next
					</Button>

					
					
				</React.Fragment>
			</div>
		);
	}
}

export default CabinetView;

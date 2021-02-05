import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./CabinetView.css";


export class CabinetView extends Component {
  render() {
    const previousCandidate = this.props.candidates.find((candidate) =>
      Number(this.props.cabinet.id) > 0
        ? Number(candidate.id) === Number(this.props.cabinet.id) - 1
        : Number(candidate.id) === Number(this.props.candidates.length - 1)
    );

    const nextCandidate = this.props.candidates.find((candidate) =>
      Number(this.props.cabinet.id) >= Number(this.props.candidates.length - 1)
        ? Number(candidate.id) === 0
        : Number(candidate.id) === Number(this.props.cabinet.id + 1)
    );

    return (
      <div className="view">
        <React.Fragment>
          <img className="img-fluid" src={this.props.cabinet.imgPath} />

          <h2>{this.props.cabinet.title}</h2>
          <h4>{this.props.cabinet.name}</h4>
         

          <p>{this.props.cabinet.description}</p>
          <p>Confirmation status: {this.props.cabinet.isConfirmed}</p> 
         





<div className = "buttongroup">
          <Link to={`/`}>
            <Button
              variant="outline-dark"
              
            >
              Home
            </Button>
          </Link>
          <Link to={`/cabinet/${previousCandidate.title}`}>
            <Button
              variant="outline-dark"
              
            >
              Previous
            </Button>
          </Link>


         

         
          <Link to={`/cabinet/${nextCandidate.title}`}>
            
            <Button
             
              variant="outline-dark"
            >
              Next
            </Button>
          </Link>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default CabinetView;

import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CabinetCard from "./CabinetCard";
import "./CabinetView.css";
import CarouselView from "./CarouselView";

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
          <img className="mugshot" src={this.props.cabinet.imgPath} />

          <h2>{this.props.cabinet.title}</h2>
          <h4>{this.props.cabinet.name}</h4>
          <h5></h5>

          <p>{this.props.cabinet.description}</p>
          <p><b>Previous position holder: </b> {this.props.cabinet.previousHolder}</p>





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

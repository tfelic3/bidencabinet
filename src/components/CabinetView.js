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

          <Link to={`/cabinet/${previousCandidate.title}`}>
            <Button
              variant="outline-dark"
              // onClick={this.props.previousCandidate}
            >
              Previous
            </Button>
          </Link>

          <br />
          <Link to={`/cabinet/${nextCandidate.title}`}>
            <Button
              // onClick={this.props.nextCandidate}
              variant="outline-dark"
            >
              Next
            </Button>
          </Link>
          <div>
            <CarouselView />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default CabinetView;

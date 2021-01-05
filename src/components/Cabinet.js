import React, { Component } from 'react';
import CabinetCard from './CabinetCard';
import PropTypes from 'prop-types';




class Cabinet extends Component {
	render() {
     

		return this.props.candidates.map((pick) => <CabinetCard key={pick.id} pick={pick} />);
 
  
   }
}

// Proptypes
Cabinet.propTypes ={
   candidates: PropTypes.array.isRequired
}
export default Cabinet;

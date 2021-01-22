import React, { Component } from 'react'

export class HeaderView extends Component {
    render() {
        return (
            <div className="head">
                <h1>Biden Cabinet Nominees</h1>
                <p style={{
				textAlign: 'center', color: 'black'
													 
            }}> ✓ indicates confirmed or confirmation not necessary</p>
           <p style={{
				textAlign: 'center', color: 'black'
													 
            }}> ☐ indicates confirmation pending</p>
            </div>
        )

    
    }
}

export default HeaderView

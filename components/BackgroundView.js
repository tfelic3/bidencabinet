import React, { Component } from 'react'

export class BackgroundView extends Component {
    render() {
        return (
            <div style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/seal.svg'})`,
                backgroundRepeat: 'repeat',
                opacity: 0.5,
             				
              }}>
        
            </div>
        )
    }
}

export default BackgroundView

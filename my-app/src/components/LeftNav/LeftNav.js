import React, { Component } from 'react';
import './index.css';

class LeftNav extends Component {
    render() {
        return (
            <div className='nav_container'>
            <div>
                <h1>Lambda Notes</h1>
                </div>
                <div className='nav_buttons'>
                <button className='nav_button'><a href='#'>View Your Notes</a></button>
                <button className='nav_button'><a href='#'>+ Vreate New Note</a></button>
                    
                    </div>
            </div>
        );
    }
}

export default LeftNav;
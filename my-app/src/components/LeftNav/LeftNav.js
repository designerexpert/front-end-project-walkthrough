import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class LeftNav extends Component {
    render() {
        return (
            <div className='nav_container'>
                <div>
                    <h1>Lambda Notes</h1>
                </div>
                <div className='nav_buttons'>
                    <button className='nav_button'><Link to='/'>View Your Notes</Link></button>
                    <button className='nav_button'><Link to='/create'>+ Create New Note</Link></button>
                    
                </div>
            </div>
        );
    }
}

export default LeftNav;
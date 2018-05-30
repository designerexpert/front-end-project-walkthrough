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
                    <button>View Your Notes</button>
                    <button>+ Vreate New Note</button>
                    
                    </div>
            </div>
        );
    }
}

export default LeftNav;
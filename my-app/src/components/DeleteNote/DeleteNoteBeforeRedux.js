import React, { Component } from 'react';
import './index.css';

class DeleteNote extends Component {
// when this component will mount
    render() {
        let toggleInModal = this.props.toggle;
        return (
            // <div className='delete_wrapper hidden'>
            //if this.props.toggle is true the modal is shown, if not the class 'hidden' is added which is = display: none;
            <div  className={toggleInModal ? 'delete_wrapper' : 'hidden'}>
                <div><h4>Are you sure...</h4>
                </div>
                <div className='modalButtons'>
                    <div className='createNote_button danger' onClick={this.props.hideModal}>Delete</div>
                    <div className='createNote_button' onClick={this.props.hideModal}>No</div>
                </div>
            </div>
        );
    }
}

export default DeleteNote;
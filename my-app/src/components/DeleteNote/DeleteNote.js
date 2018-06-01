import React, { Component } from 'react';
import {deleteNote} from '../../actions';
import { connect } from 'react-redux';
import './index.css';

class DeleteNote extends Component {
    handleDeleteNote = () => {
        this.props.deleteNote(this.props.toDelete);
        this.props.history.push('/'); // Browser Router provides this. it navigates into the home page
    }
// when this component will mount
    render() {
        console.log('delete note props', this.props)

        let toggleInModal = this.props.toggle;
        return (
            // <div className='delete_wrapper hidden'>
            //if this.props.toggle is true the modal is shown, if not the class 'hidden' is added which is = display: none;
            <div  className={toggleInModal ? 'delete_wrapper' : 'hidden'}>
                <div><h4>Are you sure you want to delete this?</h4>
                </div>
                <div className='modalButtons'>
                    <div className='createNote_button danger' 
                         onClick={this.handleDeleteNote}
                    >Delete</div>
                    <div className='createNote_button' 
                        onClick={this.props.hideModal}
                    >No</div>
                </div>
            </div>
        );
    }
}

export default connect(null, {deleteNote})(DeleteNote);

// we need to pass info to the modal from parent Comp, in this case it is NoteView.js
// we need to pass _id property and we are going to do that by passing as a props {this.state.matched[0]._id}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createNote} from '../../actions';
import './index.css';

class CreateNote extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
        render() {
            return (
                <div className='noteView_container'>
                    <div className='noteView_topContent'>
                        <div className='content_header'>
                            Create New Note;
                        </div>
                    </div>
                    <div  className='notes_Form'>
                            <input type='text' className='createNoteTitle' placeholder='Note Title' />
                            <textarea className='createNoteBody' placeholder='Note Content' rows="20" />
                            <a href='#' className='buttonLink'><button className='createNote_button'>Save</button></a>
                    </div>
                </div>
        );
    }
}

export default connect(null, {createNote})(CreateNote);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createNote} from '../../actions';
import './index.css';

class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            note: {
                title: '',
                body: ''
            }
        }
    }

    handleChange = (e) => {
        let temp = { ...this.state.note } // ES6 take a whole copy of state
        temp[e.target.name] = e.target.value;
        this.setState({ note: temp });
    }

    handleSave = () => {
        console.log('createNote this.state.note: ', this.state.note);
        let newNote = { ...this.state.note};
        newNote['_id'] = Date.now() + newNote.title;
        newNote.createdAt = Date.now();
        console.log(" new note is: ", newNote);
        this.props.createNote(newNote);
        this.props.history.push('/');
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
                    <input 
                        type='text' 
                        className='createNoteTitle' 
                        placeholder='Note Title'
                        name='title'

                        value={this.state.note.title} 
                        onChange={this.handleChange}
                    />
                    <textarea 
                        className='createNoteBody' 
                        placeholder='Note Content' 
                        rows="20" 
                        name='body'
                        value={this.state.note.body}
                        onChange={this.handleChange}
                    />
                    <a href='#' className='buttonLink'>
                        <button 
                            className='createNote_button'
                            onClick={this.handleSave}
                        >  
                            Save
                        </button>
                    </a>
                </div>
            </div>
        );
    }
}

export default connect(null, {createNote})(CreateNote);
import React, { Component } from 'react';
import './index.css';

class EditNote extends Component {
    render() {
        return (
            <div className='noteView_container'>
                    <div className='noteView_topContent'>
                        <div className='content_header'>
                           Edit Note;
                        </div>
                    </div>
                    <div  className='notes_Form'>
                            <input type='text' className='createNoteTitle' placeholder='Note Title' />
                            <textarea className='createNoteBody' placeholder='Note Content' rows="20" />
                            <a href='#' className='buttonLink'><button className='createNote_button'>Update</button></a>
                    </div>
                </div>
        );
    }
}

export default EditNote;
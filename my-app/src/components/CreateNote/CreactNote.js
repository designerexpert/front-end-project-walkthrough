import React, { Component } from 'react';
import './index.css';

class CreactNote extends Component {
        render() {
            return (
                <div className='noteView_container'>
                    <div className='noteView_topContent'>
                        <div className='content_header'>
                            Creact New Note;
                        </div>
                    </div>
                    <div  className='notes_Form'>
                            <input type='text' className='createNoteTitle' placeholder='Note Title' />
                            <textarea className='createNoteBody' placeholder='Note Content' rows="20" />
                            <button className='createNote_button'>Save</button>
                    </div>
                </div>
        );
    }
}

export default CreactNote;
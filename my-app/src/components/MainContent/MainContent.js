import React, { Component } from 'react';
import './index.css';
import NoteList from '../NoteList/NoteList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreactNote';

class MainContent extends Component {
    render() {
        return (
            <div className='main_container'>
                <CreateNote />
            </div>
        );
    }
}

export default MainContent;
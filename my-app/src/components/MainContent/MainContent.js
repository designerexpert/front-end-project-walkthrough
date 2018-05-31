import React, { Component } from 'react';
import './index.css';
import NoteList from '../NoteList/NoteList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreactNote';
import EditNote from '../EditNote/EditNote';
import DeleteNote from '../DeleteNote/DeleteNote';

class MainContent extends Component {
    render() {
        return (
            <div className='main_container'>
                {/* <NoteList /> */}
                {/* <CreateNote /> */}
                <NoteView />
                <DeleteNote />
                {/* <EditNote /> */}
            </div>
        );
    }
}

export default MainContent;
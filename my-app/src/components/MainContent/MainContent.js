import React, { Component } from 'react';
import './index.css';
import NoteList from '../NoteList/NoteList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
import { Route, Switch } from 'react-router-dom';

class MainContent extends Component {
    render() {
        return (
            <div className='main_container'>
                <Switch>
                    <Route exact path='/' component={ NoteList } />
                    <Route exact path='/note/:id' component={ NoteView } />
                    <Route exact path='/create' component={ CreateNote } />
                    <Route exact path='/edit/:id' component={ EditNote } />
                    {/* <NoteList /> */}
                    {/* <CreateNote /> */}
                    {/* <NoteView /> */}
                    {/* <EditNote /> */}
                </Switch>
            </div>
        );
    }
}

export default MainContent;
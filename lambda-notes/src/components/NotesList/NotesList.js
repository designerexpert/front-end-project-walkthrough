import React, { Component } from 'react';
import './index.css';

class NotesList extends Component {
    constructor() {
        super()
        this.state = {
            notesArray: [
                {
                    _id: 'asdasdiuljkskhl1012939',
                    title: 'First Note',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    createdAt: 1527536455211,
                },
                {
                    _id: 'jlkljhdjhl1012939',
                    title: 'Second Note',
                    body: 'Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    createdAt: 1527536455220,
                },
                {
                    _id: 'ghhsjsghhse10000',
                    title: 'Third Note',
                    body: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    createdAt: 1527536455230,
                },
                {
                    _id: 'hhkjsjdhjgfkhjljlkh10000',
                    title: 'Fourth Note',
                    body: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                    createdAt: 1527536455230,
                },
            ]
        }
    }

    generateNotes = (what, where) => {
        return (
            <div className='note' key={where + what.title}>
                <div>
                    <h4>{what.title}</h4>
                    <hr></hr>
                    <p>{what.body}</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='notesList_container'>
                <div><h3 className='content_header'>Your Notes:</h3></div>
                <div className='notesList'>
                    {this.state.notesArray.map(this.generateNotes)}
                </div>
            </div>
        );
    }
}

export default NotesList;
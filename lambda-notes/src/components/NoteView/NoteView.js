import React, { Component } from 'react';
import DeleteNote from '../DeleteNote/DeleteNote'
import './index.css';

class NoteView extends Component {
    constructor() {
        super()
        this.state = {
            displayDelete: false,
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

    showModal = () => {
        this.setState({displayDelete: !this.state.displayDelete})
    }

    render() {
        return (
            <div className='noteView_container'>
                <div className='noteView_topContent'>
                    <h3 className='content_header'>
                        {this.state.notesArray[0].title}
                    </h3>
                    <div>
                        <a href='#' className='edit_delete'>edit</a>
                        <a
                            href='#'
                            className='edit_delete'
                            onClick={this.showModal}
                        >
                            delete
                        </a>
                    </div>
                </div>
                <div className='notesList'>
                    <p className=''>
                        {this.state.notesArray[0].body}
                    </p>
                </div>
                <DeleteNote
                    toggle={this.state.displayDelete}
                    showModal={this.showModal}
                />
            </div>
        );
    }
}

export default NoteView;
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editNote } from '../../actions';
import './index.css';

const mapStateToProps = (state) => {
    // this helper function says: whatever our redux store is (which is an array of objects(notes)) set it inside of props
    // by using this function and the props name is going to be 'notesArray'
    // we need connection 
    return {
        notesArray: state
    }
}

class EditNote extends Component {
    constructor() {
        super();
        this.state = {
            matched: [] //will be an array at first
        }
    }

componentWillMount() { //cwm will run before render
        let routeId = this.props.match.params.id; //will take the id from params
        // console.log('routeId: ', routeId);
        //filter is a function of an array that whatever matches the cb func is going to be a return to this variable
        let matched = this.props.notesArray.filter( item => item._id === routeId);
        console.log('Matched in EditNote: ', matched);
        this.setState({ matched });
}

handleChange = (e) => {
    // console.log('e name in editNote: ', e.target.name);
    let temp = Array.from(this.state.matched);
    temp[0][e.target.name] = e.target.value;
    this.setState({matched: temp})
}

handleUpdate = () => {
    // to do: fire action here
    this.props.editNote(this.state.matched[0]);
    this.props.history.push('/');
}


render() {
    console.log('props inside editNote: ', this.props)
        return (
            <div className='noteView_container'>
                    <div className='noteView_topContent'>
                        <div className='content_header'>
                           Edit Note:
                        </div>
                    </div>
                    <div  className='notes_Form'>
                            <input 
                                type='text' 
                                name='title'
                                className='createNoteTitle' 
                                value={this.state.matched[0].title}
                                onChange={this.handleChange} />
                            <textarea 
                                className='createNoteBody' 
                                name='body'
                                value={this.state.matched[0].body}
                                rows="20"
                                onChange={this.handleChange} />
                            <a href='#' className='buttonLink'>
                                <button className='createNote_button'
                                        onClick={this.handleUpdate}>
                                    Update
                                </button>
                            </a>
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProps, {editNote})(EditNote);
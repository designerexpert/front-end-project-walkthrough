import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    // this helper function says: whatever our redux store is (which is an array of objects(notes)) set it inside of props
    // by using this function and the props name is going to be 'notesArray'
    // we need connection 
    return {
        notesArray: state
    }
}
class NoteList extends Component {
    constructor() {
        super()
        this.state = {
        }
    }    
// to extract functionality - put it inside the body of class
    generatorOfNotes = ((item, i) => {
        return(
            <Link to={`/note/${item._id}`}  className='button_link' key={i}>
                <div className='note'> 
                    <div> 
                        <h4>{item.title}</h4>
                        <hr />
                        <p>{item.body}</p>
                    </div>
                </div>
            </Link>
        )
    })

    render() {
        console.log('props via connect in NoteList: ', this.props)
            return (
            <div>
                <div>
                    <h3>Your Notes:</h3> 
                </div>
                <div  className='notes_container'>
                   {this.props.notesArray.map(this.generatorOfNotes)}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, {/* actionHere */})(NoteList);
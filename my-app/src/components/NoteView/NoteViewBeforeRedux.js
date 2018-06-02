import React, { Component } from 'react';
import DeleteNote from '../DeleteNote/DeleteNote';
import { Link } from 'react-router-dom';
import './index.css';

class NoteView extends Component {
    constructor() {
        super()
        this.state = {
            displayDelete: false,
            matched: [{}], //when cdm renders one time and see matched: []; it can't read property of a missing array, when it sees matched: [{}], it is just undefined, and then it re-renders again and sees matched object 
            notesArray: [
                {
                    _id: 'fajfdf2434',
                    title: 'First Note',
                    body: 'diodfjsa fjdos;ajfio fdjf aidjfidojfdkos afjda fd foidaufd fjd foja fjdiofja fjdk fdao;fjaof djf dajfd ioaf; jafj fj df jdsfj  fidofkaj fdiofjoa;jf; afidosa;f',
                    createAt: 1527645632736,
                },
                {
                    _id: 'fajffdsfsf4',
                    title: 'Second Note',
                    body: 'diodfjsa fjdos;ajfio fdjf aidjfidojfdkos afjda fd foidaufd fjd foja fjdiofja fjdk fdao;fjaof djf dajfd ioaf; jafj fj df jdsfj  fidofkaj fdiofjoa;jf; afidosa;f',
                    createAt: 1527645632754,
                },
                {
                    _id: 'fajfdf6754',
                    title: 'Third Note',
                    body: 'diodfjsa fjdos;ajfio fdjf aidjfidojfdkos afjda fd foidaufd fjd foja fjdiofja fjdk fdao;fjaof djf dajfd ioaf; jafj fj df jdsfj  fidofkaj fdiofjoa;jf; afidosa;f',
                    createAt: 1527645665465,
                },
                {
                    _id: 'fajfdf6723',
                    title: 'Fourth Note',
                    body: 'diodfjsa fjdos;ajfio fdjf aidjfidojfdkos afjda fd foidaufd fjd foja fjdiofja fjdk fdao;fjaof djf dajfd ioaf; jafj fj df jdsfj  fidofkaj fdiofjoa;jf; afidosa;f',
                    createAt: 1527645665468,
                }

            ]
        }
    }
    componentWillMount() {
        let routeId = this.props.match.params.id;
        console.log('routeId: ', routeId);
        //filter is a function of an array that whatever matches the cb func is going to be a return to this variable
        let matched = this.state.notesArray.filter( item => item._id === routeId);
        console.log('Matched let: ', matched);
        this.setState({ matched });
    }
    
    showModal = () => {
        this.setState({ displayDelete: !this.state.displayDelete })
    }

    render() {
        console.log('NoteView props: ', this.props )
        console.log('inside render: ', this.state.matched)
        // console.log('NoteView props: ', this.props.match.params.id);
            return (
                <div className='noteView_container'>
                    <div className='noteView_topContent'>
                        <div className='content_header'>
                            {this.state.matched[0].title}
                        </div>
                        <div>
                            <Link to={`/edit/${this.props.match.params.id}`} className='editDelete'>edit</Link>
                            <a 
                                href='#' 
                                className='editDelete'
                                onClick={this.showModal}
                            >
                                delete
                            </a>
                        </div>
                    </div>
                    <div  className='notes_container'>
                        <p>
                            {this.state.matched[0].body}
                        </p>
                    </div>
                    <DeleteNote toggle={this.state.displayDelete} hideModal={this.showModal} />
                </div>
        );
    }
}

export default NoteView;
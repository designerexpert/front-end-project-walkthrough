import React, { Component } from 'react';
import './index.css';

class NoteList extends Component {
    constructor() {
        super()
        this.state = {
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
                    title: 'Third Note',
                    body: 'diodfjsa fjdos;ajfio fdjf aidjfidojfdkos afjda fd foidaufd fjd foja fjdiofja fjdk fdao;fjaof djf dajfd ioaf; jafj fj df jdsfj  fidofkaj fdiofjoa;jf; afidosa;f',
                    createAt: 1527645665468,
                }

            ]
        }
    }    
// to extract functionality - put it inside the body of class
    generatorOfNotes = ((item, i) => {
        return(
            <div className='note' key={i}> 
                <div> 
                    <h4>{item.title}</h4>
                    <hr />
                    <p>{item.body}</p>
                </div>
            </div>
        )
    })
    render() {
            return (
            <div>
                <div>
                    <h3>Header</h3> 
                </div>
                <div  className='notes_container'>
                   {this.state.notesArray.map(this.generatorOfNotes)}
                </div>
            </div>
        );
    }
}

export default NoteList;
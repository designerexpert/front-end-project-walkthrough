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
                    title: 'First Note',
                    body: 'diodfjsa fjdos;ajfio fdjf aidjfidojfdkos afjda fd foidaufd fjd foja fjdiofja fjdk fdao;fjaof djf dajfd ioaf; jafj fj df jdsfj  fidofkaj fdiofjoa;jf; afidosa;f',
                    createAt: 1527645632754,
                },
                {
                    _id: 'fajfdf6754',
                    title: 'First Note',
                    body: 'diodfjsa fjdos;ajfio fdjf aidjfidojfdkos afjda fd foidaufd fjd foja fjdiofja fjdk fdao;fjaof djf dajfd ioaf; jafj fj df jdsfj  fidofkaj fdiofjoa;jf; afidosa;f',
                    createAt: 1527645665465,
                }

            ]
        }
    }
    // let template = (
    //     <div className='note'> 
    //         <div> 
    //             <h4>{this.state.notesArray[0].title}</h4>
    //              <hr> </hr>
    //         <p>{this.state.notesArray[0].body}</p>
    //     </div>
    // )
    

    render() {

        let newNotesCollection = []
        for (let i=0; i<this.state.notesArray.length; i++){
            newNotesCollection.push(
                <div className='note'> 
                        <div> 
                            <h4>{this.state.notesArray[i].title}</h4>
                            <hr />
                            <p>{this.state.notesArray[i].body}</p>
                        </div>
                </div>
            )
        }
            return (
            <div>
                <div>
                    <h3>Header</h3> 
                </div>
                <div  className='notes_container'>
                   {newNotesCollection}
                </div>
            </div>
        );
    }
}

export default NoteList;
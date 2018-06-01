import {DELETE_NOTE, EDIT_NOTE} from '../actions';
const initialState = [
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
];
//our initialState will be an array of stuff. 
//notesReduces will take two arguments: Current Application State, and action {can be an object} is optional,
//and returns the next application state
const notesReducer = (state = initialState, action) => {
    //The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
    let temp = Array.from(state);
    switch(action.type) {
        case DELETE_NOTE:
            state.forEach((item, i) => {
                if (item._id === action.payload) {
                    temp.splice(i, 1); //start at i, and delete 1
                    return;
                }
            });
            return temp;
        case EDIT_NOTE:
            state.forEach((item, i) => {
                if (item._id === action.payload._id) {
                    temp.splice(i, 1); //start at i, and delete 1
                    return;
                }
            });
            temp.unshift(action.payload);
            return temp;


        default:
            return state;
    }
}

export default notesReducer;
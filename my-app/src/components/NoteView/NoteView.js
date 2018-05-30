import React, { Component } from 'react';
import './index.css';

class NoteView extends Component {
    constructor() {
        super()
        this.state = {
            notesArray: [
                {
                    _id: 'fajfdf2434',
                    title: 'First Note',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper eu dui id condimentum. Morbi nec neque vel erat euismod varius vitae at ligula. Nulla tortor odio, placerat a faucibus hendrerit, laoreet quis ex. Mauris hendrerit dui massa, ac ultricies quam consequat tristique. Aliquam dignissim nulla a purus viverra consequat. Donec tristique leo justo, nec viverra velit mollis dignissim. Sed viverra felis augue, eu porttitor mauris vulputate vel. Nulla facilisi. Donec posuere scelerisque mauris aliquam cursus. Sed quis varius magna. Pellentesque ut mauris non eros gravida lobortis. Maecenas fringilla ex ut est elementum, vitae vehicula nisl tempus.',
                    createAt: 1527645632736,
                },
                {
                    _id: 'fajffdsfsf4',
                    title: 'Second Note',
                    body: 'Pellentesque consequat, neque non auctor placerat, ex nulla dictum erat, sed cursus est turpis ut nibh. Nulla facilisi. Nunc vehicula et est eget convallis. Donec ipsum ligula, dignissim finibus quam sagittis, volutpat laoreet leo. Suspendisse consectetur gravida nunc, id condimentum ligula blandit eget. In lobortis in odio nec egestas. Mauris rutrum, ipsum at suscipit mattis, sapien lacus iaculis est, quis vehicula ipsum lectus vulputate lorem. Nunc ultrices efficitur ligula, vitae ultrices nulla vulputate et. Duis scelerisque nulla magna, in semper dui fringilla id. Duis eu ante eget tortor volutpat fermentum. Aenean quis luctus orci, nec tristique dolor. Sed sit amet diam quis lectus convallis semper sit amet quis risus. Duis non metus cursus, tincidunt arcu vitae, fermentum diam.',
                    createAt: 1527645632754,
                },
                {
                    _id: 'fajfdf6754',
                    title: 'Third Note',
                    body: 'Phasellus dapibus sodales nulla ut facilisis. Curabitur sit amet turpis non nunc commodo viverra non placerat lorem. Nunc vitae aliquet lacus. Integer pharetra elit ac ipsum lacinia commodo. Nullam dictum at est ut porttitor. Curabitur vitae nisl sed risus facilisis condimentum. Mauris mattis bibendum dolor, ac interdum sem egestas ac. Curabitur cursus sed dolor sit amet eleifend. Nullam luctus non diam eget tincidunt. Vivamus et augue lectus.',
                    createAt: 1527645665465,
                },
                {
                    _id: 'fajfdf6723',
                    title: 'Third Note',
                    body: 'Nam ut auctor purus. Phasellus nec imperdiet dolor, a blandit leo. Aliquam quis purus justo. Nunc feugiat tincidunt est nec mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque pharetra velit eu ex scelerisque viverra. Ut posuere orci nisi, vitae semper lorem dignissim ac.',
                    createAt: 1527645665468,
                }

            ]
        }
    }    

    render() {
            return (
                <div className='noteView_container'>
                    <div className='noteView_topContent'>
                        <div className='content_header'>
                            {this.state.notesArray[0].title}
                        </div>
                        <div>
                            <a href='#' className='editDelete'>edit</a>
                            <a href='#' className='editDelete'>delete</a>
                        </div>
                    </div>
                    <div  className='notes_container'>
                        <p>
                            {this.state.notesArray[0].body}
                        </p>
                    </div>
                </div>
        );
    }
}

export default NoteView;
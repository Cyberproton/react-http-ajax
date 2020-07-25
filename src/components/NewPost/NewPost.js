import React, { Component } from 'react';
import Axios from 'axios';

import './NewPost.css';

class NewPost extends Component {

    state = {
        title: '',
        content: '',
        author: 'Max'
    };

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Cyberproton</option>
                    <option value="Manu">Hyperelectron</option>
                </select>
                <button onClick={this.postCreatedHandler}>Add Post</button>
            </div>
        );
    }

    postCreatedHandler = () => {
        const post = { ...this.state };
        Axios
            .post('https://jsonplaceholder.typicode.com/posts', post)
            .then(response => {
                alert('Post created!');
                console.log(response);
            });
    };

}

export default NewPost;
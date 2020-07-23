import React, { Component } from 'react';
import Axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    // Side-effects go here, this function does not trigger re-render
    componentDidMount() {
        Axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }

}

export default Blog;
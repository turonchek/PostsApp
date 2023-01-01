import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '../ducks/postsSlice';

export const PostsList = () => {

    const posts = useSelector(selectPosts)

    const renderedPosts = posts.map(({id, title, content}) => (
        <article key={id} >
            <h3>{title}</h3>
            <p>{content.substring(0,100)}</p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
}


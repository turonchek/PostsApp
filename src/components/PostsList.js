import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '../ducks/postsSlice';
import { PostAuthor } from './PostAuthor';

export const PostsList = () => {

    const posts = useSelector(selectPosts)

    const renderedPosts = posts.map(({id, title, content, userId}) => (
        <article key={id} >
            <h3>{title}</h3>
            <p>{content.substring(0,100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={userId} />
            </p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
}


import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '../ducks/postsSlice';
import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';

export const PostsList = () => {

    const posts = useSelector(selectPosts);

    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(({id, title, content, userId, date}) => (
        <article key={id} >
            <h3>{title}</h3>
            <p>{content.substring(0,100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={userId} />
                <TimeAgo timestamp={date} />
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


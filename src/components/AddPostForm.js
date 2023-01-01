import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addPost } from '../ducks/postsSlice';

export const AddPostForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const onAddPost = () => {
        if( title && content ) {
            dispatch(
                addPost(title,content)
            )
            setTitle('');
            setContent('');
        }
    }

    return (
        <section>
            <h2>Add a new Post</h2>
            <form>
                <label htmlFor="postTitle">Post title:</label>
                <input 
                    type="text"
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChanged}
                    />
                <label htmlFor="posContent">Content:</label>
                <textarea 
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChanged}
                    />
                <button 
                    type='button' 
                    onClick={onAddPost}
                    >Add post</button>
            </form>
        </section>
    );
}


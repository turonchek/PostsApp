import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from '../ducks/postsSlice';
import { selectUsers } from '../ducks/usersSlice';

export const AddPostForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectUsers);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const onAddPost = () => {
        if( title && content ) {
            dispatch(
                addPost(title,content,userId)
            )
            setTitle('');
            setContent('');
        }
    }

    const canAdd = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map(({id,name}) => (
        <option key={id} value={id}>{name}</option>
    ))

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
                <label htmlFor="postAuthor">Author:</label>
                <select value={userId} name="" onChange={onAuthorChanged} id="postAuthor">
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="posContent">Content:</label>
                <textarea 
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChanged}
                    />
                <button 
                    disabled={!canAdd}
                    type='button' 
                    onClick={onAddPost}
                    >Add post</button>
            </form>
        </section>
    );
}


import { useSelector } from "react-redux";
import { selectUsers } from "../ducks/usersSlice";

import React from 'react';

export const PostAuthor = ({userId}) => {
    const users = useSelector(selectUsers);

    const author = users.find(user => user.id == userId);

    return (
        <span>
            {console.log(users)}
            by {author ? author.name : "Unknown author"} 
        </span>
    );
}


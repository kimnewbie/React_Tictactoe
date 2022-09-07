import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import useAsync from './useAsync';


const getUsers = async (id) => {
    const response = await axios.get(
        // 'https://jsonplaceholder.typicode.com/users/showmeerror' // error test
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}

const User = ({ id }) => {
    // const [state, refetch] = useAsync(getUser, [], true);
    const [state] = useAsync(() => getUsers(id), [id]);

    const { loading, data: user, error } = state;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email:</b> {user.email}
            </p>
        </div>
    );
}

export default User;
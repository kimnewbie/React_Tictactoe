import axios from 'axios';
import React from 'react';
import useAsync from './useAsync';


const getUsers = async ({ id }) => {
    const response = await axios.get(
        // 'https://jsonplaceholder.typicode.com/users/showmeerror' // error test
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}

const User = ({ id }) => {
    const { data: user, error, isLoading } = useAsync({
        promiseFn: getUsers,
        id,
        watch: id
    });

    if (isLoading) return <div>로딩중..</div>;
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
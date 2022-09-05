import React from 'react'

const User = ({ user }) => {
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}

const UserList = () => {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];

    return (
        <div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    )
}
export default UserList;
import React, { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

const countActiveUsers = (users) => {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]
}

const reducer = (state, action) => {
    return state;
}

const AppPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <CreateUser
            />
            <UserList users={[]} />
            <div>활성사용자 수 : 0</div>
        </>
    );
}

export default AppPage;
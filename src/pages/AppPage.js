import React, { useMemo, useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

const countActiveUsers = (users) => {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

const AppPage = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const { username, email } = inputs;

    const [users, setUsers] = useState([
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
    ]);

    // const count = countActiveUsers(users); // 인풋이 바껴도 렌더링 되므로 useMemo 사용
    const count = useMemo(() => countActiveUsers(users), [users]);

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };


    const nextId = useRef(4);

    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        };

        // setUsers([...users, user]); // 1번재 방법
        setUsers(users.concat(user)); // 2번재 방법 - concat

        setInputs({
            username: '',
            email: ''
        });

        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const onToggle = id => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성사용자 수 : {count}</div>
        </>
    );
}

export default AppPage;
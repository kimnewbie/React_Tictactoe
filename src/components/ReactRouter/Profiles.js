import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample ';

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/newbie">Newbie</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">Gildong</Link>
                </li>
            </ul>
            <Routes>
                <Route
                    path="/"
                    element={<div>유저를 선택해주세요.</div>}
                />
                <Route
                    path=":username"
                    element={<Profile />}
                />
            </Routes>
            <WithRouterSample />
        </div>
    );
};

export default Profiles;
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import About from '../components/ReactRouter/About';
import HistorySample from '../components/ReactRouter/HistorySample';
import Home from '../components/ReactRouter/Home';
import Profiles from '../components/ReactRouter/Profiles';

const RouterApp = () => {
    const { pathname } = useLocation();

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필 목록</Link>
                </li>
                <li>
                    <Link to="/history">예제</Link>
                </li>
            </ul>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/*" element={<Profiles />} />
                <Route path="/history" element={<HistorySample />} />
            </Routes>
        </div>
    );
};

export default RouterApp;
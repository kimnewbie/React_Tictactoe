import React from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

const About = () => {
    const location = useLocation();
    /*
        {
            "pathname": "/about",
            "search": "?detail=true",
            "hash": "",
            "state": null,
            "key": "default"
        } 
    */
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략
    });
    const detail = query.detail === 'true'; // 쿼리의 파싱결과값은 문자열

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
            {detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
        </div>
    );
};

export default About;
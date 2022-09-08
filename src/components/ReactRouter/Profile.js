
import { useParams } from 'react-router-dom';

const profileData = {
    newbie: {
        name: '킴뉴비',
        description: '행복하게 재밌게 살고 싶은 사람'
    },
    gildong: {
        name: '홍길동',
        description: '전래동화의 주인공'
    }
};

const Profile = () => {
    /* 문법이 업데이트 되면서 match : {params} 대신 useParams() 사용 */
    const { username } = useParams();
    const profile = profileData[username];

    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;
import React, { useRef, useState } from 'react'

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChangeInput = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤 (spread 문법)
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onClickReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChangeInput}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickname"
                placeholder='닉네임'
                onChange={onChangeInput}
                value={nickname}
            />
            <button
                onClick={onClickReset}
            >
                초기화
            </button>
            <div>
                <b>값:</b>
                {name} ({nickname})
            </div>
        </div >
    )
}

export default InputSample;
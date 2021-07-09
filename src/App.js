import React, { useState, useEffect } from 'react';
import Box from './components/Box/Box';
import './App.css';

function App() {
  const [ turn, setTurn ] = useState('X');
  const [ boxs, setBoxs ] = useState(Array.from(new Array(9), () => ""))
  const [ winner, setWinner ] =useState(''); // 위너

  const patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  useEffect(() => {
    //console.log('Change Box');
    if(boxs.filter(box=> box !== '').length < 5) return; // filter는 true일 때만 값을 가져옴.
    checkWinner();
  }, [boxs])

  const handleClickBox = (e) => {
    const { index } = e.target.dataset;

    if(boxs[index] !== '') return; // 박스에 들어간 값이 안바뀌도록!!

    const tmpArr = [...boxs]; // 값만 복사하기 위해서 주소 말고!
    tmpArr[index] = turn;
    setBoxs([...tmpArr]);
    setTurn(turn ===  'X'? 'O' : 'X') // 타입까지 확인 하는 것 ===
  }

  const handleClickRestart = () => { // RESTART
    setTurn('X');
    setWinner('');
    setBoxs(Array.from(new Array(9), () => ""));
  }
  
  const checkWinner = () => { // 승자 정해주기
    for(let i=0; i<patterns.length; i++) {
      const [ a,b,c ] = patterns[i];
      if(boxs[a] !== '' && boxs[a] === boxs[b] && boxs[b] === boxs[c]){
        setWinner(boxs[a]);
        return; // 아래 해야할 것이 있어서 break 대신
      }   
      if(boxs.filter(box => box !=='').length === boxs.length){ // 칸이 꽉 차면
        setWinner('DRAW');
      }     
    }
  }


  return (
    <div className="App">
      {winner !== '' && // 조건식이 맞을 때만 밑에 애들이 나옴

        <div className="winnerBox">
          <div>
            {winner === 'DRAW' ? winner : `Winner: ${winner}`}
            <button onClick={handleClickRestart}>RESTART</button>
          </div>
        </div>

      }
      <div className='wrap'>
        <div className='turn'>
          {turn}
        </div>
        <div className="board">
        {
          boxs.map((box, index) => {          
            return (
              <Box key={index} onClick={handleClickBox} data-index={index} mark = {box} />
              )
            })
          }
            </div>
        </div>
      {winner}
    </div>
  );
}

export default App;

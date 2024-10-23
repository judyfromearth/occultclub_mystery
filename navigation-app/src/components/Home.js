import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    const unlockedFirst = localStorage.getItem('secretRoomFirstUnlocked') === 'true';
    const unlockedSecond = localStorage.getItem('secretRoomSecondUnlocked') === 'true';

    if (path === '???' || path === '비밀의 방') {
      if (unlockedFirst) {
        if (unlockedSecond) {
          navigate(`/room/${path}/next`);
        } else {
          navigate(`/room/비밀의 방/second`);
        }
      } else {
        navigate(`/room/${path}`);
      }
    } else {
      const unlocked = localStorage.getItem(path);
      if (unlocked === 'true') {
        navigate(`/room/${path}/next`);
      } else {
        navigate(`/room/${path}`);
      }
    }
  };

  const secretRoomUnlocked = localStorage.getItem('secretRoomFirstUnlocked') === 'true';

  return (
    <div className="container">
      <p className="subtitle">judy &june</p>
      <h1>오컬트 다이어리</h1>
      {/* <button className="reset-button" onClick={() => navigate('/reset-password')}>에필로그</button> */}
      <div className="grid-container">
        <div className="grid-item red" onClick={() => handleButtonClick('A 사물함')}>A 사물함</div>
        <div className="grid-item red" onClick={() => handleButtonClick('B 사물함')}>B 사물함</div>
        <div className="grid-item red" onClick={() => handleButtonClick('동아리방')}>동아리방</div>
        <div className="grid-item red" onClick={() => handleButtonClick('힌트')}>힌트</div>
        {/* <div className="grid-item green" onClick={() => handleButtonClick('내부 광장')}>내부 광장</div>
        <div className="grid-item green" onClick={() => handleButtonClick('통제실')}>통제실</div>
        <div className="grid-item blue" onClick={() => handleButtonClick('식당')}>식당</div> */}
        <div className="grid-item blue" onClick={() => handleButtonClick(secretRoomUnlocked ? '사건의 전말' : '???')}>
          {secretRoomUnlocked ? '사건의 전말' : '???'}
        </div>
      </div>
    </div>
  );
};

export default Home;


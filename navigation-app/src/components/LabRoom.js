import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LabRoom = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unlocked = localStorage.getItem('labRoomUnlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
      navigate('/room/동아리방/next');
    }
  }, [navigate]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '강령술') {
      localStorage.setItem('labRoomUnlocked', 'true');
      setIsUnlocked(true);
      navigate('/room/동아리방/next');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  if (isUnlocked) {
    return (
      <div className="room-container" style={{ backgroundImage: "url('/images/back.png')" }}>
        <h2>동아리방</h2>
        <p>This room is unlocked.</p>
        {/* 추가 콘텐츠를 여기에 삽입할 수 있습니다. */}
      </div>
    );
  }

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/back.png')" }}>
      <h2>동아리방</h2>
      <img src="/images/clubroom.png" alt="Hint" className="hint-image" />
      <form onSubmit={handleSubmit}>
        {/* type을 "text"로 변경 */}
        <input
          type="text"
          placeholder="아이들이 한 일"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">..을 한 것 같아</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LabRoom;

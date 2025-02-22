import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ExternalRoom = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unlocked = localStorage.getItem('externalRoomUnlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
      navigate('/room/A 사물함/next');
    }
  }, [navigate]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '24024') {
      localStorage.setItem('externalRoomUnlocked', 'true');
      setIsUnlocked(true);
      navigate('/room/A 사물함/next');
    } else {
      setError('암호가 틀려서 안 열리는데..');
    }
  };

  if (isUnlocked) {
    return (
      <div className="room-container" style={{ backgroundImage: "url('/images/back.png')" }}>
        <h2>A 사물함</h2>
        <p>This room is unlocked.</p>
        {/* 추가 콘텐츠를 여기에 삽입할 수 있습니다. */}
      </div>
    );
  }

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/back.png')" }}>
      <h2>A 사물함</h2>
      <img src="/images/1.png" alt="Hint" className="hint-image" />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="암호를 입력하세요"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">열어보기</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ExternalRoom;

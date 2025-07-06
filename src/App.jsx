import React, { useState } from 'react';
import DigitalClock from './DigitalClock';
import SettingsPanel from './SettingsPanel';
import ChangeBG from './ChangeBG';
import HomePanel from './HomePanel';
import './index.css';

function App() {
  const [locked, setLocked] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('/bg1.mp4');
  const [view, setView] = useState('clock'); 

  const handleLockToggle = () => {
    const docElm = document.documentElement;

    if (!locked) {
      if (docElm.requestFullscreen) docElm.requestFullscreen();
      else if (docElm.webkitRequestFullscreen) docElm.webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }

    setLocked(!locked);
  };

  return (
    <div className="app-container">
      {/* Background video with preload */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        key={currentVideo}
      >
        <source src={currentVideo} type="video/mp4" />
      </video>

      {view === 'clock' ? (
        <>
          {!locked && (
            <div className="top-controls">
              <button className="nav-btn" onClick={() => setView('home')}>🏠 Home</button>
              <ChangeBG currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />
              <button className="nav-btn" onClick={() => setShowSettings(true)}>⚙️ Settings</button>
            </div>
          )}

          <div className="overlay">
            <DigitalClock />
          </div>

          <button className="lock-btn" onClick={handleLockToggle}>
            {locked ? '🔓 Unlock' : '🔒 Lock'}
          </button>

          <SettingsPanel visible={showSettings} onClose={() => setShowSettings(false)} />
        </>
      ) : (
        <HomePanel setView={setView} />
      )}
    </div>
  );
}

export default App;

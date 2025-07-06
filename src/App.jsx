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
  const [view, setView] = useState('clock'); // 'clock' or 'home'

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
      {/* Background video */}
      <video className="background-video" autoPlay loop muted playsInline key={currentVideo}>
        <source src={currentVideo} type="video/mp4" />
      </video>

      {view === 'clock' ? (
        <>
          {/* Top Controls (only if not locked) */}
          {!locked && (
            <div className="top-controls">
              <button className="nav-btn" onClick={() => setView('home')}>🏠 Home</button>
              <ChangeBG currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />
              <button className="nav-btn" onClick={() => setShowSettings(true)}>⚙️ Settings</button>
            </div>
          )}

          {/* Clock Display */}
          <div className="overlay">
            <DigitalClock />
          </div>

          {/* Lock/Unlock button */}
          <button className="lock-btn" onClick={handleLockToggle}>
            {locked ? '🔓 Unlock' : '🔒 Lock'}
          </button>

          {/* Settings Panel */}
          <SettingsPanel visible={showSettings} onClose={() => setShowSettings(false)} />
        </>
      ) : (
        // Home View
        <HomePanel setView={setView} />
      )}
    </div>
  );
}

export default App;

import React from 'react';

function ChangeBG({ currentVideo, setCurrentVideo }) {
  const videoOptions = [
    { label: 'Meadows', src: '/bg1.mp4' },
    { label: 'Ocean', src: '/bg2.mp4' },
    { label: 'City', src: '/bg3.mp4' },
    { label: 'Clouds', src: '/bg4.mp4' },
    { label: 'Sky', src: '/bg5.mp4' },
    { label: 'Stars', src: '/bg6.mp4' },
    { label: 'Galaxy', src: '/bg8.mp4' },
    { label: 'Mountains', src: '/bg9.mp4' },
    { label: 'Valley', src: '/background.mp4' }

  ];

  return (
    <div className="bg-dropdown">
      <select value={currentVideo} onChange={(e) => setCurrentVideo(e.target.value)}>
        {videoOptions.map((video) => (
          <option key={video.src} value={video.src}>
            {video.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChangeBG;

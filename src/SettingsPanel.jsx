import React from 'react';
import './SettingsPanel.css';

function SettingsPanel({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="settings-panel">
      <div className="settings-header">
        <h2>⚙️ Settings</h2>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>

      <div className="settings-content">
        <h3>❓ FAQ</h3>
        <p><strong>Q:</strong> How do I change the background?<br />
        <strong>A:</strong> Use the "Change BG" button when unlocked.</p>

        <h3>🆘 Help</h3>
        <p>If the screen is locked and you're stuck, press <kbd>Esc</kbd> to exit fullscreen manually.</p>
      </div>
    </div>
  );
}

export default SettingsPanel;

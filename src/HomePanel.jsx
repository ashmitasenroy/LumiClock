import React, { useState, useEffect } from 'react';
import './index.css';

function HomePanel({ setView }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [timer, setTimer] = useState(0);
  const [quote, setQuote] = useState('');
  const [timeLeft, setTimeLeft] = useState(null);

  // Quotes for demo
  const quotes = [
    "Dream big. Start small. Act now.",
    "Discipline is the bridge between goals and accomplishment.",
    "Your limitation—it’s only your imagination.",
    "The best time to start was yesterday. The next best is now.",
  ];

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      alert("⏰ Time's up!");
      setTimeLeft(null);
    }
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const startTimer = () => {
    if (timer > 0) setTimeLeft(timer);
  };

  return (
    <div className="home-panel">
      <button className="nav-btn" onClick={() => setView('clock')}>🔁 Back to Clock</button>

      {/* Calendar */}
      <div className="section calendar">
        <h2>🗓️Date</h2>
        <p>{new Date().toDateString()}</p>
      </div>

      {/* To-Do List */}
      <div className="section todo">
        <h2>✅ To-Do List</h2>
        <input
          type="text"
          placeholder="Add task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
        <ul>
          {tasks.map((task, idx) => (
            <li key={idx}>
              {task}
              <button onClick={() => handleDeleteTask(idx)}>❌</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Quote of the Day */}
      <div className="section quote">
        <h2>Quote of the Day</h2>
        <blockquote>"{quote}"</blockquote>
      </div>

      {/* Timer */}
      <div className="section timer">
        <h2>⏲ Timer</h2>
        <input
          type="number"
          min="0"
          placeholder="Seconds"
          value={timer}
          onChange={(e) => setTimer(Number(e.target.value))}
        />
        <button onClick={startTimer}>Start</button>
        {timeLeft !== null && <p>⏳ {timeLeft}s remaining</p>}
      </div>

      {/* About the App */}
      <div className="section about">
        <h2>ℹ️ About LumiClock</h2>
        <p>A fullscreen minimalist clock app with video themes, productivity tools, and focus features.</p>
        <p>Made with ❤️ by Ashmita Sen Roy</p>
        <small>© 2025 LumiClock. All rights reserved.</small>
      </div>
    </div>
  );
}

export default HomePanel;

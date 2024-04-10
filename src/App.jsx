import { useState } from 'react';
import AnalogClock from "./components/AnalogClock" 
import './App.css';

function App() {
  const [timezone1, setTimezone1] = useState('Europe/London'); // Default to UK time
  const [timezone2, setTimezone2] = useState('America/New_York');
  const [timezone3, setTimezone3] = useState('Asia/Tokyo'); 

  return (
    <div className="app">
      <div className="clock-container">
        <AnalogClock timezone={timezone1} />
        <AnalogClock timezone={timezone2} />
        <AnalogClock timezone={timezone3} />
      </div>
      <div className="timezone-selectors">
        <div className="selector">
          <label htmlFor="timezone2">
            Select Timezone for Clock 2:
          </label>
          <select id="timezone2" value={timezone2} onChange={(e) => setTimezone2(e.target.value)}>
            <option value="America/New_York">America/New_York</option>
            <option value="Europe/London">Europe/London</option>
          </select>
        </div>
        <div className="selector">
          <label htmlFor="timezone3">
            Select Timezone for Clock 3:
          </label>
          <select id="timezone3" value={timezone3} onChange={(e) => setTimezone3(e.target.value)}>
            <option value="Asia/Tokyo">Asia/Tokyo</option>
            <option value="America/Los_Angeles">America/Los_Angeles</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;

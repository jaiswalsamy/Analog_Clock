 import { useState, useEffect } from 'react';
import { useClockHandDegrees } from '../customHooks/useClockHandDegrees';
import ClockHand from './ClockHand';
import './AnalogClock.css';

function AnalogClock({ timezone }) {
  const { secondsDegrees, minsDegrees, hourDegrees, getTimeForTimezone } = useClockHandDegrees(timezone);

  useEffect(() => {
    const currentTime = getTimeForTimezone(timezone);
    const currentHour = currentTime.hours();
    const currentMinutes = currentTime.minutes();

    if (currentMinutes === 0 && currentHour !== 0) {
      alert(`It's ${currentHour === 12 ? 12 : currentHour % 12} o'clock in ${timezone}`);
    }
  }, [timezone, getTimeForTimezone]);

  return (
    <div className='clock'>
      <div className='clock-face'>
        <ClockHand type='hour-hand' degrees={hourDegrees} />
        <ClockHand type='min-hand' degrees={minsDegrees} />
        <ClockHand type='second-hand' degrees={secondsDegrees} />
      </div>
      <div className='timezone-info'>{getTimeForTimezone(timezone).format('h:mm A')}</div>
    </div>
  );
}

export default AnalogClock;


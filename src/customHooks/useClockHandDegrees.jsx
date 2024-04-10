
import { useState, useEffect } from 'react';
import moment from 'moment-timezone';

export function useClockHandDegrees(timezone) {
  const [currentTime, setCurrentTime] = useState(moment().tz(timezone));

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(moment().tz(timezone));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timezone]);

  const getTimeForTimezone = (timezone) => {
    return currentTime.clone().tz(timezone);
  };

  const getDegrees = (time, maxUnits) => {
    return (time / maxUnits) * 360 + 90;
  };

  const secondsDegrees = getDegrees(currentTime.seconds(), 60);
  const minsDegrees = getDegrees(currentTime.minutes(), 60);
  const hourDegrees = getDegrees(currentTime.hours(), 12);

  return { secondsDegrees, minsDegrees, hourDegrees, getTimeForTimezone };
}

import { useState, useEffect } from 'react';

export function useSnoreDetection() {
  const [snoreData, setSnoreData] = useState({
    duration: "3h 15m",
    lastDetected: "2 mins ago",
    frequency: "23 Episodes",
    isSnoring: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const isSnoring = Math.random() > 0.7; // 30% chance of snoring

      setSnoreData({
        duration: "3h 15m",               // Keep mock
        lastDetected: isSnoring ? "Now" : "3 mins ago",
        frequency: "23 Episodes",        // Keep mock
        isSnoring,
      });
    }, 4000); // Check every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return snoreData;
}

import { useState, useEffect } from 'react';

export function useHeartRateData() {
  const [heartRate, setHeartRate] = useState({
    rate: 70,
    status: "Normal"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newRate = Math.floor(Math.random() * 40 + 60); // 60–100
      const status = newRate > 100 ? "High" : "Normal";

      setHeartRate({ rate: newRate, status });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return heartRate;
}

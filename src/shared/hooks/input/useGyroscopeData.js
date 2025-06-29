import { useState, useEffect } from 'react';

export function useGyroscopeData() {
  // Initialize with an object containing all required properties
  const [gyroData, setGyroData] = useState({
    pitch: 0,
    roll: 0,
    isConnected: false,
    lastUpdated: new Date().toLocaleTimeString()
  });

  useEffect(() => {
    // DEVELOPMENT MODE: Simulate data
    // Comment this block and uncomment the WebSocket block below when connecting to real hardware via Raspberry Pi
    const interval = setInterval(() => {
      const pitch = (Math.random() * 60) - 30; // -30 to +30 degrees
      const roll = (Math.random() * 60) - 30;  // -30 to +30 degrees

      setGyroData({
        pitch: parseFloat(pitch.toFixed(1)),
        roll: parseFloat(roll.toFixed(1)),
        isConnected: true,
        lastUpdated: new Date().toLocaleTimeString()
      });
    }, 500);

    return () => clearInterval(interval);

    // PRODUCTION MODE: Connect to Raspberry Pi WebSocket server
    // When ESP32 sends MPU6050 data to a WebSocket server running on Raspberry Pi,
    // uncomment this block and ensure your server broadcasts pitch/roll in JSON format

    /*
    const ws = new WebSocket('ws://localhost:3001'); // Replace with Pi's IP if remote access is needed

    ws.onopen = () => {
      console.log('Connected to Raspberry Pi gyroscope WebSocket');
      setGyroData(prev => ({ ...prev, isConnected: true }));
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setGyroData({
          pitch: parseFloat(data.pitch.toFixed(1)),
          roll: parseFloat(data.roll.toFixed(1)),
          isConnected: true,
          lastUpdated: new Date().toLocaleTimeString()
        });
      } catch (error) {
        console.error('Error parsing gyroscope data:', error);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      setGyroData(prev => ({ ...prev, isConnected: false }));
    };

    ws.onclose = () => {
      console.log('Disconnected from Raspberry Pi gyroscope WebSocket');
      setGyroData(prev => ({ ...prev, isConnected: false }));
    };

    return () => {
      ws.close();
    };
    */
  }, []);

  return gyroData;
}

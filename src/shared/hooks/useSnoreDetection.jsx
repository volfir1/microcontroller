import { useState } from 'react';

export function useSnoreDetection(){
    const [snoreData, setSnoreData] = useState({
        duration: "3h 15m",
        lastDetected: "2 mins ago",
        frequency: "23 Episodes"
    });
    return snoreData
}
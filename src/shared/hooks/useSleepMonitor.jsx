
import {useState, useEffect} from "react";

export function useSleepMonitor() {
    const [sleepData, setSleepData] = useState({
        status: "Sleeping",
        level: 90,
        duration: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    
    // useEffect(() => {
    //     // Simulate fetching sleep data from an API
    //     const fetchSleepData = async () => {
    //     const response = await fetch('/api/sleep-data');
    //     const data = await response.json();
    //     setSleepData(data);
    //     };
    
    //     fetchSleepData();
    // }, []);
    
    return sleepData;
}
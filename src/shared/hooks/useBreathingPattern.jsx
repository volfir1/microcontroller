import {useState, useEffect} from 'react';

export function useBreathingPattern(){
    const [breathingData, setBreathingData] = useState({
        intensity: 60,
        status: "Normal",
        rhythm: "Steady"
    });

    // // Simulate fetching breathing pattern data from an API
    // useEffect(() => {
    //     const fetchBreathingData = async () => {
    //         // Simulated data fetch
    //         const data = {
    //             intensity: 60,
    //             status: "Normal",
    //             rhythm: "Steady"
    //         };
    //         setBreathingData(data);
    //     };

    //     fetchBreathingData();
    // }, []);

    return breathingData;
}
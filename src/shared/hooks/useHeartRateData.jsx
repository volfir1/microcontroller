import {useState, useEffect} from 'react';


export function useHeartRateData() {
     const [heartRate, setHeartRate] = useState({
        rate: 69,
        status: "Normal"
    })
   return heartRate;
   
}
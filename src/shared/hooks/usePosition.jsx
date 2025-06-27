
import {useState} from 'react';
export function useSleepPosition(){
    const [positionData, setPositionData] = useState({
        position: "On Back",
        angle: 45
    });

    return positionData;
}
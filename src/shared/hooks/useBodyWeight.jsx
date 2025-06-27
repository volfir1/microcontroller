import { useState } from 'react';

export function useBodyWeight(){
    const [weightData, setWeightData] = useState({
        weight: 93
    })
    return weightData;
}
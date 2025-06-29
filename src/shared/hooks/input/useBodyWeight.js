import { useState } from 'react';

export function useBodyWeight(){
    const [weightData] = useState({
        weight: 93
    })
    return weightData;
}
import { useEffect, useState } from 'react';
import { fetchVillagers } from '../services/AnimalCrossingApi';

export const useDetails = () => {
    const [details, setDetails] = useState([]);
        
    useEffect(() => {
        fetchVillagers().then((details) => setDetails(details));
    }, []);

    return details;
}
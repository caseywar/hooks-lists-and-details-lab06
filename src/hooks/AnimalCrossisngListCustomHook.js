import { useEffect, useState } from 'react';
import { fetchVillagers } from '../services/AnimalCrossingApi';

export const useVillagers = () => {
    const [villagers, setVillagers] = useState([]);
        
    useEffect(() => {
        fetchVillagers().then((villagers) => setVillagers(villagers));
    }, []);

    return villagers;
}
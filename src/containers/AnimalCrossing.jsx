import React, { useState, useEffect } from 'react';
import VillagerList from '../components/villagers/VillagerList'
import { fetchVillagers } from '../services/AnimalCrossingApi'

const AnimalCrossing = () => {
    const [loading, setLoading] = useState(true);
    const [villagers, setCillagers] = useState([]);

    useEffect(() => {
        fetchVillagers()

        .then(setCillagers)
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <h1>Loading...</h1>;

    return (
        <VillagerList villagers={villagers} />
    );
};

export default AnimalCrossing;
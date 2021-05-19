import React, { useState, useEffect } from 'react';
import { findVillagerById } from '../services/AnimalCrossingApi';
import VillagerDetail from '../components/villagers/VillagerDetail';

const DetailsContainer = ({match}) => {
    const [loading, setLoading] = useState(true);
    const [villager, setVillager] = useState({});

    useEffect(() => {
        findVillagerById(match.params.id)
        .then(setVillager)
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <h1>Loading...</h1>;

    return (
        <VillagerDetail villager={villager} />
    );
};

export default DetailsContainer;
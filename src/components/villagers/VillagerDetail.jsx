import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/App.css'

function VillagerDetail({ villager }) {
    return (
        <main role="villagerDetails" className={style.detail} aria-label="villager">
            <h1>{villager.name}</h1>
            <img src={villager.image} alt={villager.name} />
            <ul>
                <li>{villager.japaneseName}</li>
                <li>{villager.birthday}</li>
                <li>{villager.personality}</li>
                <li>{villager.quote}</li>
                <li>{villager.skill}</li>
            </ul>
            <a href="/">Back to List</a>
        </main>
    );
}

VillagerDetail.propTypes = {
    villager: PropTypes.object.isRequired,
};

export default VillagerDetail
import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/App.css'

function VillagerDetail({ villager }) {
    return (
        <div className={style.detail} data-testid="villager">
            <h1>{villager.name}</h1>
            <img src={villager.image} alt={villager.name} />
            <ul>
                <li>Japanese Name: {villager.japaneseName}</li>
                <li>birthday: {villager.birthday}</li>
                <li>personality: {villager.personality}</li>
                <li>quote: {villager.quote}</li>
                <li>skill: {villager.skill}</li>
            </ul>
            <a href="/">Back to List</a>
        </div>
    );
}

VillagerDetail.propTypes = {
    villager: PropTypes.object.isRequired,
};

export default VillagerDetail
import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';
import style from '../app/App.css'

const VillagerList = ({ villagers }) => (
    <ul aria-label="villagers" className={style.list}>
        {villagers.map((villager) => (
            <li key={villager.id} className={style.character}>
                <Villager
                    name={villager.name}
                    image={villager.image}
                    japaneseName={villager.japaneseName}
                />
            </li>
        ))}
    </ul>
)

VillagerList.propTypes = {
    villagers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            japaneseName: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default VillagerList


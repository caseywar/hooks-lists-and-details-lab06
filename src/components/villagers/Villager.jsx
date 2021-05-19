import React from 'react'
import PropTypes from 'prop-types'

const Villager = ({ name, image, japaneseName }) => (
        <div>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{japaneseName}</p>
        </div>
);

Villager.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    japaneseName: PropTypes.string.isRequired,
}

export default Villager


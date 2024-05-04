import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './style.css'

export const UserCard = ({ supportContact }) => {
    return (
        <div className='container'>
            <p className='header'>Your Feefo support contact</p>
            <div className='body'>
                <div className='profile-picture'>
                    <b>{supportContact.name[0]}</b>
                </div>
                <div className='user-info'>
                    <p className='user-info-name'>{supportContact.name}</p>
                    <div className='user-info-bottom'>
                        <div className='user-info-bottom-left'>
                            <FontAwesomeIcon color='#7e7e7e' icon={faEnvelope} />
                            <p className='user-info-bottom-email'>{supportContact.email}</p>
                        </div>
                        <p className='user-info-bottom-id'>020 3362 4208</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

UserCard.propTypes = {
    supportContact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
};
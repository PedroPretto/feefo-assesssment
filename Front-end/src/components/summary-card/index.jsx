import React from "react";
import PropTypes from 'prop-types';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export const SummaryCard = ({ uploads, lines }) => {
    return (
        <div>

            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <FontAwesomeIcon color='#44c1f2' icon={faUpload} />
                        <p className="card-header-left-title">Sales</p>
                    </div>

                    <div className="card-header-right">
                        <FontAwesomeIcon color='#b1afae' icon={faInfoCircle} />
                    </div>

                </div>
                <div className="card-body">
                    <p>You had <b>{uploads} uploads</b> and <b>{lines}</b> lines added </p>
                </div>
            </div>
        </div>

    )
}

SummaryCard.propTypes = {
    uploads: PropTypes.number.isRequired,
    lines: PropTypes.number.isRequired
};
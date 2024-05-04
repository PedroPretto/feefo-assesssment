import React from "react";
import PropTypes from 'prop-types';

import './style.css'
export const PercentageCard = ({ totalData, consolidatedData, text }) => {
    const percentage = (consolidatedData / totalData) * 100;
    return (
        <div className="percentage-card">
            <p className="percentage-card-top">{percentage}%</p>
            <p className="percentage-card-bottom">{text}</p>
        </div>
    )
}

PercentageCard.propTypes = {
    totalData: PropTypes.number.isRequired,
    consolidatedData: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};
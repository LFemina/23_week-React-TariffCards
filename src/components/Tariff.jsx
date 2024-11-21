import React from "react";
import './Tariff.css';

const Tariff = ({ title, price, speed, traffic, highlight, color }) => {
    return (
        <div className={`tariff ${highlight ? 'highlight' : ''}`} style={{ backgroundColor: color }}>
            <h2 className="tariff-title">{title}</h2>
            <div className="tariff-body">
                <p className="tariff-price">руб <big className="price-size">{price}</big> /мес</p>
            </div>
            <div className="tariff-section">
                <p className="tariff-speed">Скорость: {speed}</p>
            </div>
            <div className="tariff-footer">
                <p className="tariff-traffic">{traffic}</p>
            </div>
        </div>
    );
};

export default Tariff;
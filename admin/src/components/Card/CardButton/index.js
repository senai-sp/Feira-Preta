import React from 'react';
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import './cardButton.css'

const CardButton = ( props ) => (
    <button {...props}>
        <FaTimesCircleO className="card__delete" />
    </button>)

export default CardButton
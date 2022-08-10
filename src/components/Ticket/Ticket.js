import React from "react";

import './Ticket.scss';
import { formatTime, TransferTime, declensionOfName, priceFormatting } from '../../utils/formating';

const Ticket = ({price, carrier, destination, origin, duration, date, stops, destination1, origin1, date1, duration1, stops1}) => {
    return (
        <div className='ticket'>
            <div className='ticket-header'>
                <div className='ticket-price'>{priceFormatting(price)}</div>
                <div className='ticket-logo'>
                    <img src={`//pics.avs.io/99/36/${carrier}.png`} alt='S7 Airlines Logo' />
                </div>
            </div>
            <div className='ticket-data-wrapper'>
                <div className='ticket-data'>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>{origin} - {destination}</p>
                        <p>{TransferTime(date, duration)}</p>
                    </div>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>В пути</p>
                        <p>{formatTime(duration)}</p>
                    </div>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>{declensionOfName(stops.length)}</p>
                        <p>{stops.join(', ')}</p>
                    </div>
                </div>
                <div className='ticket-data'>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>{origin1} - {destination1}</p>
                        <p>{TransferTime(date1, duration1)}</p>
                    </div>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>В пути</p>
                        <p>{formatTime(duration1)}</p>
                    </div>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>{declensionOfName(stops1.length)}</p>
                        <p>{stops1.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;
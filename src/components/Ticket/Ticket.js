import React from "react";
import './Ticket.scss';
import { formatTime, TransferTime, declensionOfName, priceFormatting } from '../../utils/formating';

const Ticket = ({ticket}) => {
    return (
        <div className='ticket'>
            <div className='ticket-header'>
                <div className='ticket-price'>{priceFormatting(ticket.price)}</div>
                <div className='ticket-logo'>
                    <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt='S7 Airlines Logo' />
                </div>
            </div>
            <div className='ticket-data-wrapper'>
                <div className='ticket-data'>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>{ticket.segments[0].origin} - {ticket.segments[0].destination}</p>
                        <p>{TransferTime(ticket.segments[0].date, ticket.segments[0].duration)}</p>
                    </div>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>В пути</p>
                        <p>{formatTime(ticket.segments[0].duration)}</p>
                    </div>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>{declensionOfName(ticket.segments[0].stops.length)}</p>
                        <p>{ticket.segments[0].stops.join(', ')}</p>
                    </div>
                </div>
                <div className='ticket-data'>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>{ticket.segments[1].origin} - {ticket.segments[1].destination}</p>
                        <p>{TransferTime(ticket.segments[1].date, ticket.segments[1].duration)}</p>
                    </div>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>В пути</p>
                        <p>{formatTime(ticket.segments[1].duration)}</p>
                    </div>
                    <div className='ticket-data-item'>
                        <p className='ticket-data-item-gray'>{declensionOfName(ticket.segments[1].stops.length)}</p>
                        <p>{ticket.segments[1].stops.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;
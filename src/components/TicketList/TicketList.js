import React from "react";

import Ticket from "../Ticket";

import './TicketList.scss';

const TicketList = ({sortedTickets}) => {
    const elements = sortedTickets.map((ticket) => {
        return (
            <Ticket
                key={ticket.price + ticket.segments[1].origin}
                price={ticket.price}
                carrier={ticket.carrier}
                destination={ticket.segments[0].destination}
                origin={ticket.segments[0].origin}
                date={ticket.segments[0].date}
                duration={ticket.segments[0].duration}
                stops={ticket.segments[0].stops}
                destination1={ticket.segments[1].destination}
                origin1={ticket.segments[1].origin}
                date1={ticket.segments[1].date}
                duration1={ticket.segments[1].duration}
                stops1={ticket.segments[1].stops}
            />
        )
    })


    return (
        <div className='ticket-list'>
            {elements}
        </div>
    )
}

export default TicketList;
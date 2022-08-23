import React from "react";
import Ticket from "../Ticket";
import './TicketList.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";


const TicketList = () => {
    const ticketsAll = useSelector((state) => state.reducerTickets.tick);
    const tickNum = useSelector((state) => state.reducerShowMore.numberTickets)
    const [partTickets, setPartTickets] = useState([]);
    const [elements, setElements] = useState([]);

    const tabsFilter = useSelector((state) => state.reducerTabs.filteredTabs);
    const sidebarFilter = useSelector((state) => state.reducer.checkBoxTransfers);
    const dispatch = useDispatch();


    useEffect(() => {
        console.log(tickNum)
        if(ticketsAll.length > 0) {
            setPartTickets([...ticketsAll.slice(0, tickNum)])
        }
    }, [ticketsAll])

    useEffect(() => {
        if (partTickets.length > 0) {
            setElements(partTickets.map((ticket) => <Ticket key={`${ticket.price}${ticket.carrier}`} ticket={ticket}/>
            ))
        }
    }, [partTickets])


    return (
        <div className='ticket-list'>
            {elements}
        </div>
    )
}

export default TicketList;
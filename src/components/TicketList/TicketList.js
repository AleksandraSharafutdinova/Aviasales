import React from "react";
import Ticket from "../Ticket";
import './TicketList.scss';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Warning from "../Warning";


const TicketList = ({load}) => {
    const ticketsAll = useSelector((state) => state.reducerTickets.tick);
    const tickNum = useSelector((state) => state.reducerShowMore.numberTickets)
    const [partTickets, setPartTickets] = useState([]);
    const [elements, setElements] = useState([]);

    const tabsFilter = useSelector((state) => state.reducerTabs.filteredTabs);
    const sidebarFilter = useSelector((state) => state.reducer.checkBoxTransfers);

    useEffect(() => {
        if (ticketsAll.length > 0) {
            setPartTickets(filtrationTabs([...(filtrationSidebar(ticketsAll)).slice(0, tickNum)]))
        }
    }, [ticketsAll, tickNum, tabsFilter, sidebarFilter])

    useEffect(() => {
        if (partTickets.length > 0) {
            setElements(partTickets.map((ticket) => <Ticket key={`${ticket.price}${ticket.carrier}`} ticket={ticket}/>
            ))
        }
    }, [partTickets]);


    const filtrationTabs = (arr) => {
        if (tabsFilter[0].isActive) {
            return arr.sort((a, b) => a.price - b.price)
        } else if (tabsFilter[1].isActive) {
            return arr.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration))
        }
        return arr;
    };

    const filtrationSidebar = (arr) => {
        if (sidebarFilter[0].isChecked) {
            return arr;
        }
        if (sidebarFilter[1].isChecked) {
            return arr.filter(item => item.segments[0].stops.length === 0 || item.segments[1].stops.length === 0)
        }
        if (sidebarFilter[2].isChecked) {
            return arr.filter(item => item.segments[0].stops.length === 1 || item.segments[1].stops.length === 1)
        }
        if (sidebarFilter[3].isChecked) {
            return arr.filter(item => item.segments[0].stops.length === 2 || item.segments[1].stops.length === 2 )
        }
        if (sidebarFilter[4].isChecked) {
            return arr.filter(item => item.segments[0].stops.length === 3 || item.segments[1].stops.length === 3)
        }
        return [];
    }


    if(!partTickets.length && !load) {
        return (
            <Warning/>
        )
    } else {
        return (
            <div className='ticket-list'>
                {elements}
            </div>
        )
    }

}

export default TicketList;
import React, { useEffect, useState, useCallback } from "react";

import Sidebar from "../Sidebar";
import Tabs from "../Tabs";
import TicketList from "../TicketList";
import Spinner from "../Spinner";

import Logo from '../../pictures/Logo.svg';
import './app.scss';



function App () {

    const [searchId, setSearchId] = useState('');
    const [tickets, setTickets] = useState([]);
    const [stop, setStop] = useState(false);
    const [sortedTickets, setSortedTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState({ all: true, without: true, one: true, two: true, three: true});
    const [sorterActive, setSorterActive] = useState({cheapest: true, fastest: false, optimal: false});


    useEffect(() => {
        fetch('https://front-test.dev.aviasales.ru/search')
            .then((res) => res.json())
            .then((res) => {
                setSearchId(res.searchId);
            })
            .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        if (searchId && !stop) {
            function subscribe () {
                setLoading(true)
                fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
                    .then((data) => {
                        if (data.status === 500) {
                            subscribe()
                        } else {
                            return data.json();
                        }
                    })
                    .then((ticketsPart) => {
                        if (ticketsPart.stop) {
                            setStop(true)
                        }
                        setTickets([...tickets, ...ticketsPart.tickets]);
                    })
                    .catch((e) => {
                        console.log(e)
                    });
            }
            subscribe()
            setLoading(false)
        }
    }, [searchId, tickets, stop])


    const allSorter = useCallback(
        (tickets1) => {
            if (sorterActive.cheapest) {
                 return tickets1.sort((a, b) => a.price - b.price)
            }
            if (sorterActive.fastest) {
                return tickets1.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration))

            }
            if (sorterActive.optimal) {
                // const tickCheap = tickets1.sort((a, b) => a.price - b.price);
                // const tickFast = tickets1.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
                // const newArr = [...tickCheap, ...tickFast]
                // return newArr.sort((a,b) => a.price - b.price)
                return tickets1
            }
            return tickets1
        }, [sorterActive]
    )

    const filteredTickets = useCallback((tickArr) => {
        //const myTickets = [...tickArr]
        return tickArr.filter((current) =>{
            if (filter.all) return current;
            if (filter.without && current.segments[0].stops.length === 0 && current.segments[1].stops.length === 0) return true;
            if (filter.one && current.segments[0].stops.length === 1 && current.segments[1].stops.length === 1) return true;
            if (filter.two && current.segments[0].stops.length === 2 && current.segments[1].stops.length === 2) return true;
            if (filter.three && current.segments[0].stops.length === 3 && current.segments[1].stops.length === 3) return true;
            return false
        })
    },
        [filter]
    )

    useEffect(() => {
        if (stop) {
            setSortedTickets(allSorter(filteredTickets([...tickets.slice(0, 5)])))
        }
    }, [stop, tickets, allSorter, setSortedTickets, filteredTickets])

    const showMoreTickets = () => {

    }




    const spinner = loading ? <Spinner /> : null;

    return (
        <div className='app'>
            <div className='wrapper'>
                <header className='header'>
                    <img src={Logo} alt='Логотип: Самолёт' />
                </header>
                <div className='main'>
                    <Sidebar filter={filter} setFilter={setFilter}/>
                    <Tabs  sorterActive={sorterActive} setSorterActive={setSorterActive}/>
                    {spinner}
                    <TicketList sortedTickets={sortedTickets} />
                    <button className='show-more-tickets' onClick={showMoreTickets}>
                        Показать еще 5 билетов
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App;
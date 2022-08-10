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
    //const [filter, setFilter] = useState({ all: false, without: false, one: false, two: false, three: false});
    const [sorterActive, setSorterActive] = useState({cheapest: true, fastest: false, optimal: false})


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

    // useEffect(() => {
    //     if(searchId && !stop) {
    //         async function subscribe() {
    //             let response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`);
    //             //console.log('response.status:', response.status)
    //             if (response.status === 500) {
    //                 await subscribe();
    //             } else if (response.status === 404) {
    //                 console.log('error 404')
    //             } else if (response.status !== 200) {
    //                 await new Promise((resolve) => setTimeout(resolve, 1000));
    //                 await subscribe();
    //             } else {
    //                 let ticketsPart = await response.json();
    //                 setTickets([...tickets, ...ticketsPart.tickets]);
    //                 if (ticketsPart.stop) {
    //                     setStop(true)
    //                 }
    //             }
    //         }
    //         subscribe();
    //     }
    // }, [searchId, tickets, stop]);

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

    useEffect(() => {
        if (stop) {
            setSortedTickets(allSorter([...tickets.slice(0, 5)]))
        }
    }, [stop, tickets, allSorter, setSorterActive])


    const spinner = loading ? <Spinner /> : null;

    return (
        <div className='app'>
            <div className='wrapper'>
                <header className='header'>
                    <img src={Logo} alt='Логотип: Самолёт' />
                </header>
                <div className='main'>
                    <Sidebar />
                    <Tabs  sorterActive={sorterActive} setSorterActive={setSorterActive}/>
                    {spinner}
                    <TicketList sortedTickets={sortedTickets} />
                </div>
            </div>
        </div>
    )
}

export default App;
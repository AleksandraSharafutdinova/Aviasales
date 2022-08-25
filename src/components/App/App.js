import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Tabs from "../Tabs";
import TicketList from "../TicketList";
import Spinner from "../Spinner";
import Logo from '../../pictures/Logo.svg';
import './app.scss';
import {useDispatch, useSelector} from "react-redux";
import {getTicketsAll, getMoreTickets} from "../../actions";


function App () {
    const dispatch = useDispatch();

    const [searchId, setSearchId] = useState('');
    const [tickets, setTickets] = useState([]);
    const [stop, setStop] = useState(false);
    const [load, setLoad] = useState(true);


    useEffect(() => {
        fetch('https://aviasales-test-api.kata.academy/search')
            .then((res) => res.json())
            .then((res) => {
                setSearchId(res.searchId);
            })
            .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        if(searchId && !stop) {
            function getTickets() {
                fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
                    .then(res => {
                        if(res.ok) {
                            return res.json()
                        } else {
                            throw new Error('Что-то пошло не так')
                        }
                    })
                    .then(arr => {
                        setTickets([...tickets, ...arr.tickets])
                        setStop(arr.stop)
                    })
                    .catch((e) => {
                        console.log('Error:' + e.message)
                        getTickets()
                    })
            }
            getTickets()
        }
        if (stop) {

        }
    }, [searchId, tickets, stop])


    useEffect(() => {
        if(stop) {
            setLoad(!load)
            dispatch(getTicketsAll(tickets))
        }
    }, [stop])

    const tickNums = useSelector((state) => state.reducerShowMore.numberTickets)

    const showMoreTickets = () => {
        const newTickNum = tickNums + 5
        dispatch(getMoreTickets(newTickNum))
    }

    const spinner = load ? <Spinner /> : null;


    return (
        <div className='app'>
            <div className='wrapper'>
                <header className='header'>
                    <img src={Logo} alt='Логотип: Самолёт' />
                </header>
                <div className='main'>
                    <Sidebar />
                    <Tabs  />
                    {spinner}
                    <TicketList load={load} />
                    <button className='show-more-tickets' onClick={showMoreTickets}>
                        Показать еще 5 билетов
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App;


import React from "react";
import './tabs.scss';
import {useDispatch, useSelector} from "react-redux";
import { getFilteredTicketsTabs} from '../../actions'


const Tabs = () => {
    const tabsList = useSelector((state) => state.reducerTabs.filteredTabs);
    const dispatch = useDispatch();

    const tabsFilters = [...tabsList].map(({label, id, isActive}) =>{
        let className;

        if (isActive) {
            className = 'tab-element tab-element-clicked'
        } else {
            className = 'tab-element'
        }

        const onClick = () => {
            const newArr = [...tabsList].map((el) => {
                if (el.id === id) {
                    el.isActive = true;
                } else {
                    el.isActive = false;
                }
                return el;
            })
            dispatch(getFilteredTicketsTabs(newArr))
        }

        return (
            <div key={id} className={className} onClick={onClick}>
                {label}
            </div>
        )
    })

    return (
        <div className='tabs'>
            {tabsFilters}
        </div>
    )
}

export default Tabs;
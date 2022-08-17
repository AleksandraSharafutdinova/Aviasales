import React, {useCallback} from "react";

import './tabs.scss';
import {useDispatch, useSelector} from "react-redux";

const Tabs = ({sorterActive, setSorterActive}) => {

    const tabsList = useSelector((state) => state.reducerTabs.filteredTabs);
    const dispatch = useDispatch();
    //console.log(tabsList)



    const sorterHandle = useCallback(
        (sortedButton) => {
            if (sorterActive[sortedButton]) return;
            setSorterActive({ cheapest: !sorterActive['cheapest'], fastest: !sorterActive['fastest'], optimal: !sorterActive['optimal'] })
        }, [setSorterActive, sorterActive]);

    return (
        <div className='tabs'>
            <div className={`tab-element tab-cheapest ${sorterActive.cheapest ? 'tab-element-clicked' : ''} `} onClick={() => sorterHandle('cheapest')}>{tabsList[0].label}</div>
            <div className={`tab-element tab-fastest ${sorterActive.fastest ? 'tab-element-clicked' : ''} `} onClick={() => sorterHandle('fastest')}>{tabsList[1].label}</div>
            <div className={`tab-element tab-optimal ${sorterActive.optimal ? 'tab-element-clicked' : ''} `} onClick={() => sorterHandle('optimal')}>{tabsList[2].label}</div>
        </div>
    )
}

export default Tabs;





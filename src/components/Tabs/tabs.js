import React, {useCallback} from "react";

import './tabs.scss';

const Tabs = ({sorterActive, setSorterActive}) => {

    const sorterHandle = useCallback(
        (sortedButton) => {
            if (sorterActive[sortedButton]) return;
            setSorterActive({ cheapest: !sorterActive['cheapest'], fastest: !sorterActive['fastest'], optimal: !sorterActive['optimal'] })
        }, [setSorterActive, sorterActive]);

    return (
        <div className='tabs'>
            <div className={`tab-element tab-cheapest ${sorterActive.cheapest ? 'tab-element-clicked' : ''} `} onClick={() => sorterHandle('cheapest')}>Самый дешевый</div>
            <div className={`tab-element tab-fastest ${sorterActive.fastest ? 'tab-element-clicked' : ''} `} onClick={() => sorterHandle('fastest')}>Самый быстрый</div>
            <div className={`tab-element tab-optimal ${sorterActive.optimal ? 'tab-element-clicked' : ''} `} onClick={() => sorterHandle('optimal')}>Оптимальный</div>
        </div>
        )
}

export default Tabs;



import React from "react";

import Checker from '../../pictures/Checkbox.svg';
import ChekerOn from '../../pictures/CheckboxOn.svg';
import './sidebar.scss';

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <h3>Количество пересадок</h3>
            <form>
                <label>
                    <input type='checkbox' className='input visually-hidden' />
                    <span className='checker'></span>
                    Все
                </label>
                <label>
                    <input type='checkbox' className='input visually-hidden' />
                    <span className='checker'></span>
                    Без пересадок
                </label>
                <label>
                    <input type='checkbox' className='input visually-hidden' />
                    <span className='checker'></span>
                    1 пересадка
                </label>
                <label>
                    <input type='checkbox' className='input visually-hidden' />
                    <span className='checker'></span>
                    2 пересадки
                </label>
                <label>
                    <input type='checkbox' className='input visually-hidden' />
                    <span className='checker'></span>
                    3 пересадки
                </label>
            </form>
        </div>
    )
}

export default Sidebar;
import React from "react";
import {useDispatch, useSelector} from "react-redux";
//import Checker from '../../pictures/Checkbox.svg';
//import ChekerOn from '../../pictures/CheckboxOn.svg';
import './sidebar.scss';
import {getCheckBoxTransfers} from '../../actions'


const Sidebar = () => {
    let countFilters = 0;
    const checkBoxList = useSelector((state) => state.reducer.checkBoxTransfers);
    const dispatch = useDispatch();

    const filterTransfers = [...checkBoxList].map(({label, id, isChecked}) => {
        if (isChecked) {
            countFilters += 1;
        }

        const onChange = (e) => {
            const newArrFilters = [...checkBoxList];

            if (id === 'all' && isChecked === false) {
                newArrFilters.map((el) => {
                    el.isChecked = true;
                    return el;
                });
            }

            if (id === 'all' && isChecked === true) {
                newArrFilters.map((el) => {
                    el.isChecked = false;
                    return el;
                });
            }

            if (id !== 'all') {
                newArrFilters.map((el) => {
                    if (el.id === id) {
                        el.isChecked = e.target.checked;
                        if (!e.target.checked) {
                            countFilters -= 1;
                        }
                    }
                    if (el.id === 'all') {
                        el.isChecked = false;
                    }
                    return el;
                });
            }

            if (countFilters === 3 && id !== 'all') {
                newArrFilters.map((el) => {
                    el.isChecked = true;
                    return el;
                });
            }
            dispatch(getCheckBoxTransfers(newArrFilters))
        };

        return (
            <label key={id}>
                <input type='checkbox'
                       onChange={onChange}
                       checked={isChecked}
                       className='input visually-hidden' />
                <span className='checker' />
                {label}
            </label>
        )
    })



    return (
        <div className='sidebar'>
            <h3>Количество пересадок</h3>
            <form>
                {filterTransfers}
            </form>
        </div>
    )
}

export default Sidebar;
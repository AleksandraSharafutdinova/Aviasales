import React from "react";

//import Checker from '../../pictures/Checkbox.svg';
//import ChekerOn from '../../pictures/CheckboxOn.svg';
import './sidebar.scss';
import {useDispatch, useSelector} from "react-redux";
import {GET_TRANSFERS} from "../../actions";


const Sidebar = ({filter, setFilter}) => {
    const checkBoxList = useSelector((state) => state.reducer.checkBoxTransfers);
    const dispatch = useDispatch();
    //console.log(checkBoxList)

    const onTrying = () => {
        const newData = checkBoxList.map((el) => ({
             ...el, isChecked: !isChecked
        }))
        return dispatch({type: GET_TRANSFERS, payload: newData})
    }
    console.log(checkBoxList)





    const allHandler = (filt) => {
        let tempFilter = {...filter};
        tempFilter[filt] = !tempFilter[filt]
        if (filt === 'all') {
            tempFilter = Object.fromEntries(Object.keys(tempFilter).map((current) => {
                return [current, tempFilter[filt]]
            }));

        } else {
            if (Object.keys(tempFilter).some((key) => tempFilter[key] === false)) {
                tempFilter['all'] = false
            }
            if (Object.keys(tempFilter).every((key) => {
                if(key === 'all') return true;
                return tempFilter[key] === true})) {
                tempFilter['all'] = true
            }
        }

        setFilter({...tempFilter})
    }

    return (
        <div className='sidebar'>
            <h3>Количество пересадок</h3>
            <form>
                <label>
                    <input type='checkbox'
                           className='input visually-hidden'
                           onChange={() => allHandler('all')}
                           checked={filter.all}/>
                    <span className='checker' />
                    Все
                </label>
                <label>
                    <input type='checkbox'
                           className='input visually-hidden'
                           onChange={() => allHandler('without')}
                           checked={filter.without}
                           onClick={onTrying}/>
                    <span className='checker' />
                    Без пересадок
                </label>
                <label>
                    <input type='checkbox'
                           className='input visually-hidden'
                           onChange={() => allHandler('one')}
                           checked={filter.one}/>
                    <span className='checker' />
                    1 пересадка
                </label>
                <label>
                    <input type='checkbox'
                           className='input visually-hidden'
                           onChange={() => allHandler('two')}
                           checked={filter.two}/>
                    <span className='checker' />
                    2 пересадки
                </label>
                <label>
                    <input type='checkbox'
                           className='input visually-hidden'
                           onChange={() => allHandler('three')}
                           checked={filter.three}/>
                    <span className='checker' />
                    3 пересадки
                </label>
            </form>
        </div>
    )
}

export default Sidebar;
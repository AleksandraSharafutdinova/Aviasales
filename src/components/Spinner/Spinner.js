import React from "react";
import { Circles } from 'react-loader-spinner';
import './Spinner.scss';

const Spinner = () => {

    return (
        <div className='spinner'>
            <Circles color="#00BFFF" height={80} width={80} />
        </div>
    )
}

export default Spinner;
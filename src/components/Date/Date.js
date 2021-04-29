import React from 'react';

import './Date.css';

/*
* Props:
* year: year
*/

export default function Date(props) {

    return (
        <div className='Date'>
            <div className='DateContainer'>
                {props.year}
            </div>
        </div>
    );
};
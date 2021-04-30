import React from 'react';

import NavBar from '../NavBar/NavBar';

import './Header.css';

export default function Header() {

    return (
        <div className={'Header'}>
            <div className='HeaderText'>
                <div className='HeaderTitle'>The Great Depression</div>
                <div className='HeaderSubtitle'><div>A website by Tyler Casper and Geoffrey Xue</div></div>
            </div>
            <NavBar />
        </div>
    );
};
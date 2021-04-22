import React from 'react';

import NavBar from '../NavBar/NavBar';

import './Header.css';

export default function Header() {

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
        });
    }, []);

    return (
        <div className={'Header'}>
            <div className='HeaderText'>
                <div className='HeaderTitle'>The Great Depression</div>
                <div className='HeaderSubtitle'>A website by Tyler Casper and Geoffrey Xue</div>
            </div>
            <NavBar />
        </div>
    );
};
import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import Home from './views/Home/Home';
import Fiscal from './views/Fiscal/Fiscal';
import Monetary from './views/Monetary/Monetary';
import Links from './views/Links/Links';
import Header from './components/Header/Header';

import './routes.css';

export default function Routes() {

    return (
        <div className='main'>
            <Header />
            <div className='content'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Fiscal" component={Fiscal} />
                    <Route path="/Monetary" component={Monetary} />
                    <Route path="/Links" component={Links} />
                </Switch>
            </div>
        </div>
    );
};
import React from 'react';
import Home from './views/Home/Home';
import Fiscal from './views/Fiscal/Fiscal';
import Monetary from './views/Monetary/Monetary';
import Links from './views/Links/Links';
import Header from './components/Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import './routes.css';

export const Routes = () => {
    return (
        <div className='main'>
            <Header />
            <div className='content'>
                <Switch>
                    <Route exact path="/great-depression/">
                        <Redirect to="/great-depression/Home" />
                    </Route>
                    <Route exact path="/great-depression/Home" component={Home} />
                    <Route exact path="/great-depression/Fiscal" component={Fiscal} />
                    <Route exact path="/great-depression/Monetary" component={Monetary} />
                    <Route exact path="/great-depression/Links" component={Links} />
                </Switch>
            </div>
        </div>
    );
};
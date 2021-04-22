import React from 'react';
import Home from './views/Home/Home';
import Fiscal from './views/Fiscal/Fiscal';
import Monetary from './views/Monetary/Monetary';
import Header from './components/Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import './routes.css';

export const Routes = () => {
    return (
        <div className='main'>
            <Header />
            <div className='content'>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/great-depression/Home" />
                    </Route>
                    <Route exact path="/great-depression/Home" component={Home} />
                    <Route exact path="/great-depression/Fiscal" component={Fiscal} />
                    <Route exact path="/great-depression/Monetary" component={Monetary} />
                </Switch>
            </div>
        </div>
    );
};
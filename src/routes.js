import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import Home from './views/Home/Home';
import Fiscal from './views/Fiscal/Fiscal';
import Monetary from './views/Monetary/Monetary';
import Links from './views/Links/Links';
import Header from './components/Header/Header';

import './routes.css';

export default function Routes() {
    const [headerStyle, setHeaderStyle] = React.useState('');

    const handleScroll = () => {
        console.log(window.scrollY);
        let style = '';
        if (window.scrollY > 120) {
            style = 'Scrolled';
        }
            setHeaderStyle(style);
    }
    window.addEventListener('scroll', handleScroll);
    return (
        <div className='main'>
            <ScrollToTop />
            <div className={headerStyle}>
                <Header  />
            </div>
            <div className={headerStyle.length !== 0 ? 'Pad' : 'noPad'}/>
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

function ScrollToTop() {
    const { pathname } = useLocation();
  
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
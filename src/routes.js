import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Cabinets from './components/cabinets/cabinets'

export default (
        <Switch>
            <Route component = {Home} exact path= '/' />
            <Route component = {Cabinets} path= '/cabinets' />
        </Switch>
)
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './components/home/home';

export default (
    <Switch>
        <Route component = {home} exact path= '/'/>

    </Switch>
)
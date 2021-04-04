import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/home';
import Loading from './components/Loading';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/pageHome' component={Home} />
                <Route path='/loading' component={Loading} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
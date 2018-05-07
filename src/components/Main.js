import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Journal from './Journal';

const Main = () => {
    return(
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/journal' component={Journal}/>
            </Switch>
        </main>
    )
}

export default Main;
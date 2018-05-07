import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JournalList from './JournalList';


const Journal = () => {
    return(
       
        <Switch>
            <Route exact path="/journal" component={JournalList}/>
        </Switch>

    )
}

export default Journal;
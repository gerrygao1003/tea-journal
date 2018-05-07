import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JournalList from './JournalList';
import JournalDetails from './JournalDetails';
import JournalData from '../JournalData';

const Journal = () => {
    return(
        
        <Switch>
            <Route exact path="/journal" component={JournalList}/>
            <Route exact path="/journal/:id" 
                render={(props) => 
                    <JournalDetails 
                        {...props}
                        journalData={JournalData}
                    />
                }/>
        </Switch>

    )
}

export default Journal;
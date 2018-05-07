import React from 'react';
import JournalData from '../JournalData';
import {Link} from 'react-router-dom';

const JournalList = () => {
    console.log(JournalData);
    return(
        <div>
            <ul>

                {
                    JournalData.map(item =>(
                        <li key={item.id}>
                            <Link to={`journal/${item.id}`}>{item.title}</Link>
                        </li>
                    )) 
                }

            </ul>
        </div>
    )
}

export default JournalList;
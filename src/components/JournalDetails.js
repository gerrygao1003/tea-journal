import React from 'react';


class JournalDetails extends React.Component {
    render(){
        var id = parseInt(this.props.match.params.id, 10);
        var details = this.props.journalData[id - 1];
        // TODO: 
        return(
            <div>
                <ul>
                    <li>Name: {details.name}</li>
                    <li>Time: {details.time}</li>
                    <li>Catgory: {details.category}</li>
                    <li>Note: {details.note}</li>
                    <li>Rating: {details.rate}</li>
                    <li>Brew Time: {details.brewTime}</li>
                    <li>Brew Number: {details.brewNumber}</li>
                </ul>
            </div>
            
        )
    }
}

export default JournalDetails;
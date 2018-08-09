import React, { Component } from 'react';

class JournalList extends Component {
  
  handlSubmit = () => {
    this.props.changeDisplay("NewJournal");
  };

  displayJournals =  
      this.props.localJournals.map((journal, index) => {
        console.log(journal.teaType);
        return(
        
        <li key={index}>
          <h1>{journal.teaName}</h1>
          <h6>{journal.teaType}</h6>
        </li>
        )
      }
    );
  

  render() {
    return (
      <div>
        <ul>
          {this.displayJournals}
        </ul>
        <button onClick={this.handlSubmit}>New Journal!</button>
      </div>
    )
  }

//   return <ul>
//   {friends.map(p => <li key={p.id}>{p.name}</li>)}
// </ul>;
}

export default JournalList;
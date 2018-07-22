import React, { Component } from 'react';

class JournalList extends Component {
  
  handlSubmit = () => {
    this.props.changeDisplay("NewJournal");
  };

  render() {
    return (
      <div>
        <ul>
          <li>HELLO</li>
        </ul>
        <button onClick={this.handlSubmit}>New Journal!</button>
      </div>
    )
  }
}

export default JournalList;
import React, { Component } from 'react';
import './App.css';
import JournalForm from './JournalForm';
import JournalList from './JournalList';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      display: "JournalList",
      teaInfo: {}
    };
  }

  componentDidMount() {
    console.log("mounting");
    const Journals = {};
    localStorage.setItem('Journals', JSON.stringify(Journals));
  }

  handleDisplay = () => {
    switch(this.state.display) {
      case "JournalList":
        return <JournalList changeDisplay={this.changeDisplay}/>;
      case "NewJournal":
        return <JournalForm changeDisplay={this.changeDisplay}/>;
      default:
        return <JournalList changeDisplay={this.changeDisplay}/>;
    }
  }

  changeDisplay = (pageName) => {
    this.setState({
      display: pageName
    });
  }

  render() {
    return (
      <div>
        {this.handleDisplay()}
      </div>
    );
  }
}

export default App;

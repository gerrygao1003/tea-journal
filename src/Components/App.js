import React, { Component } from 'react';
import './App.css';
import JournalForm from './JournalForm';
import JournalList from './JournalList';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      display: "JournalList",
      teaInfo: {},
      localJournals: []
    };
  }

  componentWillMount() {
    console.log("mounting");
    let tempJournals = [];

    if(localStorage.getItem("journals") != null){
      tempJournals = JSON.parse(localStorage.getItem("journals"));
      console.log(tempJournals);
      this.setState({
        localJournals: tempJournals
      })

    }

      localStorage.setItem("journals", JSON.stringify(tempJournals));

  }

  handleDisplay = () => {
    switch(this.state.display) {
      case "JournalList":
        return <JournalList changeDisplay={this.changeDisplay } localJournals = {this.state.localJournals}/>;
      case "NewJournal":
        return <JournalForm changeDisplay = {this.changeDisplay} 
                            localJournals = {this.state.localJournals}
                            addJournal = {this.addJournal}/>;
      default:
        return <JournalList changeDisplay={this.changeDisplay} localJournals = {this.state.localJournals}/>;
    }
  }

  addJournal = (item)=>{
    var temp = this.state.localJournals;
    temp.push(item);
    this.setState({localJournals: temp});
    localStorage.setItem("journals", JSON.stringify(this.state.localJournals));

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

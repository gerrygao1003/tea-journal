import React, { Component } from 'react';

class JournalForm extends Component {
  constructor(){
    super();
    this.state = {
      teaName: '',
      teaType: '',
      teaOrigin: '',
      brewTime: '',
      flavorNotes: '',
      purchasedFrom: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addJournal(this.state);
    this.props.changeDisplay("JournalList");



  }

  handleChange = (e) => {
    let newJournal = {};
    newJournal[e.target.name] = e.target.value;
    // console.log(newJournal);
    this.setState(newJournal);
    // console.log(this.state);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          <input placeholder="Tea Name" type="text" name="teaName" onChange={this.handleChange} value={this.state.teaName}/>
          <input placeholder="Tea Type" type="text" name="teaType" onChange={this.handleChange} value={this.state.teaType}/>
          <input placeholder="Tea Origin" type="text" name="teaOrigin" onChange={this.handleChange} value={this.state.teaOrigin}/>
          <input placeholder="Brew Time" type="text" name="brewTime" onChange={this.handleChange} value={this.state.brewTime}/>
          <input placeholder="Flavor Notes" type="text" name="flavorNotes" onChange={this.handleChange} value={this.state.flavorNotes}/>
          <input placeholder="Purchased From" type="text" name="purchasedFrom" onChange={this.handleChange} value={this.state.purchasedFrom}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default JournalForm;
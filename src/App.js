import React, { Component } from 'react';
import ListContacts from './ListContacts';


class App extends Component {

  state = {
    contacts: [
      {
      "id": "karen",
      "name": "Karen Isgrigg",
      "handle": "karen_isgrigg",
      "avatarURL": "http://localhost:5001/karen.jpg"
    },
    {
      "id": "richard",
      "name": "Richard Kalehoff",
      "handle": "richardkalehoff",
      "avatarURL": "http://localhost:5001/richard.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "handle": "tylermcginnis",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
    ]
  }

 removeContact = (contact) =>{
   this.setState((currentState)=>({
     contacts: currentState.contacts.filter((c)=>{
       return contact.id !== c.id;
     })
   }))
 }

  render() {
    return (
      <div className="App">
        {/* contacts is a prop and contact is the list  and {} around comments is nothing dont worry about them they are not part of syntax */}
        <ListContacts contacts={this.state.contacts} 
        onDeleteContact={this.removeContact} />
      </div>
    );
  }
}

export default App;

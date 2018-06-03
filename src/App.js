import React, { Component } from 'react';
import ListContacts from './ListContacts';
// import logo from './logo.svg';


// class ContactList extends React.Component{
//   render(){
//     const people = this.props.contacts
//     return (<ol>
//       {
//         people.map((person)=>(
//           <li key={person.name}>{person.name}</li>
//         ))
//       }
//     </ol>
//     )
//   }
// }
const contact = [
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
];


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* contacts is a prop and contact is the list  and {} around comments is nothing dont worry about them they are not part of syntax */}
        <ListContacts contacts={contact} />
      </div>
    );
  }
}

export default App;

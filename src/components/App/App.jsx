import { nanoid } from 'nanoid'
import { useState, useEffect } from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Container, InnerContainer, Title } from './App.styled';

const LS_KEY = "contact_item_id";

export function App  () {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  });  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  },[contacts]);
  
  const addContact = (name, number) => {
  const kontakt = {
      id: nanoid(),
      name,
      number,
    }

      if (contacts.find((contact) => contact.name.toLocaleLowerCase() === kontakt.name.toLocaleLowerCase())) {
      alert(`${kontakt.name} is already in contacts.`);
      return;
    }

    setContacts((prevContacts) => [kontakt,...prevContacts])
  }

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(
        (contact) => contact.id !== contactId
      ),
    );
  };
  
  const onFilterSearch = event => {
    setFilter(event.currentTarget.value)
  };

  const getFilteredList = () => {
    const normaliseCase = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normaliseCase))
  }


    return (
      <Container>
        <InnerContainer>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={addContact} />
        </InnerContainer>
        <InnerContainer>
          <Title>Contacts</Title>
          <Filter value={filter} onChange={onFilterSearch } />
          <ContactList contacts={getFilteredList()} onDeleteContact={deleteContact} />
        </InnerContainer>
      </Container>
    )
};


//==================================WAS==========================================//

// import { nanoid } from 'nanoid'
// import { Component } from "react";
// import { ContactForm } from "components/ContactForm/ContactForm";
// import { Filter } from "components/Filter/Filter";
// import { ContactList } from "components/ContactList/ContactList";
// import { Container, InnerContainer, Title } from './App.styled';

// const LS_KEY = "contact_item_id";

// export class App extends Component  {
//   state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: '',
//   }

//   componentDidMount() {
//     const kontaktId = localStorage.getItem(LS_KEY)
//     if (kontaktId !== null) {
//       this.setState({
//         contacts: JSON.parse(kontaktId)
//       })
//     }
//   }
  
//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contactId) {
//       localStorage.setItem(LS_KEY, JSON.stringify(contacts))
//     }
//   }
  

//   addContact = (name, number) => {
//   const { contacts } = this.state;
//   const kontakt = {
//       id: nanoid(),
//       name,
//       number,
//     }

//       if (contacts.find((contact) => contact.name.toLocaleLowerCase() === kontakt.name.toLocaleLowerCase())) {
//       alert(`${kontakt.name} is already in contacts.`);
//       return;
//     }

//     this.setState(({contacts}) => ({
//       contacts: [kontakt,...contacts]
//     }))
//   }

//   deleteContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactId
//       ),
//     }));
//   };
  
//   onFilterSearch=event=>{
//     this.setState({filter: event.currentTarget.value })
//   }

//   getFilteredList = () => {
//     const { filter, contacts } = this.state;
//     const normaliseCase = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normaliseCase))
//   }

//   render() {
//     const { filter } = this.state;
//     const filterContact = this.getFilteredList();

//     return (
//       <Container>
//         <InnerContainer>
//           <h1>Phonebook</h1>
//           <ContactForm onSubmit={this.addContact} />
//         </InnerContainer>
//         <InnerContainer>
//           <Title>Contacts</Title>
//           <Filter value={filter} onChange={this.onFilterSearch } />
//           <ContactList contacts={filterContact} onDeleteContact={this.deleteContact} />
//         </InnerContainer>
//       </Container>
//     )
//   }
// };

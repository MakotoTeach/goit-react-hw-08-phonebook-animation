import React, { Component } from "react";
import { uuid } from "uuidv4";
import ContactList from "./ContactList";
import AddContactForm from "./AddContactForm/AddContactForm";
import Filter from "./Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  componentDidMount() {
    const contactsLS = localStorage.getItem("contacts");

    if (contactsLS) {
      this.setState({
        contacts: JSON.parse(contactsLS)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (prevState.contacts !== this.state.cotacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  addContact = (name, number) => {
    const isExist = this.state.contacts.find(contact => contact.name === name);

    const contact = {
      id: uuid(),
      name,
      number
    };

    if (isExist) {
      alert(`contact with name ${name} is allready exist`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact]
        };
      });
    }
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId)
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length > 2 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}

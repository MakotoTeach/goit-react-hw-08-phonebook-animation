import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { Notification, Layout } from '../../components';
import { ContactList, AddContactForm, Filter } from './components';
import { uuid } from "uuidv4";
import ContactsStyles from "./Contacts.module.css";

export class Contacts extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: "",
    contactExist: null
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
      this.setState({
        contactExist: Boolean(isExist)
      });
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

  removeNotification = () => {
    this.setState({ contactExist: false });
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
    const { filter, contacts, contactExist } = this.state;

    return (
      <Layout>
      <Notification show={contactExist} remove={this.removeNotification}>
        <p>Contact already exist!</p>
      </Notification>
      <AddContactForm onAddContact={this.addContact} />
      <CSSTransition
        in={contacts.length >= 2}
        classNames={ContactsStyles}
        timeout={250}
        unmountOnExit
      >
        <Filter value={filter} onChangeFilter={this.changeFilter} />
      </CSSTransition>
      {/* {visibleContacts.length > 0 && (
  <ContactList
    contacts={visibleContacts}
    onRemoveContact={this.removeContact}
  />
)} */}
      <ContactList contacts={this.getVisibleContacts()} onRemoveContact={this.removeContact} />
    </Layout>
    )
  }
}
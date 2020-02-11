import React from "react";
import PropTypes from 'prop-types';
import ContactListItem from "./ContactListItem/ContactListItem";

function ContactList({ contacts, onRemoveContact}) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number}  onRemove={()=> onRemoveContact(id)}/>
      ))}
    </ul>
  );
}


ContactList.propTypes ={
  contacts:PropTypes.arrayOf(
    PropTypes.exact({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      number:PropTypes.string.isRequired
    }).isRequired,
  ),
  onRemoveContact:PropTypes.func.isRequired
}


export default ContactList;

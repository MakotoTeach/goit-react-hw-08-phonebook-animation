import React from "react";
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css'

function ContactListItem({ name, number, onRemove }) {
  return (
    <li className={styles.listItem}>
      <p>{name}:</p>
      <p>{number}</p>
      <button className={styles.listItemBtn}type="button" onClick={onRemove}>Delete</button>
    </li>
  );
}

ContactListItem.propTypes = {
  name:PropTypes.string.isRequired,
  number:PropTypes.string.isRequired,
  onRemove:PropTypes.func.isRequired
}

export default ContactListItem;

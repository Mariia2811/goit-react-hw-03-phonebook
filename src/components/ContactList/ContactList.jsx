import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.container}>
      {contacts.map((contact) => (
        <li className={styles.listItem} key={contact.id}>
          <span className={styles.name}>{contact.name} - {contact.number}</span>
          <button className={styles.button} onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

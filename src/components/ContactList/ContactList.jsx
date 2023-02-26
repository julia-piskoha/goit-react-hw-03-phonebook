import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ name, number, id }) => (
    <li className={css.contacts_item} key={id}>
      {name}: {number}
      <button
        className={css.btn_delete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        DELETE
      </button>
    </li>
  ));
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

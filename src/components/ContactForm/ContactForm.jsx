import React from 'react';
import css from './Phonebook.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    const targetInput = event.currentTarget;
    this.setState({ [targetInput.name]: targetInput.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={css.phonebook_label} htmlFor="name">
          Name
          <input
            onChange={this.handleInputChange}
            className={css.phonebook_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
          />
        </label>
        <label className={css.phonebook_label} htmlFor="number">
          Number
          <input
            onChange={this.handleInputChange}
            className={css.phonebook_input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
        </label>
        <button type="submit" className={css.btn_submit}>
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;

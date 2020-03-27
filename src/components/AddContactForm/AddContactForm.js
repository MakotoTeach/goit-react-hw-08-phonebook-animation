import React, { Component } from "react";
import styles from "./AddContactForm.module.css";

export default class AddContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.submitForm} onSubmit={this.handleSubmit}>
        <label className={styles.formLabel}>
          Name
          <input
            autoComplete="off"
            className={styles.formInput}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.formLabel}>
          Number
          <input
            autoComplete="off"
            className={styles.formInput}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

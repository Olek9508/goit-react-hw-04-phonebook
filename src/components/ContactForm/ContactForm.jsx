import PropTypes from 'prop-types';
import { Component } from "react";
import { BtnSubmit, Form, Label, Input } from "./ContactForm.styled";

export class ContactForm extends Component{
  state = {
  name: '',
  number: '',
  }

    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  onSearchByInputValue = event => {
    const {name, value} = event.currentTarget
    this.setState({ [name]:value })
  }

  onContactAdd = event => {
    event.preventDefault();
    const { name, number } = this.state
    this.props.onSubmit(name, number)
    this.setState({ name: "", number: "" })
  }

  render() {
    return (
    <div>
      <Form onSubmit={this.onContactAdd}>
        <Label>
          Name
        <Input
          type="text"
          name="name"
          value={this.state.name}
          onChange = {this.onSearchByInputValue}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
        </Label>
        <Label >
          Number
        <Input
          type="tel"
          name="number"
          value={this.state.number}
          onChange = {this.onSearchByInputValue}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
          </Label>
          <BtnSubmit type="submit">Add contact</BtnSubmit>
      </Form>
    </div>
    )
  }
}


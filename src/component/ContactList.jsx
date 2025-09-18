import React, { Component } from 'react'
import ContactCard from './ContactCard'

export class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>Contact List</h1> <hr />
        {
            this.props.contacts.map(contact=>
                <ContactCard contact={contact} />
            )
        }
        
      </div>
    )
  }
}

export default ContactList

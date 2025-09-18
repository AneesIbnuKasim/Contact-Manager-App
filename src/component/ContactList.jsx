import React, { Component } from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

export class ContactList extends Component {
  render() {
    return (
      <div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1>Contact List</h1> 
        <button style={{height:'50px' ,backgroundColor:'#24A0ED', borderRadius:'10px', padding:'3px 15px', fontSize:'20px', border:'none', boxShadow:'10px black',
            cursor:'pointer', boxShadow:'0 10px 10px rgba(8, 27, 30, 0.5)'
        }}><Link to={'/add-contact'} style={{color:'white'}}>Add Contacts</Link></button>
        </div>
         <hr />
        
        {
            this.props.contacts.map(contact=>
                <ContactCard contact={contact} key={contact.id} />
            )
        }
      </div>
    )
  }
}

export default ContactList

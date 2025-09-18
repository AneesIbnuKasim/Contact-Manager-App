import React from 'react'
import { Link } from 'react-router-dom';
import './contactCard.css'

function ContactCard(props) {
    console.log('card:',props);
    const {id, name, email} = props.contact
    
  return (
    <div className='container'>
      <div className="contact-card">
      <img src="../../public/images/contact.jpg" alt="" />
        <div className='info'>
        
        <h1>{name}</h1>
        <Link to={`/contact-details/${id}`}><p>{email}</p></Link>
        </div>
        <Link className='delete' to={`/delete/${id}`}><img src="../../public/images/delete-blue.jpg" alt="" /></Link>
      </div>
    </div>
  )
}

export default ContactCard

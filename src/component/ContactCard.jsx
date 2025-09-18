import React from 'react'
import { Link } from 'react-router-dom';
import './contactCard.css'

function ContactCard(props) {
    const {id, name, email} = props.contact
    
    const {deleteHandler} = props
    
  return (
    <div className='container'>
      <div className="contact-card">
      <img className='image' src="../../public/images/contact.jpg" alt="" />
        <div className='info'>
        
        <h1>{name}</h1>
        <Link to={`/contact-details/${id}`} 
  state={{ contact: props.contact }} ><p>{email}</p></Link>
        </div>
        <img onClick={()=>deleteHandler(id)} className='delete image' src="../../public/images/delete-blue.jpg" alt="" />
      </div>
    </div>
  )
}

export default ContactCard

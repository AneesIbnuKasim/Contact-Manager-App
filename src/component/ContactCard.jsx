import React from 'react'
import { Link } from 'react-router-dom';
import './contactCard.css'
import { FaEdit } from "react-icons/fa";

function ContactCard(props) {
    const {id, name, email} = props.contact
    
    const {deleteHandler} = props
    
  return (
    <div className='container'>
      <div className="contact-card">
      <img className='image' src="/images/contact.jpg" alt="" />
        <div className='info'>
        
        <h1>{name}</h1>
        <Link to={`/contact-details/${id}`} 
  state={{ contact: props.contact }} ><p>{email}</p></Link>
        </div>
        <div className="delete icon-container">
        <Link to={`/edit-contact/${id}`} state={{ contact: props.contact }}><i className='icon' > <FaEdit size={50} color="green" /></i></Link>
        <img onClick={()=>deleteHandler(id)} className=' image' src="../../public/images/delete-blue.jpg" alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default ContactCard

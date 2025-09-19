import React, { useState } from 'react'
import './addContacts.css'
import ContactList from './ContactList'
import { useLocation } from 'react-router-dom'


function EditContacts(props) {
    const location = useLocation()
    const {id, name, email} = location.state.contact
    const [contact, setContact] = useState({id,name,email})
    
    const update = (e)=>{
        e.preventDefault()
        
        if(contact.name ==='' || contact.email =='') {
            alert('All fields are mandatory') 
            return
        }
            props.editFunction(contact)
        setContact({name:'',email:''})
    }
  return (
    
     <>
      <form action="">
        <div className='form-container'>
      <label htmlFor="name">Name</label>
      <input value={contact.name} onChange={(e)=>setContact({...contact,name:e.target.value})} placeholder='name' type="text" />
      <label htmlFor="email">Email</label>
      <input value={contact.email} onChange={(e)=>setContact({...contact,email:e.target.value})} placeholder='email' type="text" />
      <button onClick={(e)=>update(e)} className='add-btn'>Update Contact</button>
      </div>
      </form>

     </>
    
  )
}

export default EditContacts

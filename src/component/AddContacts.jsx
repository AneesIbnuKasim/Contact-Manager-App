import React, { useState } from 'react'
import './addContacts.css'
import ContactList from './ContactList'


function AddContacts(props) {

    const [contact, setContact] = useState({name:'',email:''})
    
    const handleClick = (e)=>{
        e.preventDefault()
        
        
        if(contact.name ==='' || contact.email =='') {
            alert('All fields are mandatory') 
            return
        }
            props.addFunction(contact)
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
      <button onClick={(e)=>handleClick(e)} className='add-btn'>Add Contact</button>
      </div>
      </form>

     </>
    
  )
}

export default AddContacts

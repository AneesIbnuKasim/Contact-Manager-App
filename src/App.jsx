import { useEffect, useState } from 'react'
import ContactList from './component/ContactList'
import { Route, Routes } from 'react-router-dom'
import AddContacts from './component/AddContacts'
import { v4 as uuid } from 'uuid';

function App() {

const LOCAL_STORAGE_KEY = 'contacts'

const [contacts, setContacts] = useState(()=>{
  const contact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  return contact ? contact : []

}
  )

const addContact = (contact)=>{
  setContacts([...contacts, {id:uuid(), ...contact}])  
}

const deleteContact = (id)=>{
  const filteredContact = contacts.filter(contact=>id!=contact.id)
  setContacts(filteredContact)
}



useEffect(()=>{
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(retriveContacts) {
    setContacts(retriveContacts)
  }
},[])

useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
},[contacts])


  return (

    
    <>
    <AddContacts addFunction={addContact}/>
    <ContactList contacts={contacts} deleteHandler={deleteContact}/>


      {/* <Routes>
        <Route path='/' element={<ContactList contacts={contacts}  />}></Route>
        <Route path='/add-contact' element={<AddContacts addFunction={addContact}/>} ></Route>
      </Routes> */}
    </>
  )
}

export default App

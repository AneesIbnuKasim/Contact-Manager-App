import { useEffect, useState } from 'react'
import ContactList from './component/ContactList'
import { Route, Routes } from 'react-router-dom'
import AddContacts from './component/AddContacts'

function App() {
  const contact = [{
    id: '1',
    name: 'name1',
    email: 'email1'
  },{
    id: '2',
    name: 'name2',
    email: 'email2'
  }
]

const LOCAL_STORAGE_KEY = 'contacts'

const [contacts, setContacts] = useState(()=>{
  const contact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  return contact ? contact : []

}
  )

const addContact = (contact)=>{
  console.log('contact');
  setContacts([...contacts, contact])  
}





useEffect(()=>{
  console.log('first get');
  
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(retriveContacts) {
    setContacts(retriveContacts)
  }
},[])

useEffect(()=>{
  console.log('contacts:',contacts);
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
},[contacts])


  return (

    
    <>
    <AddContacts addFunction={addContact}/>
    <ContactList contacts={contacts}/>


      {/* <Routes>
        <Route path='/' element={<ContactList contacts={contacts}  />}></Route>
        <Route path='/add-contact' element={<AddContacts addFunction={addContact}/>} ></Route>
      </Routes> */}
    </>
  )
}

export default App

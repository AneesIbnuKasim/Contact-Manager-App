import { useEffect, useState } from 'react'
import ContactList from './component/ContactList'
import { Route, Routes , useNavigate} from 'react-router-dom'
import AddContacts from './component/AddContacts'
import { v4 as uuid } from 'uuid';
import ContactDetail from './component/ContactDetail';
import api from './axios/axiosConfig';
import EditContacts from './component/EditContacts';


function App() {

const LOCAL_STORAGE_KEY = 'contacts'
const navigate = useNavigate()

const [contacts, setContacts] = useState(()=>{
  const contact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  return contact ? contact : []

}
  )

//retrive contacts
const retriveContact = async()=>{
  try {
    const response = await api.get('/contacts')
  return response.data
    
  } catch (error) {
    console.log(error.message);
  }
}

const addContact = async(contact)=>{
  try {
    const request = 
      {
        id:uuid(), 
      ...contact
      }
  const response = await api.post('/contacts',request)
  // setContacts([...contacts, {id:uuid(), ...contact}]) 
  setContacts([...contacts, response.data]) 
  navigate('/')
  } catch (error) {
    console.log(error.message);
  }
}
const editContact = async(contact)=>{
  try {
  const response = await api.put(`/contacts/${contact.id}`,contact)
  const {id} = response?.data
  console.log('reponse.data',response.data);
  
  if(id) {
    const updatedContact = contacts.map(contact=>{
      return contact.id === id ?  response.data: contact
    })
    console.log('updated',updatedContact);
    setContacts(updatedContact)
    navigate('/')
  }
  
  // setContacts([...contacts, {id:uuid(), ...contact}]) 
  // setContacts([...contacts, response.data]) 
  // navigate('/')
  } catch (error) {
    console.log(error.message);
  }
}

const deleteContact = async(id)=>{
  try {
    await api.delete(`/contacts/${id}`)
  const filteredContact = contacts.filter(contact=>id!=contact.id)
  setContacts(filteredContact)
  } catch (error) {
    console.log(error.message);
  }
}



useEffect(()=>{

  // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  // if(retriveContacts) {
  //   setContacts(retriveContacts)
  // }
  const getAllContacts = async()=>{
    const newList = await retriveContact()
    if(newList) setContacts(newList)
      return
  }
getAllContacts()
},[])

useEffect(()=>{
    // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
},[contacts])


  return (

    
    <>
    {/* <AddContacts addFunction={addContact}/>
    <ContactList contacts={contacts} deleteHandler={deleteContact}/> */}


      <Routes>
        <Route path='/' element={<ContactList contacts={contacts} deleteHandler={deleteContact}  />}></Route>
        <Route path='/add-contact' element={<AddContacts addFunction={addContact}/>} ></Route>
        <Route path='/edit-contact/:id' element={<EditContacts editFunction={editContact}/>} ></Route>
        <Route path='contact-details/:id' element={<ContactDetail/>}></Route>
      </Routes>
    </>
  )
}

export default App

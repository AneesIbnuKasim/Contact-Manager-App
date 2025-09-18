import { useState } from 'react'
import ContactList from './component/ContactList'

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

  return (

    
    <>
      <ContactList contacts={contact}/>
    </>
  )
}

export default App

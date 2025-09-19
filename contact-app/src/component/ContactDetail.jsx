import React from 'react'
import user from '../../public/images/contact.jpg'
import { Link, useLocation, useParams } from 'react-router-dom'

function ContactDetail(props) {
  const {id} = useParams()
  const location = useLocation()
  const { contact } = location.state || {};
  
  return (
    <div style={{   padding:'10px',}}>
      <div style={{display:'flex',margin:'auto', flexDirection:'column',border:'1px solid',width:'40%',justifyContent:'center',
      padding:'30px',
        alignItems:'center'
      }}>

             <img style={{width:'150px'}}  src={user} alt="" />
          <h1 >{contact?.name}</h1>
          <h3>{contact?.email}</h3>
          <Link to={'/'}><button style={{background:'#007bff',color:'white',padding:'10px', border:'none', borderRadius:'10px',cursor:'pointer'}}>Back to List</button></Link>
       
      </div>
    </div>
  )
}

export default ContactDetail

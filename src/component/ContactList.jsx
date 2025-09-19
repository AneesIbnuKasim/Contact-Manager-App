import React, { Component } from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";


export class ContactList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchInput:''
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchInput!==this.state.searchInput)
    {this.props.searchHandler(this.state.searchInput)}
  }

  render() {
    return (
      <div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1>Contact List</h1> 
        <button style={{height:'50px' ,backgroundColor:'#24A0ED', borderRadius:'10px', padding:'3px 15px', fontSize:'20px', border:'none', boxShadow:'10px black',
            cursor:'pointer', boxShadow:'0 10px 10px rgba(8, 27, 30, 0.5)'
        }}><Link to={'/add-contact'} style={{color:'white'}}>Add Contacts</Link></button>
        </div>
        {this.props.contacts.length >0 ? ( 
          <>
  <div style={{position:'relative',width:'30%'
        }}>
        <input value={this.state.searchInput} onChange={(e)=>this.setState({searchInput:e.target.value})} style={{outline:'none',width:'100%',position:'relative'
        }} type="text" placeholder='search contacts' />
        <FaSearch size={20} style={{position:'absolute',top:'25%',right:'8px'}}/>
        </div> 
         <hr />
        
        {
            this.props.contacts.map(contact=>
                <ContactCard contact={contact} key={contact.id} deleteHandler={this.props.deleteHandler} />
            )
        }
        

          </>
          )
          :(
            <div>
              <h1>No Contacts...</h1>
            </div>
        )}
          
      
      </div>
    )
  }
}

export default ContactList

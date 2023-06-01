import React, { useState } from 'react'
import AddUser from './AddUser'


const AddUserContainer = () => {
 const initialState={
    name:"",
    surname:"",
    email:"",
    password:"",
    role_id:""
 }


 const [state, setState] = useState(initialState)

  return (
 
    <div className="container-add-user">
    <AddUser state={state}  setState={setState}/>

    </div>
  
  )
}

export default AddUserContainer
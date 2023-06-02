import React, { useState } from 'react'
import AddUser from './AddUser'
import BackButton from '../../common/backButton/backButton'




const AddUserContainer = () => {
 const initialState={
    name:"",
    surname:"",
    email:"",
    password:"",
    role_id:1
 }


 const [state, setState] = useState(initialState)

  return (
 
    <div className="container-add-user">
    <AddUser state={state}  setState={setState}/>
    <BackButton/>
    </div>
  
  )
}

export default AddUserContainer
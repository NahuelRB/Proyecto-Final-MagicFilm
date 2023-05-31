import React, { useState } from 'react'
import AddUser from './AddUser'
import Layout from '../../layout/Layout'

const AddUserContainer = () => {
 const initialState={
    name:"",
    lastname:"",
    email:"",
    password:"",
    repassword:""
 }

 const [state, setState] = useState(initialState)

  return (
   < Layout>
    <div className="container-add-user">
    <AddUser state={state}  setState={setState}/>

    </div>
    </Layout>
  )
}

export default AddUserContainer
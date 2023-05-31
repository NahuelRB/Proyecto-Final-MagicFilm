import React from 'react'
import "./addUser.css"
import {createUser} from "../../../service/userServices"
import Layout from '../../layout/Layout';

const AddUser = ({state, setState}) => {
 
 const handleInputChange=(event)=>{
    setState({
    ...state,
    [event.target.name]:event.target.value,

  });
 };

 const handleSubmit=(event)=>{
  event.preventDefault();
  console.log(state);
  const create =createUser(state);
  create
  .then((data)=>console.log(data))
  .catch((error)=>console.log(error));
 };
 
 
 
  return (
   
    <form onSubmit={handleSubmit}  className="formulario-add-user">
      <h2 className='title'>Crear Cuenta</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre de usuario*"
        value={state.name || ""}
        onChange={handleInputChange}
      />

       
      <input
        type="text"
        name="lastname"
        placeholder="Apellido de usuario*"
        value={state.lastname || ""}
        onChange={handleInputChange}
      />
     
     <input
        type="text"
        name="email"
        placeholder="Email @*"
        value={state.email || ""}
        onChange={handleInputChange}
      />
      
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={state.password || ""}
        onChange={handleInputChange}


      />
        <input
        type="password"
        name="respassword"
        placeholder="Confirmar password"
        value={state.password|| ""}
        onChange={handleInputChange}

        
      />
      <button className="solid" type="submit">
        Crear
      </button>

    </form>
   
  )
}

export default AddUser
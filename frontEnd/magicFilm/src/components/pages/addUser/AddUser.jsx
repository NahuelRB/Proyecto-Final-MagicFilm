import React, { useState } from 'react';
import './addUser.css';
import { createUser } from '../../../service/userService';
import { object, string, ref } from 'yup';

const AddUser = ({ state, setState }) => {
    const [errors, setErrors] = useState({});



  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  
  const validationSchema = object().shape({
   
   
    name: string()
      .required('El nombre es requerido'),
     
    surname: string()
      .required('El apellido es requerido'),
     
    email: string()
      .email('El email no es válido')
      .required('El email es requerido'),
    password: string()
      .required('La contraseña es requerida'),
    repassword: string()
      .oneOf([ref('password'), null], 'Las contraseñas no coinciden')
      .required('La confirmación de contraseña es requerida'),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
     validationSchema.validateSync(state, { abortEarly: false });
  
     
      const create = createUser(state);
      create
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    } catch (error) {
  
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
      console.log(error);
    }
  };


  const handleReset = () => {
    setState({
      name: '',
      surname: '',
      email: '',
      password: '',
      repassword: '',
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-add-user">
      <h2 className="title">Crear Cuenta</h2>

      <div className={`form-group ${errors.name ? 'error' : ''}`}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder=""
          value={state.name || ''}
          onChange={handleInputChange}
        />
         {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className={`form-group ${errors.surname? 'error' : ''}`}>
        <label htmlFor="surname">Apellido</label>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder=""
          value={state.surname || ''}
          onChange={handleInputChange}
        />
        {errors.surname && <span className="error-message">{errors.surname}</span>}
      </div>

      <div className={`form-group ${errors.email ? 'error' : ''}`}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email@"
          value={state.email || ''}
          onChange={handleInputChange}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className={`form-group ${errors.password? 'error' : ''}`}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder=""
          value={state.password || ''}
          onChange={handleInputChange}
        />
        {errors.password&& <span className="error-message">{errors.password}</span>}
      </div>

      <div className={`form-group ${errors.repassword ? 'error' : ''}`}>
        <label htmlFor="repassword">Confirma Pasword</label>
        <input
          type="password"
          id="repassword"
          name="repassword"
          placeholder=""
          value={state.repassword || ''}
          onChange={handleInputChange}
        />
        {errors.repassword && <span className="error-message">{errors.repassword}</span>}
      </div>
     <div className="button-container">
      <div>
      <button className=" solid" type="submit" >
        Crear
      </button>
      </div>
       <div>
      <button className="solid" type="reset"  onClick={handleReset}>
       Cancelar
      </button>
      </div>
      </div>
    </form>
  );
};

export default AddUser;
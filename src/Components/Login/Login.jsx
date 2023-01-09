import React, { useEffect, useRef } from 'react'
import { useState} from 'react';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handileemail=(e)=>{
    setEmail(e.target.value)
  }
  const handilepassword=(e)=>{
    setPassword(e.target.value)
  } 
  const handileclick=()=>{
    console.log({email,password})
  }
  
  return (
    <div className='app'>
<form>
  <input type="email" value={email} onChange={handileemail}/><br/>
  <input type="password" value={password} onChange={handilepassword}/>
  <button onClick={handileclick}>login</button>
  </form>
    </div>
  )
}

export default Login
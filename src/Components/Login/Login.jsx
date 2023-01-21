import { useState } from 'react';
import axios from 'axios';
import './Login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email, password);
  const handileemail = (e) => {
    setEmail(e.target.value)
  }
  const handilepassword = (e) => {
    setPassword(e.target.value)
  }

  const navigate =useNavigate()
  const handileclick = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3007/users', {
      email:email,
      password:password
    }).then(res=>{
      console.log(res);
      alert('success');
      navigate("/")
      // console.log("login successfull");
    

    }).catch(error=>{
      alert('server error')
      console.log(error);
    })
    
  }

  return (
    <div className='app'>
      <div className='box'>
      <form onSubmit={handileclick}>
        <div className='formbody'>
          <h3>sign in</h3>
          <div className='inputbox'>
          <span>Username : </span>
          <input type="email" value={email} onChange={handileemail} placeholder="Enter user name"/><br />
         
          <i></i>
          </div>
          <div className='inputbox'>
          <span>Password : </span>
          <input type="password" value={password} onChange={handilepassword} placeholder="enter password" /><br />
          
          <i></i>
          </div>

    
       
       <div className='btnbutton'>
       <button type='submit'><span>login</span></button>
       </div>
       
    
        </div>
      </form>
      </div>
     
    </div>
  )
}

export default Login
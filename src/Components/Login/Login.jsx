import { useState } from 'react';
import axios from 'axios';


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
  const handileclick = () => {
    axios.post('http://localhost:3000/users', {
      email:email,
      password:password
    }).then(res=>{
      console.log(res);
      alert('success')
    }).catch(error=>{
      alert('server error')
      console.log(error);
    })
  }

  return (
    <div className='app'>
      <form>
        <input type="email" value={email} onChange={handileemail} /><br />
        <input type="password" value={password} onChange={handilepassword} /><br />
        <button onClick={handileclick}>login</button>
      </form>
    </div>
  )
}

export default Login
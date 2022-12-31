//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Plans from './Components/Plans';
import Programs from './Components/Programs';
import Whyus from './Whyus';
import Testimonials from './Components/Testimonials';
import Login from './Components/Login/Login';
import Logout from './Components/Logout';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/Plans' element={<Plans/>}/>
          <Route path='/Whyus' element={<Whyus/>}/>
          <Route path='/Testimonials' element={<Testimonials/>}/>
          <Route path='/Programs' element={<Programs/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Logout' element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

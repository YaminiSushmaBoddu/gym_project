import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Plans from './Components/Plans';
import Programs from './Components/Programs';
import Testimonials from './Components/Testimonials';
import Login from './Components/Login/Login';
import Logout from './Components/Logout';
import Whyus from './Components/Whyus';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Plans' element={<Plans/>}/>
          <Route path='/Whyus' element={<Whyus/>}/>
          <Route path='/Testimonials' element={<Testimonials/>}/>
          <Route path='/Programs' element={<Programs/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Logout' element={<Logout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

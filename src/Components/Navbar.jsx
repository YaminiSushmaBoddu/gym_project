import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{background:"grey"}}>
    <a className="navbar-brand" href="#">
      <img src={require ("./assets/logo.png")} alt="Error" className='logo'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Features</a> */}
          <Link className="nav-link" to='/Programs'>Programs</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Pricing</a> */}
          <Link className="nav-link" to='/Whyus'>Why US</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled">Disabled</a> */}
          <Link className="nav-link" to='/Plans'>Plans</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled">Disabled</a> */}
          <Link className="nav-link" to='/Testimonials'>Testimonials</Link>
        </li>
        <li  className="nav-item">
        <Link  className="nav-link" to='/Login'>Sign in</Link>
        </li>
        <li  className="nav-item">
          <Link className="nav-link"  to='/Logout'>Sign out</Link>
        </li>
      </ul> 
    </div>
  </div>
</nav>

  )
}

export default Navbar
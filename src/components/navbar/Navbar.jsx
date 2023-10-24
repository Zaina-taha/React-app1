import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
   
   <nav className="navbar navbar-expand-lg bg-main-color main-color">
     <div className="container">
  <a className="navbar-brand " href="#">Zaina Taha</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Products</a>
      </li>
    </ul>
   
  </div>
  </div>
</nav>

  )
}

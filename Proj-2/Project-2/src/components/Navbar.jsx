import React from 'react'

function Navbar() {
  return (
    <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <img src='https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/brand_logo.png?raw=true' alt="Logo"  class="d-inline-block align-text-top" />
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Menu</a></li>
        <li><a href="#" class="nav-link px-2">Location</a></li>
        <li><a href="#" class="nav-link px-2">About</a></li>
        <li><a href="#" class="nav-link px-2">Contact</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-danger me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
  )
}

export default Navbar
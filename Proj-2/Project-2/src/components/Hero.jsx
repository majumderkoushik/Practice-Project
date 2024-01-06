import React from 'react'
import '../App.css'

function Hero() {
  return (
    
        <div class="container">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
      <div class="col-lg-6 p-2 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">YOUR FEET DESERVE THE BEST</h1>
        <p class="lead"> YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Shop Now</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Category</button>
        </div>
      </div>
      <div class="col-lg-5 offset-lg-1 p-0 overflow-hidden ">
          <img class="rounded-lg-3" src="https://github.com/anshuopinion/React-10-Projects/blob/project-1/project-1/public/images/hero-image.png?raw=true" alt="" width="full" />
      </div>
    </div>
  </div>
   
  )
}

export default Hero
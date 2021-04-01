import React from "react"

const Hero = () => {
  return (
    <div class="container-fluid AtBg">
      <div class="container justify-content-center h-100 d-flex">
        <div class="row align-items-start mt-5">
          <div class="col-4">
            <h1 className="hero-header">There’s a better way to grow.</h1>
            <p>
              Marketing, sales, and service software that helps your business
              grow without compromise. Because “good for the business” should
              also mean “good for the customer.”
            </p>
            <button className="btn btn-warning hero-cta">
              Get HubSpot Free
            </button>
            <p className="mt-5">
              Get started with FREE tools, and upgrade as you grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

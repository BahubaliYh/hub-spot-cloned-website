import React from "react"

const WideCta = () => {
  return (
    <div className="container lg-top-margin">
      <div class="row align-items-center my-5">
        <div class="col-12 col-md-8">
          <h2>Start Growing With HubSpot Today</h2>
          <p className="mt-4">
            With tools to make every part of your process more human and a
            support team excited to help you, getting started with inbound has
            never been easier.
          </p>
          <button className="btn btn-warning hero-cta mt-4">
            Get HubSpot Free
          </button>
          <p className="mt-4">
            Get started with FREE tools, or get more with our premium software.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <div>
            <img
              src="//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/_style-guide/sg-module-images/1@2x.png"
              alt=""
              className="wcta-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WideCta

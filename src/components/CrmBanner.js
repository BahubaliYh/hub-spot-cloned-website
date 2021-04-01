import React from "react"

const CrmBanner = () => {
  return (
    <div className="container w-60">
      <h2 className="text-center">
        The CRM Platform Your Whole Business Will Love
      </h2>
      <p className="m-auto w-50">
        HubSpot’s CRM platform has all the tools and integrations you need for
        marketing, sales, content management, and customer service. Each product
        in the platform is powerful alone, but the real magic happens when you
        use them together.
      </p>
      <div className="d-flex mt-3 justify-content-center">
        <a href="/" className="btn btn-warning ">
          Get free CRM
        </a>
        <a href="/" className="btn btn-outline-warning ml-4">
          Demo premium CRM
        </a>
      </div>
    </div>
  )
}

export default CrmBanner

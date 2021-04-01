import React from "react"

const Community = () => {
  return (
    <div className="container-fluid community-bg">
      <div className="container text-center pt-5 col-7">
        <h2>
          Learn and grow with award-winning support and a thriving community
          behind you.
        </h2>
        <p>
          You don't have to go it alone. Master the inbound methodology and get
          the most out of your tools with HubSpot's legendary customer support
          team and a community of thousands of marketing and sales pros just
          like you.
        </p>
      </div>

      <div className="container card-container text-center">
        <div className="row mt-5 com-card-border">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="com-card">
              <div className="com-icon">
                <img
                  src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_agency.svg"
                  alt=""
                />
              </div>
              <div className="com-body mt-2">
                <h1>150+</h1>
                <p>HubSpot user groups</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="com-card">
              <div className="com-icon">
                <img
                  src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_blog.svg"
                  alt=""
                />
              </div>
              <div className="com-body mt-2">
                <h1>7M+</h1>
                <p>monthly visits</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="com-card">
              <div className="com-icon">
                <img
                  src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_academy.svg"
                  alt=""
                />
              </div>
              <div className="com-body mt-2">
                <h1>330K+</h1>
                <p>certified professionals</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="com-card">
              <div className="com-icon">
                <img
                  src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_inbound.svg"
                  alt=""
                />
              </div>
              <div className="com-body mt-2">
                <h1>26K</h1>
                <p>registered attendees</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row com-card-border2">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="com-card">
              <div className="com-icon">
                <img
                  src="https://cdn2.hubspot.net/hubfs/53/HubSpot-App-Marketplace-White.png"
                  alt=""
                  className="integration"
                />
              </div>
              <div className="com-body mt-2">
                <h1>650+</h1>
                <p>integrations</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="com-card">
              <div className="com-icon">
                <img
                  src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_globe.svg"
                  alt=""
                />
              </div>
              <div className="com-body mt-2">
                <h1>6</h1>
                <p>languages</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="com-card">
              <div className="com-icon">
                <img
                  src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_followers.svg"
                  alt=""
                />
              </div>
              <div className="com-body mt-2">
                <h1>2.6M+</h1>
                <p>social followers</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="com-card">
              <div className="com-icon">
                <img src="https://cdn2.hubspot.net/hubfs/53/Lists.svg" alt="" />
              </div>
              <div className="com-body mt-2">
                <h1>100,000+</h1>
                <p>customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community

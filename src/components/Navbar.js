import React from "react"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand" href="/">
          HubSpot
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Software
              </a>
              <div
                className="dropdown-menu large-menu"
                aria-labelledby="navbarDropdown"
              >
                <div className="container ">
                  <div className="row ">
                    <div className="col-12 col-md-4 sub-menu-bg pt-5">
                      <h5>The Full CRM Platform</h5>
                      <a href="/">
                        <p>Overview of all products</p>
                      </a>
                      <h5 className="mt-5">The Full CRM Platform</h5>
                      <a href="/">
                        <p>Overview of all products</p>
                      </a>
                    </div>
                    <div className="col-12 col-md-8 py-5">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="menu-card d-flex ">
                            <div className="align-self-start">
                              <i class="fab fa-medium-m fa-lg"></i>
                            </div>
                            <div className="align-self-center">
                              <h5>Marketing Hub</h5>
                              <p>
                                Marketing automation software.{" "}
                                <a href="/">Free and premium plans</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="menu-card d-flex ">
                            <div className="align-self-start">
                              <i class="fab fa-medium-m fa-lg"></i>
                            </div>
                            <div className="align-self-center">
                              <h5>Marketing Hub</h5>
                              <p>
                                Marketing automation software.{" "}
                                <a href="/">Free and premium plans</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-12 col-md-6">
                          <div className="menu-card d-flex ">
                            <div className="align-self-start">
                              <i class="fab fa-medium-m fa-lg"></i>
                            </div>
                            <div className="align-self-center">
                              <h5>Marketing Hub</h5>
                              <p>
                                Marketing automation software.{" "}
                                <a href="/">Free and premium plans</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="menu-card d-flex ">
                            <div className="align-self-start">
                              <i class="fab fa-medium-m fa-lg"></i>
                            </div>
                            <div className="align-self-center">
                              <h5>Marketing Hub</h5>
                              <p>
                                Marketing automation software.{" "}
                                <a href="/">Free and premium plans</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  日本語
                </a>
                <a className="dropdown-item" href="/">
                  Deutsch
                </a>

                <a className="dropdown-item" href="/">
                  English
                </a>
                <a className="dropdown-item" href="/">
                  Español
                </a>
                <a className="dropdown-item" href="/">
                  Português
                </a>
                <a className="dropdown-item" href="/">
                  Français
                </a>
              </div>
            </li>
          </ul>

          <button className="btn btn-warning my-2 my-sm-0" type="submit">
            Get HubSpot Free
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

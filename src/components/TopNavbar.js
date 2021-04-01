import React from "react"

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
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
                English
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
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Contact Sales
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Customer Support
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
                About
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  About Us
                </a>
                <a className="dropdown-item" href="/">
                  Careers
                </a>
                <a className="dropdown-item" href="/">
                  Contact Us
                </a>
                <a className="dropdown-item" href="/">
                  Investor Relations
                </a>
                <a className="dropdown-item" href="/">
                  Management Team
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar

import React, { Component } from "react";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg position-fixed"
          style={{
            zIndex: "10",
            width: "100%",
            top: "0",
            backgroundColor: "rgba(237, 223, 223, 0.6)",
            backdropFilter: "blur(10px)", 
            WebkitBackdropFilter: "blur(10px)", 
            borderBottom: "1px solid rgba(255, 255, 255, 0.3)", 
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsEagle
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
              </ul>

              <div className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      onClick={() => this.props.querySelect("Sports")}
                      className="dropdown-item"
                    >
                      Sports
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.props.querySelect("Politics")}
                      className="dropdown-item"
                    >
                      Politics
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.props.querySelect("Finance")}
                      className="dropdown-item"
                    >
                      Finance
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.props.querySelect("Movies")}
                      className="dropdown-item"
                    >
                      Movies
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.props.querySelect("Health")}
                      className="dropdown-item"
                    >
                      Health
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => this.props.querySelect("Entertainment")}
                      className="dropdown-item"
                    >
                      Entertainment
                    </a>
                  </li>
                </ul>
              </div>

              <form className="d-flex" role="search">
                <input
                  ref={this.searchInput}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    let value = this.searchInput.current.value;
                    this.props.querySelect(value);
                  }}
                  className="btn btn-success"
                  style={{backgroundColor: "#a25e36", border: "none"}}
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

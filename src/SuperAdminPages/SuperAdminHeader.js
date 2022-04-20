import React from "react";
import { Link } from "react-router-dom";

import { IndexProvider } from "../contexts/IndexContext";




const SuperAdminHeader = () => {
 const mystyle = {
    width:"50px",
    height:"50px"
    };
  return (
      <header className="cd-main-header js-cd-main-header">
          <div className="cd-logo-wrapper">
              <a className="cd-logo"><img src="Assets/images/iMenuLogo.png" style={mystyle} alt="Logo" /></a>
          </div>
          <div className="cd-search js-cd-search">
              <form>
                  <input className="reset" type="search" placeholder="Search..." />
              </form>
          </div>
          <button className="reset cd-nav-trigger js-cd-nav-trigger" aria-label="Toggle menu"><span /></button>
          <ul className="cd-nav__list js-cd-nav__list">
              <li className="cd-nav__item"><a >Tour</a></li>
              <li className="cd-nav__item"><a >Support</a></li>
              <li className="cd-nav__item cd-nav__item--has-children cd-nav__item--account js-cd-item--has-children">
                  <a >
                      <img src="Assets/images/cd-avatar.svg" alt="avatar" />
                      <span>Account</span>
                  </a>
                  <ul className="cd-nav__sub-list">
                      <li className="cd-nav__sub-item"><a >My Account</a></li>
                      <li className="cd-nav__sub-item"><a>Edit Account</a></li>
                      <li className="cd-nav__sub-item"><a >Logout</a></li>
                  </ul>
              </li>
          </ul>
      </header>
  )
}
export default SuperAdminHeader;
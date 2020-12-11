import React, { useEffect, useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';


import "../css/Header.css";


function TopBar() {
  const [show, handleShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const onMouseEnter = () => setDropdownOpen(true);
  const onMouseLeave = () => setDropdownOpen(false);
 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="pinning-header nav__upperfade ">
      <div className={`nav ${show && "nav__black"}`}>
        <nav className="navbar tabbed-primary-navigation">
          <img
            className="nav__logo"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI"
            alt="Netflix Logo"
          />
          <img
            className="nav__avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Avatar logo"
          />
        
          <Dropdown className="dropdown" onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="dropbtn " 
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}>
              Browse
              <i class="fa fa-caret-down"></i>
            </DropdownToggle>
            <DropdownMenu
              className="nav-pad dropdown-content" id="myDropdown"
            >
              <li className="navigation-tab" onClick={toggle}>
                <a className="current active" href="/browse"> Home</a>
              </li>
              <li className="navigation-tab" onClick={toggle}>
                <a href="/browse/genre/83">TV Shows</a>
              </li>
              <li className="navigation-tab" onClick={toggle}>
                <a href="/browse/genre/34399">Movies</a>
              </li>
              <li className="navigation-tab" onClick={toggle}>
                <a href="/latest">New &amp; Popular</a>
              </li>
              <li className="navigation-tab" onClick={toggle}>
                <a href="/browse/my-list">My List</a>
              </li>

            </DropdownMenu>
          </Dropdown>

        </nav>
        <div className= "newElement">
          <span className="fa fa-search element" style={{color: "white"}}></span>
          <span className="fa fa-gift element" style={{color: "white"}} ></span>
          <span className="fa fa-bell element" style={{color: "white"}}></span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;

import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLinkProps = {
    smooth: true,
    duration: 500,
    offset: -70,
    onClick: () => setMenuOpen(false),
  };

  const isGetStartedPage = location.pathname === "/get-started";

  return (
    <>
      <div className="navbar-container">
        <div className="nav-left">MuscleUp</div>

        <div className="nav-right">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {!isGetStartedPage && (
              <>
                <li>
                  <Link to="program" {...scrollLinkProps}>
                    Program
                  </Link>
                </li>
                <li>
                  <Link to="why-us" {...scrollLinkProps}>
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link to="plans" {...scrollLinkProps}>
                    Plans
                  </Link>
                </li>
                <li>
                  <Link to="testimonials" {...scrollLinkProps}>
                    Testimonials
                  </Link>
                </li>
              </>
            )}
            <li>
              <NavLink to="/get-started">Get Started</NavLink>
            </li>
          </ul>
        </div>

        <div className="mobile-nav" onClick={() => setMenuOpen(true)}>
          <GiHamburgerMenu className="hamburger" />
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          <IoClose size={28} />
        </div>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          {!isGetStartedPage && (
            <>
              <li>
                <Link to="program" {...scrollLinkProps}>
                  Program
                </Link>
              </li>
              <li>
                <Link to="why-us" {...scrollLinkProps}>
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="plans" {...scrollLinkProps}>
                  Plans
                </Link>
              </li>
              <li>
                <Link to="testimonials" {...scrollLinkProps}>
                  Testimonials
                </Link>
              </li>
              <li>
                <NavLink to="/get-started" onClick={() => setMenuOpen(false)}>
                  Get Started
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

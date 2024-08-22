import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="logo">
            <h2 className="navbar-title">Haven Family Wellness</h2>
          </a>
        </Link>

        <nav className={`navbar ${isNavOpen ? "open" : ""}`} data-navbar>
          <div className="navbar-top">
            <Link href="/" legacyBehavior>
              <a className="logo">
                <h3 className="navbar-title">Haven Family Wellness</h3>
              </a>
            </Link>

            <button
              className="nav-close-btn"
              aria-label="close menu"
              onClick={toggleNav}
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li>
              <Link href="/#hero" legacyBehavior>
                <a className="navbar-link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/#about" legacyBehavior>
                <a className="navbar-link">About</a>
              </Link>
            </li>
            <li>
              <Link href="/#programs" legacyBehavior>
                <a className="navbar-link">Programs</a>
              </Link>
            </li>
            <li>
              <Link href="/calendar" legacyBehavior>
                <a className="navbar-link">Calendar</a>
              </Link>
            </li>
            {/* Uncomment these lines if you want to include Testimonials and Contact */}
            {/* <li><Link href="/#testimonials" legacyBehavior><a className="navbar-link">Testimonials</a></Link></li>
            <li><Link href="/#contact" legacyBehavior><a className="navbar-link">Contact</a></Link></li> */}
          </ul>

          <div className="wrapper">
            <a href="mailto:info@email.com" className="contact-link">
              Havenfamilywellnessinc@gmail.com
            </a>
            <a href="tel:001234567890" className="contact-link">
              +1 (403) 899-3018
            </a>
          </div>

          <ul className="social-list">
            <li>
              <a href="https://x.com/?login" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/havenfamilywellnessinc/"
                className="social-link"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>

        <Link href="/signin" legacyBehavior>
          <a className="btn btn-primary" id="signInNav">
            Sign in
          </a>
        </Link>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={toggleNav}
        >
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>

        {isNavOpen && (
          <div
            className="overlay"
            onClick={toggleNav}
            data-nav-toggler
            data-overlay
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;

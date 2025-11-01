import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigateAndScrollToTop } from "../../utils/scrollToTop";
import "./Header.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img
              src="https://cdn.discordapp.com/avatars/1398003581512056854/a_940a43c9f073d76847788a8982f08c25.gif?size=64&animated=true"
              alt="Kaoruko Bot"
              className="logo-icon"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget
                  .nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = "block";
                }
              }}
            />
            <div className="logo-emoji-fallback" style={{ display: "none" }}>
              🤖
            </div>
            <span className="logo-text">Kaoruko</span>
          </Link>

          <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
            <button
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              onClick={() => {
                closeMobileMenu();
                navigateAndScrollToTop(navigate, "/");
              }}
            >
              Home
            </button>
            <button
              className={`nav-link ${location.pathname === "/commands" ? "active" : ""}`}
              onClick={() => {
                closeMobileMenu();
                navigateAndScrollToTop(navigate, "/commands");
              }}
            >
              Commands
            </button>
            <button
              className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`}
              onClick={() => {
                closeMobileMenu();
                navigateAndScrollToTop(navigate, "/dashboard");
              }}
            >
              Dashboard
            </button>
            <button
              className={`nav-link ${location.pathname === "/status" ? "active" : ""}`}
              onClick={() => {
                closeMobileMenu();
                navigateAndScrollToTop(navigate, "/status");
              }}
            >
              Status
            </button>
            <button
              className={`nav-link ${location.pathname === "/support" ? "active" : ""}`}
              onClick={() => {
                closeMobileMenu();
                navigateAndScrollToTop(navigate, "/support");
              }}
            >
              Support
            </button>
            <button
              className={`nav-link ${location.pathname === "/docs" ? "active" : ""}`}
              onClick={() => {
                closeMobileMenu();
                navigateAndScrollToTop(navigate, "/docs");
              }}
              aria-label="Documentation"
              title="Docs"
            >
              Docs
            </button>
          </nav>

          <div className="header-actions">
            <a
              href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot"
              className="mdc-button mdc-button--filled btn-invite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Invite Kaoruko Bot"
              title="Invite Kaoruko to your server"
            >
              Invite Bot
            </a>
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

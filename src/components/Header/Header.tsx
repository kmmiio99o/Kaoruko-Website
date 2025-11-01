import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigateAndScrollToTop } from "../../utils/scrollToTop";
import "./Header.css";
import MobileMenu from "./MobileMenu";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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

  const menuItems = [
    { path: "/", name: "Home" },
    { path: "/commands", name: "Commands" },
    { path: "/dashboard", name: "Dashboard" },
    { path: "/status", name: "Status" },
    { path: "/support", name: "Support" },
    { path: "/docs", name: "Docs", ariaLabel: "Documentation", title: "Docs" },
  ];

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

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            ></span>
          </button>

          <nav className="nav">
            {menuItems.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={closeMobileMenu}
                aria-label={item.ariaLabel}
                title={item.title}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot"
              className="btn-invite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Invite Kaoruko Bot"
              title="Invite Kaoruko to your server"
            >
              Invite Bot
            </a>
          </div>
        </div>
        {isMobileMenuOpen && (
          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            closeMobileMenu={closeMobileMenu}
            navigate={navigate}
            menuItems={menuItems}
          />
        )}
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigateAndScrollToTop } from "../../utils/scrollToTop";
import "./Header.css";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
  menuItems: {
    path: string;
    name: string;
    ariaLabel?: string;
    title?: string;
  }[];
  navigate: (path: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  closeMobileMenu,
  menuItems,
  navigate,
}) => {
  const location = useLocation();

  return (
    <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
      <button className="mobile-menu-close" onClick={closeMobileMenu}>
        <span aria-hidden>×</span>
      </button>
      {menuItems.map((item) => (
        <Link
          to={item.path}
          key={item.name}
          className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
          onClick={() => {
            closeMobileMenu();
            navigate(item.path);
          }}
          aria-label={item.ariaLabel}
          title={item.title}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;

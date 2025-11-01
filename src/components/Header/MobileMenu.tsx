import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion"; // Import motion and Variants
import { navigateAndScrollToTop } from "../../utils/scrollToTop";
import "./Header.css";

interface MobileMenuProps {
  isMobileMenuOpen: boolean; // Keep this prop for consistency, though AnimatePresence handles mounting
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
  closeMobileMenu,
  menuItems,
  navigate,
}) => {
  const location = useLocation();

  const menuVariants: Variants = {
    hidden: { x: "0%", opacity: 0 }, // Start off-screen to the right (CSS handles initial position)
    visible: {
      x: "-100%", // Slide to on-screen (right edge)
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      x: "0%", // Slide off-screen to the right
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="mobile-nav" // Remove the 'open' class toggle; Framer Motion handles visibility
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
    >
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
    </motion.div>
  );
};

export default MobileMenu;

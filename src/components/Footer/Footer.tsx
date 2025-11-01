import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { navigateAndScrollToTop } from "../../utils/scrollToTop";
import "./Footer.css";

type LinkItem = {
  name: string;
  href: string;
  external?: boolean;
  anchor?: boolean; // internal anchor like "/#features"
};

const PRODUCT_LINKS: LinkItem[] = [
  { name: "Features", href: "/#features", anchor: true },
  { name: "Commands", href: "/commands" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Status", href: "/status" },
  { name: "Docs", href: "/docs" },
];

const COMMUNITY_LINKS: LinkItem[] = [
  { name: "Discord", href: "https://discord.gg/cYZPfXcBGB", external: true },
  {
    name: "GitHub",
    href: "https://github.com/kmmiio99o/Kaoruko-Bot-Next",
    external: true,
  },
  {
    name: "Report an issue",
    href: "https://github.com/kmmiio99o/Kaoruko-Bot-Next/issues/new",
    external: true,
  },
];

const LEGAL_LINKS: LinkItem[] = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const renderLink = (l: LinkItem) => {
    // Internal anchor within the page (e.g. /#features)
    if (l.anchor) {
      return (
        <button
          className="footer-link"
          onClick={() => navigateAndScrollToTop(navigate, l.href)}
          aria-label={l.name}
        >
          {l.name}
        </button>
      );
    }

    if (l.external) {
      return (
        <a
          className="footer-link"
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.name}
        >
          {l.name}
        </a>
      );
    }

    // Internal SPA route
    return (
      <button
        className="footer-link"
        onClick={() => navigateAndScrollToTop(navigate, l.href)}
        aria-label={l.name}
      >
        {l.name}
      </button>
    );
  };

  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Kaoruko home">
              <img
                src="https://cdn.discordapp.com/avatars/1398003581512056854/a_940a43c9f073d76847788a8982f08c25.gif?size=128&animated=true"
                alt="Kaoruko logo"
                className="footer-logo-icon"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const fallback = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              <div
                className="footer-logo-emoji-fallback"
                style={{ display: "none" }}
              >
                🤖
              </div>
              <span className="footer-logo-text">Kaoruko</span>
            </Link>

            <p className="footer-description">
              The advanced Discord bot with powerful features and seamless
              integration.
            </p>
          </div>

          <div className="footer-links" aria-label="Footer links">
            <div className="footer-column" aria-labelledby="footer-product">
              <h3 id="footer-product" className="footer-title">
                Product
              </h3>
              <ul className="footer-list">
                {PRODUCT_LINKS.map((l) => (
                  <li key={l.name}>{renderLink(l)}</li>
                ))}
              </ul>
            </div>

            <div className="footer-column" aria-labelledby="footer-community">
              <h3 id="footer-community" className="footer-title">
                Community
              </h3>
              <ul className="footer-list">
                {COMMUNITY_LINKS.map((l) => (
                  <li key={l.name}>{renderLink(l)}</li>
                ))}
              </ul>
            </div>

            <div className="footer-column" aria-labelledby="footer-legal">
              <h3 id="footer-legal" className="footer-title">
                Legal
              </h3>
              <ul className="footer-list">
                {LEGAL_LINKS.map((l) => (
                  <li key={l.name}>{renderLink(l)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Kaoruko. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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

const IconDiscord = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M7.5 14.5c.8 0 1.5-.7 1.5-1.5S8.3 11.5 7.5 11.5 6 12.2 6 13s.7 1.5 1.5 1.5z"
      fill="currentColor"
    />
    <path
      d="M16.5 14.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5z"
      fill="currentColor"
    />
    <path
      d="M21 4s-1.7-1.6-4.2-1.6c-.2 0-.4.1-.6.3-1.8 1.9-3.8 2.7-5.3 3-.2 0-.3-.1-.5-.2C8.8 5.1 8 4.8 7 4.6 7 4.6 6.1 4 5 4c-.2 0-.4 0-.6.1C3.4 4.2 2 5 2 5s2.3 4.4 4.2 6.1c.1.1.2.3.3.4 0 0 1.6 1.1 3.2 1.1 1.7 0 2.9-1 2.9-1 .8.2 1.6.3 2.5.3 0 0 1.1 0 3.1-1.1.1-.1.2-.2.3-.3C20.7 8.6 23 4 23 4s-1.1-1-2-1z"
      fill="currentColor"
    />
  </svg>
);

const IconGitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.9 3.2 9 7.7 10.5.6.1.8-.2.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1 1.8.7 2.4 1.2.1-.8.4-1.4.7-1.7-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.2 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.4-1.4 3.4-1.2 3.4-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.2 0 4.5-2.6 5.5-5.1 5.8.4.3.8 1 .8 2v3c0 .4.2.7.8.6 4.5-1.5 7.7-5.6 7.7-10.5C23.2 5.4 18.3.5 12 .5z"
      fill="currentColor"
    />
  </svg>
);

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

            <div className="footer-social" aria-hidden>
              <a
                className="social-link"
                href="https://discord.gg/cYZPfXcBGB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                title="Discord"
              >
                <span className="social-icon" aria-hidden>
                  <IconDiscord />
                </span>
              </a>

              <a
                className="social-link"
                href="https://github.com/kmmiio99o/Kaoruko-Bot-Next"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <span className="social-icon" aria-hidden>
                  <IconGitHub />
                </span>
              </a>
            </div>
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

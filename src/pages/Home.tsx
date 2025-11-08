import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    // small delay to allow route change then scroll to top
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 60);
  };

  return (
    <div className="home-page">
      <Hero />

      <section className="home-actions container" aria-label="Primary actions">
        <div className="actions-row">
          <a
            className="btn-primary"
            href="https://discord.com/oauth2/authorize?client_id=1398003581512056854&permissions=1377074007190&response_type=code&redirect_uri=https%3A%2F%2Fkaoruko-website.pages.dev%2F&integration_type=0&scope=bot+applications.commands.permissions.update+messages.read+applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Invite Kaoruko"
          >
            Invite
          </a>

          <button
            className="btn-primary"
            onClick={() => go("/docs")}
            aria-label="Open documentation"
          >
            Docs
          </button>

          <button
            className="btn-primary"
            onClick={() => go("/commands")}
            aria-label="View commands"
          >
            Commands
          </button>
        </div>

        <p className="muted small">
          Simple, fast, and customizable moderation & utility for your Discord
          community.
        </p>
      </section>

      <Features />
    </div>
  );
};

export default Home;

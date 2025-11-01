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
            href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot"
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

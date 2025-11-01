import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Docs.css";

/**
 * Docs.tsx
 *
 * Completely rewritten documentation page with improved layout, richer content,
 * and a left-hand navigation that uses button elements (no underlines) for
 * consistent appearance. The page relies on `Docs.css` for visual polish and
 * Material-3 color tokens from the global stylesheet.
 *
 * Notes:
 * - Left navigation uses buttons (styled) to avoid default anchor underlines.
 * - The page tracks the active section while scrolling and highlights the
 *   corresponding nav button.
 * - Internal anchors are standard `id` anchors; navigation uses smooth
 *   scrolling.
 */

type TocItem = {
  id: string;
  title: string;
  short?: string;
};

const TOC: TocItem[] = [
  { id: "overview", title: "Overview" },
  { id: "quick-start", title: "Quick start" },
  { id: "installation", title: "Installation & Bun" },
  { id: "env", title: "Environment variables" },
  { id: "project-structure", title: "Project structure" },
  { id: "architecture", title: "Architecture & Key Modules" },
  { id: "tickets", title: "Ticket System (deep dive)" },
  { id: "commands", title: "Commands Summary" },
  { id: "development", title: "Development workflow" },
  { id: "testing", title: "Testing & Quality" },
  { id: "deployment", title: "Deployment" },
  { id: "troubleshooting", title: "Troubleshooting" },
  { id: "contributing", title: "Contributing" },
  { id: "references", title: "References & Links" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) {
    // if anchor includes leading slash (#features vs /#features) try both
    const alt = document.getElementById(id.replace(/^\//, ""));
    if (alt) alt.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  // update history without reloading
  try {
    history.replaceState({}, "", `#${id}`);
  } catch {
    /* silent */
  }
}

const Docs: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(TOC[0].id);

  const onScroll = useCallback(() => {
    const offsets = TOC.map((item) => {
      const el = document.getElementById(item.id);
      if (!el) return { id: item.id, top: Infinity };
      const rect = el.getBoundingClientRect();
      return { id: item.id, top: Math.abs(rect.top) };
    });
    const nearest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
    if (nearest && nearest.id !== activeId) setActiveId(nearest.id);
  }, [activeId]);

  useEffect(() => {
    // throttle with requestAnimationFrame
    let raf = 0;
    const handler = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => onScroll());
    };
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    // initial check
    handler();
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [onScroll]);

  return (
    <div className="docs-page container">
      <div className="docs-hero">
        <div className="docs-hero-inner">
          <h1 className="display-medium">Kaoruko — Documentation</h1>
          <p className="body-large docs-hero-sub">
            A complete developer and operator guide for Kaoruko Bot Next — with
            install instructions, architecture notes, command summaries, and
            troubleshooting.
          </p>
        </div>
      </div>

      <div className="docs-body">
        <aside className="docs-sidebar" aria-label="Documentation navigation">
          <nav className="docs-toc" aria-labelledby="docs-toc-title">
            <div id="docs-toc-title" className="label-large">
              On this page
            </div>

            <ul className="docs-toc-list">
              {TOC.map((item) => (
                <li key={item.id}>
                  <button
                    className={`docs-nav-button ${
                      activeId === item.id ? "active" : ""
                    }`}
                    onClick={() => scrollToId(item.id)}
                    aria-current={activeId === item.id ? "true" : undefined}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>

            <div className="docs-toc-quicklinks">
              <a
                href="https://github.com/kmmiio99o/Kaoruko-Bot-Next"
                target="_blank"
                rel="noopener noreferrer"
                className="mdc-button mdc-button--outlined"
              >
                Source on GitHub
              </a>
            </div>
          </nav>
        </aside>

        <main className="docs-content">
          <section id="overview" className="docs-section">
            <h2 className="headline-medium">Overview</h2>
            <p className="body-large">
              Kaoruko Bot Next is a modern, extensible Discord bot written in
              TypeScript. It ships a flexible ticketing system, advanced
              moderation tools, both slash and prefix command support, and a
              modular architecture designed for maintainability and scale.
            </p>

            <div className="docs-grid">
              <div className="docs-card">
                <h3 className="title-medium">Tech stack</h3>
                <ul className="body-medium">
                  <li>
                    Bun runtime (recommended) — fast JS runtime & package
                    manager
                  </li>
                  <li>TypeScript — type-safety</li>
                  <li>discord.js (v14) — Discord API</li>
                  <li>MongoDB + Mongoose — persistent datastore</li>
                </ul>
              </div>

              <div className="docs-card">
                <h3 className="title-medium">Key features</h3>
                <ul className="body-medium">
                  <li>
                    Robust ticket system (categories, transcripts, auto-close)
                  </li>
                  <li>Auto-moderation & role-based permissioning</li>
                  <li>Dual command interface (slash + prefix)</li>
                  <li>Per-guild config & expected web dashboard</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="quick-start" className="docs-section">
            <h2 className="headline-medium">Quick start</h2>
            <p className="body-large">
              Clone repository and use Bun to install dependencies, then run in
              development or production mode.
            </p>

            <pre className="docs-code">
              {`git clone https://github.com/kmmiio99o/Kaoruko-Bot-Next.git
cd Kaoruko-Bot-Next

# install deps (Bun)
bun install

# development (hot reload)
bun run dev

# build for production
bun run build
bun start
`}
            </pre>

            <div className="docs-note body-medium">
              If you prefer Node/npm, most scripts remain compatible but Bun is
              recommended for speed. Remove node_modules and bun.lockb before
              changing package manager.
            </div>
          </section>

          <section id="installation" className="docs-section">
            <h2 className="headline-medium">Installation & Bun</h2>

            <h3 className="title-small">Install Bun</h3>
            <p className="body-medium">
              Visit https://bun.sh for installation. After installing Bun,
              confirm with <code>bun -v</code>.
            </p>

            <h3 className="title-small">Dependencies</h3>
            <p className="body-medium">
              Bun reads your package.json. To add packages:
              <code>bun add some-package</code>. For dev packages:
              <code>bun add -d some-dev-package</code>.
            </p>
          </section>

          <section id="env" className="docs-section">
            <h2 className="headline-medium">Environment variables</h2>

            <p className="body-large">Essential variables:</p>

            <table className="docs-table">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Required</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>DISCORD_TOKEN</code>
                  </td>
                  <td>✅</td>
                  <td>Bot token from Discord Developer Portal</td>
                </tr>
                <tr>
                  <td>
                    <code>CLIENT_ID</code>
                  </td>
                  <td>✅</td>
                  <td>Application ID</td>
                </tr>
                <tr>
                  <td>
                    <code>MONGODB_URI</code>
                  </td>
                  <td>✅</td>
                  <td>Connection string for MongoDB</td>
                </tr>
                <tr>
                  <td>
                    <code>PREFIX</code>
                  </td>
                  <td>Optional</td>
                  <td>
                    Default command prefix, e.g. <code>.</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>WEB_PORT</code>
                  </td>
                  <td>Optional</td>
                  <td>Web dashboard port (default 3000)</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="project-structure" className="docs-section">
            <h2 className="headline-medium">Project structure (full)</h2>

            <p className="body-medium">
              The repository follows a modular layout. Below is a complete,
              annotated structure to help you locate code quickly.
            </p>

            <pre className="docs-code">
              {`kaoruko-bot-next/
├── src/
│   ├── commands/           # Command implementations (slash & prefix)
│   │   ├── admin/          # setup, config, export/import
│   │   ├── tickets/        # ticket commands & utilities
│   │   ├── moderation/     # ban, kick, warn, automod
│   │   ├── info/           # userinfo, serverinfo, ping
│   │   └── fun/            # entertainment commands
│   ├── handlers/           # commandHandler, eventHandler, interaction handlers
│   ├── services/           # TicketService, DatabaseService, WebServer abstraction
│   ├── models/             # Mongoose models & schemas
│   ├── events/             # Discord event listeners
│   ├── utils/              # small utilities & helpers
│   ├── config/             # runtime config loaders
│   └── pages/              # website pages (Docs, Home, etc.)
├── public/                 # static assets for website
├── scripts/                # helper scripts (deploy, build helpers)
├── package.json            # scripts & metadata (Bun-friendly)
├── bunfig.toml             # (optional) bun config if present
├── tsconfig.json
├── kaoruko-readme.md      # Bot README (detailed)
└── README.md              # Website README
`}
            </pre>

            <div className="body-medium">
              Notes:
              <ul>
                <li>
                  Command modules are registered by the command handler. New
                  commands should export metadata (name, description, options)
                  and a handler function.
                </li>
                <li>
                  Models use Mongoose-style schemas — place shared types in
                  src/types/.
                </li>
              </ul>
            </div>
          </section>

          <section id="architecture" className="docs-section">
            <h2 className="headline-medium">Architecture & Key Modules</h2>

            <h3 className="title-small">Event system</h3>
            <p className="body-medium">
              The bot registers Discord events via a central event handler:
              connect → ready → messageCreate → interactionCreate. Each event
              handler is responsible for validation and delegating to services
              (like command execution or ticket processing).
            </p>

            <h3 className="title-small">Services</h3>
            <p className="body-medium">
              Services encapsulate business logic and side effects:
            </p>
            <ul className="body-medium">
              <li>
                <strong>DatabaseService</strong> — manages DB connection and
                health checks
              </li>
              <li>
                <strong>TicketService</strong> — creates/closes tickets,
                transcripts
              </li>
              <li>
                <strong>NotificationService</strong> — notifies staff, webhooks
              </li>
            </ul>
          </section>

          <section id="tickets" className="docs-section">
            <h2 className="headline-medium">Ticket System (deep dive)</h2>
            <p className="body-medium">
              The Ticket System is a core feature — it supports categories,
              configurable roles, auto-assignment, transcripts, and analytics.
            </p>

            <h3 className="title-small">Data model (simplified)</h3>
            <pre className="docs-code">
              {`Ticket {
  id: string
  guildId: string
  channelId: string
  ownerId: string
  status: 'open' | 'closed' | 'archived'
  category: string
  createdAt: Date
  closedAt?: Date
  transcriptUrl?: string
}`}
            </pre>

            <h3 className="title-small">Typical flow</h3>
            <ol className="body-medium">
              <li>
                User clicks ticket panel button → TicketService creates ticket
              </li>
              <li>
                Bot creates private channel with permissions and logs creation
              </li>
              <li>
                Transcript generated on close and stored (S3/DB) with link
              </li>
            </ol>
          </section>

          <section id="commands" className="docs-section">
            <h2 className="headline-medium">Commands summary</h2>
            <p className="body-large">
              Commands are split across categories; here's a short summary of
              the most-used commands.
            </p>

            <div className="docs-grid">
              <div className="docs-card">
                <h3 className="title-small">Administration</h3>
                <ul className="body-medium">
                  <li>
                    <code>/config</code> — guild configuration
                  </li>
                  <li>
                    <code>/export</code> — export guild settings
                  </li>
                </ul>
              </div>

              <div className="docs-card">
                <h3 className="title-small">Ticketing</h3>
                <ul className="body-medium">
                  <li>
                    <code>/ticketpanel</code> — create interactive ticket panel
                  </li>
                  <li>
                    <code>/ticket</code> — manage a ticket (close, claim)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="development" className="docs-section">
            <h2 className="headline-medium">Development workflow</h2>
            <p className="body-large">
              Developer-friendly workflows: run the bot locally, use hot reload,
              and run unit/integration tests via Bun.
            </p>

            <h3 className="title-small">Recommended commands</h3>
            <pre className="docs-code">
              {`# install deps
bun install

# start dev server (hot reload)
bun run dev

# run typescript checks (if configured)
bun run tsc --noEmit
`}
            </pre>

            <h3 className="title-small">Local env tips</h3>
            <ul className="body-medium">
              <li>Use a dedicated dev Discord server for testing.</li>
              <li>
                Use a separate MongoDB database for dev tests to avoid data
                loss.
              </li>
            </ul>
          </section>

          <section id="testing" className="docs-section">
            <h2 className="headline-medium">Testing & Quality</h2>

            <p className="body-medium">
              Tests should cover command handlers, services, and critical flows.
              Use Bun's test runner or an existing framework and mock
              network/Discord interactions.
            </p>
          </section>

          <section id="deployment" className="docs-section">
            <h2 className="headline-medium">Deployment</h2>

            <p className="body-medium">
              The bot can be deployed to any host that supports Bun/Node.js. Use
              a process manager (systemd, or container orchestration) and ensure
              environment variables and secrets are managed securely.
            </p>

            <h3 className="title-small">Cloudflare Pages / Website</h3>
            <p className="body-medium">
              The website is a static React app — building via the existing
              scripts produces a `build/` directory ready for deployment to
              Pages or similar static hosts.
            </p>
          </section>

          <section id="troubleshooting" className="docs-section">
            <h2 className="headline-medium">Troubleshooting</h2>

            <ul className="body-medium">
              <li>
                <strong>Bot doesn't respond:</strong> Check the bot token,
                gateway intents, and DB connectivity.
              </li>
              <li>
                <strong>Ticket creation fails:</strong> Check channel & role
                permissioning for the bot (CREATE_INSTANT_INVITE,
                MANAGE_CHANNELS).
              </li>
              <li>
                <strong>Build fails:</strong> Clear caches:{" "}
                <code>rm -rf node_modules bun.lockb && bun install</code>.
              </li>
            </ul>
          </section>

          <section id="contributing" className="docs-section">
            <h2 className="headline-medium">Contributing</h2>

            <p className="body-medium">
              We welcome contributions. Follow these steps for a typical
              contribution:
            </p>

            <ol className="body-medium">
              <li>Fork the repo and create a feature branch.</li>
              <li>Run lint and tests locally before pushing.</li>
              <li>Open a PR with tests and a clear description.</li>
            </ol>
          </section>

          <section id="references" className="docs-section">
            <h2 className="headline-medium">References & links</h2>

            <div className="docs-grid" style={{ marginTop: 8 }}>
              <a
                href="https://bun.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="docs-card"
                title="Bun — runtime & package manager"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3 className="title-small">Bun</h3>
                <p className="body-medium">
                  Fast JavaScript runtime and package manager used by this
                  project for rapid installs and fast execution. See the
                  official site for installation and docs.
                </p>
              </a>

              <a
                href="https://discord.js.org"
                target="_blank"
                rel="noopener noreferrer"
                className="docs-card"
                title="discord.js — Discord API library"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3 className="title-small">discord.js</h3>
                <p className="body-medium">
                  The primary Discord library used for interactions, events, and
                  command handling (v14). Use the docs to learn about intents,
                  interactions, and gateway behavior.
                </p>
              </a>

              <a
                href="https://mongoosejs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="docs-card"
                title="Mongoose — MongoDB ORM"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3 className="title-small">Mongoose</h3>
                <p className="body-medium">
                  Schema-based modelling for MongoDB. The project uses
                  Mongoose-style schemas under <code>src/models</code> to store
                  guild settings, tickets, and other persistent data.
                </p>
              </a>

              <a
                href="https://github.com/kmmiio99o/Kaoruko-Bot-Next"
                target="_blank"
                rel="noopener noreferrer"
                className="docs-card"
                title="Project repository"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3 className="title-small">Repository</h3>
                <p className="body-medium">
                  Browse source, open issues, and view releases on GitHub. Use
                  the repository for contributing, issue reporting, and PR
                  history.
                </p>
              </a>
            </div>

            <div className="docs-note" style={{ marginTop: 12 }}>
              <strong>Helpful resources:</strong>
              <ul style={{ marginTop: 8 }}>
                <li>
                  <a
                    href="https://discord.com/developers/docs/intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "var(--md-sys-color-primary)",
                    }}
                  >
                    Discord Developer Docs
                  </a>{" "}
                  — authoritative Discord API reference (intents, rate limits).
                </li>
                <li>
                  <a
                    href="https://bun.sh/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "var(--md-sys-color-primary)",
                    }}
                  >
                    Bun docs
                  </a>{" "}
                  — Bun-specific build, run and package manager instructions.
                </li>
                <li>
                  <a
                    href="https://cloud.mongodb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "var(--md-sys-color-primary)",
                    }}
                  >
                    MongoDB Atlas
                  </a>{" "}
                  — managed MongoDB hosting if you prefer not to self-host.
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Docs;

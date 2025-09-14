# Kaoruko Website

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.5-blue?style=for-the-badge&logo=typescript)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-orange?style=for-the-badge&logo=cloudflare)

A modern, responsive personal website built with React 18 and TypeScript, deployed on Cloudflare Pages for optimal performance and global content delivery.

## ✨ Features

- Modern React 18 with TypeScript
- Responsive design
- Fast deployment with Cloudflare Pages
- React Router for seamless navigation
- Optimized production builds

## 🚀 Quick Start

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kmmiio99o/Kaoruko-Website.git
cd Kaoruko-Website
```

2. Install dependencies:
```bash
npm install
```

## 🛠 Development

Start the development server:

```bash
npm start
```

This will run the app in development mode at [http://localhost:3000](http://localhost:3000).

## 📦 Building for Production

Create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 🌐 Deployment

Deploy to Cloudflare Pages:

```bash
npx wrangler deploy
```

## 📁 Project Structure

```
Kaoruko-Website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── styles/        # CSS modules
│   ├── utils/         # Helper functions
│   ├── App.tsx        # Main App component
│   └── index.tsx      # Entry point
├── package.json
├── tsconfig.json
└── wrangler.toml
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Creates production build |
| `npm test` | Launches the test runner |
| `npx wrangler deploy` | Deploys to Cloudflare Pages |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
Made with ❤️ using React and TypeScript
</div>

# Netflix Style Portfolio

A modern portfolio website with a Netflix-inspired UI, built with React, TypeScript, and Vite.

## Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Vercel CLI (optional, for local deployment testing)

## Getting Started

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd Portfolio-netflix
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`
   ```bash
   cp .env.example .env
   ```
   Update the environment variables in the `.env` file as needed.

4. Start the development server
   ```bash
   npm run dev
   ```

## Building for Production

```bash
npm run build
```

This will create a production build in the `dist` directory.

## Deployment

This project is configured for deployment on Vercel. Follow these steps to deploy:

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Import the repository to Vercel
3. Vercel will automatically detect the framework and configure the build settings
4. Add your environment variables in the Vercel project settings
5. Deploy!

### Manual Deployment with Vercel CLI

1. Install Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. Login to your Vercel account
   ```bash
   vercel login
   ```

3. Deploy
   ```bash
   vercel
   ```

## Environment Variables

See `.env.example` for a list of required environment variables.

## Project Structure

- `/client` - Frontend React application
- `/server` - Backend Express server
- `/shared` - Shared code between frontend and backend
- `/public` - Static files

## License

MIT

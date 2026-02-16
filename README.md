# Next.js Portfolio Website

This is a personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Three.js.

## Features

- Responsive design with dark/light theme support
- 3D computer model using Three.js
- Smooth animations and transitions
- Modern UI with gradient effects
- Mobile-friendly navigation

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"

The project is already configured with `vercel.json` for proper deployment.

### Environment Variables

If you have any environment variables, add them in your Vercel project settings.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Project Structure

```
src/
├── app/              # Next.js 14 app directory
├── components/       # React components
├── data/             # Static data and assets
├── lib/              # Utility functions
├── provider/         # Context providers
└── style/            # CSS and styling
```
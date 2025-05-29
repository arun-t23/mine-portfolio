// This script ensures the build process works correctly on Vercel
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Vercel build process...');

try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Build the application
  console.log('Building application...');
  execSync('npm run build', { stdio: 'inherit' });

  // Verify the build output
  const distDir = path.join(process.cwd(), 'dist');
  const publicDir = path.join(distDir, 'public');
  
  if (!fs.existsSync(distDir)) {
    throw new Error('Build failed: dist directory not found');
  }
  
  if (!fs.existsSync(publicDir)) {
    throw new Error('Build failed: public directory not found in dist');
  }

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

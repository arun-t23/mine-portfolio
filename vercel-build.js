import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

console.log('Starting Vercel build process...');

try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Run the build script
  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

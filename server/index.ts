import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Determine the correct path for static files
const isVercel = process.env.VERCEL === '1';
const publicPath = isVercel 
  ? path.join(__dirname, '../client/dist') 
  : path.join(__dirname, '../dist/public');

console.log(`Serving static files from: ${publicPath}`);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(publicPath, {
  etag: true,
  maxAge: '1y',
  immutable: true
}));

// API routes would go here
// Example: app.use('/api', apiRouter);

// Handle SPA routing - serve index.html for all routes
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' ? 'Something went wrong!' : err.message
  });
});

// Start the server only if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Static files served from: ${publicPath}`);
  });
}

export default app;

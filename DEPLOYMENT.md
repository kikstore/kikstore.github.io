# Deployment to GitHub Pages (kikstore.github.io)

This project is configured to automatically deploy to GitHub Pages at `https://kikstore.github.io/`.

## Automatic Deployment

The repository includes a GitHub Actions workflow that automatically deploys the application when you push to the `main` branch.

### Setup Instructions

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "add: GitHub Pages deployment configuration"
   git push origin main
   ```

2. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"
   - Enable "Read and write permissions" in Actions → General → Workflow permissions

3. **Monitor Deployment:**
   - Check the Actions tab to see deployment progress
   - Once complete, your site will be available at: `https://kikstore.github.io/`

## Manual Build

To build the project for GitHub Pages manually:

```bash
npm run build:github
```

This creates a production build in the `dist` folder with the correct base path for GitHub Pages.

## Configuration Details

- **Router**: Uses HashRouter to avoid 404 issues with client-side routing
- **Base Path**: Configured as `/` for kikstore.github.io deployment
- **Build Tool**: Vite with React and TypeScript
- **Deployment**: GitHub Actions workflow with automatic deployment

## Local Development

For local development, the application runs on `http://localhost:5000` with standard React Router functionality.

```bash
npm run dev
```
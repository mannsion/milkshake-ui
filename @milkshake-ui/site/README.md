# Milkshake UI Site

A modern, type-safe UI framework built with SvelteKit and vanilla-extract.

## 🐳 Docker Deployment

### Build Docker Image
```bash
# Build the Docker image
docker build -t milkshake-ui-site .

# Run the container
docker run -p 3000:3000 milkshake-ui-site
```

### Using Docker Compose
```bash
# Start with docker-compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Push to Docker Registry
```bash
# Tag the image
docker tag milkshake-ui-site your-registry.com/milkshake-ui-site:latest

# Push to registry
docker push your-registry.com/milkshake-ui-site:latest
```

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
site/
├── src/
│   ├── routes/          # SvelteKit routes
│   ├── lib/            # Shared components and utilities
│   └── app.html        # HTML template
├── static/             # Static assets
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose setup
└── package.json        # Dependencies and scripts
```

## 🎨 Features

- **Type-Safe Styling** with vanilla-extract
- **Server-Side Rendering** with SvelteKit
- **Modern Design System** with professional color palette
- **Responsive Components** with sprinkles API
- **Theme Support** (Light/Dark modes)

Built with ❤️ using SvelteKit, vanilla-extract, and modern web technologies.
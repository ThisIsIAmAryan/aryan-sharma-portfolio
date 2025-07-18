# Portfolio Website - React & Express Application

## Overview

This is a modern portfolio website built with React frontend and Express backend, showcasing Aryan Sharma's web development skills, projects, and professional experience. The application uses a full-stack architecture with TypeScript, modern UI components, and PostgreSQL database integration. Ready for deployment on Vercel with GitHub integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between frontend and backend:

- **Frontend**: React with TypeScript, built with Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack React Query for server state

### Directory Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # React components including UI library
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and constants
├── server/                # Express backend
├── shared/                # Shared types and schemas
└── migrations/            # Database migration files
```

## Key Components

### Frontend Architecture
- **Component Library**: Custom implementation using Radix UI primitives with shadcn/ui
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite with React plugin and development enhancements

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with type-safe database operations
- **Request Handling**: JSON body parsing with error handling middleware
- **Development**: Hot reloading with Vite integration in development mode

### Database Schema
The application uses two main tables:
- **users**: Basic user management (id, username, password)
- **contacts**: Contact form submissions (id, name, email, subject, message, createdAt)

### UI Components
Comprehensive component library including:
- Form components (Input, Textarea, Button, Label)
- Layout components (Card, Navigation, Footer)
- Interactive components (Dialog, Dropdown, Toast)
- Data display components (Badge, Progress, Table)

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form in React frontend
   - Form data validated using Zod schemas
   - API request sent to `/api/contact` endpoint
   - Express server validates and stores data using Drizzle ORM
   - Success/error feedback provided via toast notifications

2. **Portfolio Display**:
   - Static content rendered from constants file
   - Smooth scrolling navigation between sections
   - Responsive design with mobile-first approach
   - Dark theme implementation with CSS variables

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Headless UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Production build bundling

## Deployment Strategy

### Development
- Frontend served by Vite development server with HMR
- Backend runs with tsx for TypeScript execution
- Database migrations handled via `drizzle-kit push`

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Single Node.js process serves both static files and API endpoints

### Database Management
- PostgreSQL database with connection via environment variable `DATABASE_URL`
- Schema migrations managed through Drizzle Kit
- Type-safe database operations with automatic TypeScript generation

### Key Architectural Decisions

1. **Monorepo Structure**: Chosen for code sharing between frontend/backend and simplified deployment
2. **Drizzle ORM**: Selected for type safety and PostgreSQL compatibility over traditional ORMs
3. **Vite for Frontend**: Provides fast development experience and optimized production builds
4. **PostgreSQL Database**: Full database integration with contact form storage and user management
5. **shadcn/ui Components**: Provides consistent, accessible UI components with full customization control
6. **CSS Variables for Theming**: Enables dynamic theming while maintaining performance
7. **Icon Integration**: Technology skills displayed with respective icons using react-icons library

## Recent Changes

- **January 2025**: Updated skills section to display technology icons instead of progress bars
- **January 2025**: Added PostgreSQL database integration with contact form storage
- **January 2025**: Fixed icon consistency issues and mobile responsiveness
- **January 2025**: Implemented fallback system for missing icons using Lucide React
- **January 2025**: Ready for GitHub deployment and Vercel hosting
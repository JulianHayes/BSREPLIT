# BRAND:SCHEMA - AI-Optimized Brand Systems Platform

## Overview

BRAND:SCHEMA is a brutalist, semantic-first brand systems platform designed to help brands become parseable and visible in the age of AI. The application provides modular AI agents that assist users in structuring their brand identities for machine-mediated interactions, featuring a tactical, protocol-style interface with a focus on structured data and semantic optimization.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **UI Framework**: Radix UI with shadcn/ui components
- **Styling**: Tailwind CSS with custom brutalist design system
- **State Management**: React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database serverless
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### Design System
- **Style**: Brutalist, tactical interface inspired by developer tools
- **Typography**: Monospace fonts (Space Mono, JetBrains Mono)
- **Color Scheme**: Neutral base with red accent (hsl(0, 93%, 51%))
- **Theme**: Light/dark mode support with CSS custom properties
- **Layout**: Grid-based tactical layout system

## Key Components

### Core Pages
- **Home**: Landing page with hero section, problem/solution presentation, and agent showcase
- **Navigation**: Fixed header with smooth scrolling navigation
- **Agent Cards**: Interactive cards for each AI agent with engagement functionality
- **Manifesto**: Brand philosophy and principles presentation
- **Toolkit**: Access to brand schema building tools

### AI Agent System
Four specialized agents for brand structure optimization:
1. **Brand Strategy Agent**: Vision, purpose, and architecture structuring
2. **Brand Management Agent**: Asset alignment, governance, and taxonomy
3. **Brand Marketing Agent**: Semantic campaigns and LLM-ready messaging
4. **Brand Intelligence Agent**: Visibility monitoring and prompt response analysis

### UI Components
- Custom brutalist components built on Radix UI primitives
- Comprehensive component library including forms, dialogs, navigation, and data display
- Toast notifications for user feedback
- Responsive design with mobile-first approach

## Data Flow

### User Journey
1. Users land on tactical-styled homepage with manifesto and problem statement
2. Interactive navigation guides through agent capabilities and toolkit access
3. Agent cards provide engagement points for brand schema building
4. Toolkit sections offer downloadable resources and framework access

### State Management
- React Query manages server state and API interactions
- Local component state for UI interactions and form handling
- Toast system for user feedback and notifications
- Session-based authentication (infrastructure ready)

### Data Schema
- User management system with PostgreSQL backend
- Drizzle ORM for type-safe database operations
- Zod integration for runtime validation
- Prepared for brand schema storage and agent interactions

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for server
- **@replit/vite-plugin-***: Replit-specific development enhancements

### UI and Styling
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class names
- **date-fns**: Date manipulation utilities
- **lucide-react**: Icon library

## Deployment Strategy

### Development
- Vite development server with hot reload
- TypeScript compilation checking
- Replit-optimized development environment
- Server-side rendering preparation

### Production Build
- Vite builds frontend to `dist/public`
- esbuild compiles server to `dist/index.js`
- Static file serving from built assets
- Express server serves both API and static files

### Database
- PostgreSQL with Drizzle migrations
- Environment variable configuration
- Connection pooling with Neon serverless
- Session store integration

### Environment Configuration
- `NODE_ENV` for environment detection
- `DATABASE_URL` for database connection
- Production-ready with environment-specific optimizations

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
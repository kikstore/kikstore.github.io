# Overview

Luxe is a premium e-commerce website for luxury fashion and lifestyle products. Built as a React SPA using Vite, it features a sophisticated design system with a navy blue and gold color palette to convey luxury and elegance. The application showcases collections of handbags, jewelry, accessories, and fragrances with a focus on high-end user experience and responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds  
- **Routing**: React Router DOM for client-side navigation with dedicated pages for shop, collections, about, contact, and informational content
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design tokens for the luxury brand aesthetic
- **State Management**: TanStack Query for server state and React hooks for local state

## Design System
- **Color Palette**: Premium navy blue primary colors with luxury gold accents
- **Typography**: Inter font family for clean, modern readability
- **Components**: Reusable UI components including ProductCard, ProductGrid, Navigation, Hero, and Footer
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animations**: Smooth transitions and hover effects to enhance user experience

## Page Structure
- **Home Page**: Hero section with call-to-action and featured product grid
- **Shop Page**: Product catalog with filtering and sorting capabilities
- **Collections Page**: Curated product collections (Summer Elegance, Classic Timeless, etc.)
- **Informational Pages**: About, Contact, Size Guide, Shipping, Returns, and FAQ
- **404 Handling**: Custom NotFound component for unmatched routes

## Component Architecture
- **Layout Components**: Navigation header and Footer with newsletter signup
- **Product Components**: ProductCard with hover effects, rating display, and action buttons
- **UI Components**: Comprehensive set from Shadcn including forms, modals, tooltips, and data tables
- **Utility Components**: Custom hooks for mobile detection and toast notifications

## Development Features
- **TypeScript Configuration**: Relaxed strictness for rapid development while maintaining type safety
- **ESLint**: Code quality enforcement with React-specific rules
- **Hot Reload**: Development server with instant updates
- **Build Optimization**: Production builds with code splitting and asset optimization

# External Dependencies

## Core Libraries
- **React**: Frontend framework with hooks and context
- **React Router**: Client-side routing and navigation
- **TypeScript**: Static typing for JavaScript
- **Vite**: Build tool and development server

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Component variant management
- **Embla Carousel**: Touch-friendly carousel component

## State and Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Date-fns**: Date manipulation utilities

## Development Tools
- **PostCSS**: CSS processing with Autoprefixer
- **ESLint**: Code linting and quality assurance
- **Lovable Tagger**: Development-time component tagging (development mode only)

## Hosting and Deployment
- **Platform**: Designed for deployment on Lovable's hosting platform
- **Assets**: Static images and resources served from public directory
- **SEO**: Meta tags, Open Graph, and Twitter Card support for social sharing
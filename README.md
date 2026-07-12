# AR.LAWN - Luxury Fabrics & Premium Brands (Project Memory)

This document serves as the absolute "Project State & Memory" for the AI Agent. It details the architecture, folders, completed work, and pending tasks so that any context window refresh can instantly catch up with the project.

## 🛠 Tech Stack
- **Framework:** Next.js 16.2 (App Router, Turbopack)
- **Styling:** Vanilla CSS Modules (`.module.css`), custom luxury design system
- **Database:** Neon Serverless PostgreSQL
- **ORM:** Prisma (`prisma/schema.prisma`)
- **Image Storage:** Cloudinary (for future Admin uploads)
- **State Management:** React Context (`CartContext` using localStorage)
- **Deployment:** Vercel

## 📂 Folder Structure & Files
- `/app` - Next.js App Router core
  - `/api/products/route.js` - GET all products (Live Neon DB)
  - `/api/products/[id]/route.js` - GET single product by UUID
  - `/api/checkout/route.js` - POST endpoint to place orders
  - `/cart/page.js` - Dynamic shopping cart
  - `/checkout/page.js` - Checkout form and order summary
  - `/collections/page.js`, `/new-arrivals/page.js`, `/sale/page.js` - Grids fetching live DB data
  - `/product/[id]/page.js` - Dynamic product details page
  - `globals.css` - Global design tokens (fonts, colors, animations)
- `/components` - React Components
  - `/layout/Navbar.js` & `Footer.js` - Main site navigation
  - `/sections/...` - Homepage sections (BestSellers, Features, TrustBadges, etc.)
  - `/ui/ScrollReveal.js` - Scroll animation wrapper
- `/context/CartContext.js` - Global state for Cart items
- `/prisma` - Database configuration
  - `schema.prisma` - Contains `Product` and `Order` models
  - `seed.js` - Script to populate dummy products

## ✅ Completed Work (Phase 1, 2, 3)
1. **Frontend UI:** Built a highly premium, animated UI without Tailwind.
2. **Database Connection:** Hooked up Neon Postgres using Prisma.
3. **Frontend-Backend Integration:** 
   - All product sliders and grids now fetch live data from Neon.
   - Cart system works perfectly, adding items updates the Navbar counter and calculates totals.
   - Product detail pages load dynamically based on the DB ID.
4. **Bug Fixes & Polish:**
   - Fixed Vercel Prisma Caching (added `prisma generate` to build script).
   - Fixed Vercel Static API Caching (added `force-dynamic` to all product APIs).
   - Upgraded Social Icons and Trust Badges to premium SVGs with colored backgrounds.

## ⏳ Pending / Next Tasks (Phase 4)
**Admin Dashboard (To Do)**
- Create a secure `/admin` route.
- Allow admin to view placed `Orders` from the database.
- Allow admin to Add, Edit, and Delete `Products` directly from the dashboard.
- Integrate Cloudinary API in the admin panel so uploaded product images are hosted on Cloudinary and their URLs are saved to Neon.

## 🔑 Environment Variables
```env
DATABASE_URL="..."
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

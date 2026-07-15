# Browser Supply — Homepage Clone

Clone homepage dari situs referensi [browser.supply](https://browser.supply/) menggunakan **Next.js**.

## 🚀 Live Demo & Repository

- **Live URL (Vercel)**: `https://clonebrowsersupply-kappa.vercel.app/`
- **Repository**: `https://github.com/dyanta13/clone.browser.supply`

---

## 📁 Project Folder Structure

Below is the automated, scalable architecture used in this Next.js project:

```text
├── app/
│   ├── Blogs/
│   │   ├── BlogsLayout.tsx
│   │   └── page.tsx
│   ├── Livetemplates/
│   │   ├── LivetemplatesLayout.tsx
│   │   └── page.tsx
│   ├── Support/
│   │   ├── page.tsx
│   │   └── SupportLayout.tsx
│   ├── favicon.avif
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
|── assets/
|   └── fonts/
|
├── components/
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Main.tsx
│   │   ├── PricingSection.tsx
│   │   └── Recommendations.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── Navbar.tsx
│   └── pages/
│       ├── Blogs.tsx
│       ├── ContactForm.tsx
│       ├── Faqs.tsx
│       ├── Livetemplates.tsx
│       └── Support.tsx
│
├── data/
│   ├── Blogs.ts
│   ├── Faqs.ts
│   ├── Footer.ts
│   ├── LiveTemplates.ts
│   ├── navigation.ts
│   └── Template.ts
│
├── public/
│   ├── image/
│   └── video/
│
├── styles/
│   ├── LazyVideo.tsx
│   ├── ScrollReveal.tsx
│   └── SmoothScroll.tsx
│
├── next.config.ts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 🛠️ Technical Q&A Documentation

### 1. Scalable JSON Structure
* **Split by Feature:** Separated into small files (e.g., `blogs.json`, `faqs.json`) instead of one giant file.
* **Pagination Metadata:** Wrapped in a root object to natively support sorting and loading limits.
```json
{
  "version": "1.0",
  "metadata": { "totalItems": 42, "page": 1 },
  "data": [{ "id": 1, "title": "MERAAS", "client": "Paul" }]
}
```

### 2. Custom API Tech Stack
* **Next.js Route Handlers:** No separate backend server needed; runs serverless on Vercel (saves cost and deployment time).
* **Prisma ORM & TypeScript:** Ensures strict type safety from the database to frontend components, catching bugs early.

### 3. Vercel Custom Domain Configuration
1. **Vercel:** Add `www.clientwebsite.com` in *Project Settings > Domains*.
2. **DNS Provider:**
   * Add **CNAME** record for `www` pointing to `cname.vercel-dns.com.`
   * Add **A** record for `@` pointing to `76.76.21.21` (if needed for apex domain redirection).

### 4. Admin Panel Strategy
* **Headless CMS (Recommended):** Use **Sanity.io** or **Strapi** to fetch content via API. It's fast, secure, and user-friendly for clients.
* **Custom Build:** NextAuth.js (auth), Shadcn UI (components), and PostgreSQL with Prisma.

### 5. Slow Internet Optimization
* **Lazy Loading:** Components like `LazyVideo` only download assets when they scroll into view.
* **Next.js `<Image>`:** Automatically converts formats to `.webp`/`.avif` and resizes them based on screen size.
* **Code Splitting:** Next.js splits JavaScript code per page so browsers only load what is currently needed.

### 6. Secure Form Data Transmission
* **HTTPS Only:** Fully encrypts data in transit to prevent interception.
* **CORS & CSRF:** Restricts API execution to only accept payloads from your exact domain.
* **Server-side Validation:** Uses **Zod** schema validation on the backend to block SQL Injection and malicious code input.

### 7. Quality-Preserving Image Optimization
* **Modern Formats:** Swapping PNG/JPG with **WebP/AVIF** to reduce file sizes by up to 70% with zero visible quality loss.
* **Responsive `srcSet`:** Servers deliver small resolution images to phones and full resolution images only to 4K desktops.
* **Blur-up Placeholders:** Shows a tiny blurred image while the real file downloads, completely preventing layout shifting (CLS).

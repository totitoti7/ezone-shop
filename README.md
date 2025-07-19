# Ezone Shop (Interview Task)

## Overview

Ezone Shop is a modern, production-ready e-commerce demo built with **Next.js 15 (App Router)** and **React 19**. This project demonstrates best practices in server-side rendering, SEO, code quality, and maintainability. It was developed as a technical task for an interview and is designed to be easy to set up, run, and review.

## 📂 Demo Video

A demo video is available in the `docs` folder. Please navigate there to view the project demonstration.

---

## 🚀 Project Highlights

- **Next.js 15 App Router**: Uses the latest routing and server component features for optimal SEO and performance.
- **React 19**: Leverages the newest React features for maintainable, modern code.
- **Server Components by Default**: Data fetching and rendering are server-side for SEO and fast initial loads.
- **Client Components Only Where Needed**: Interactivity (e.g., image carousel, color/size pickers) is isolated to client components for best performance.
- **Dynamic API Integration**: Fetches `sId` and product data from real APIs, with dynamic Referer header handling for security and correctness.
- **Environment Variables**: All secrets and URLs are managed via `.env.local` for security and flexibility.
- **Comprehensive Testing**: Includes unit and integration tests with Jest and Testing Library.
- **Strict Linting & Formatting**: Enforced code quality with ESLint and Prettier.
- **Production-Ready**: No console logs, robust error handling, and all images have valid `alt` attributes.
- **Easy Deployment**: Ready for Vercel or any modern platform.

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SHOP_API_URL=https://shop-api-test-v2.ezone.ly/shop/getRequestShopId
NEXT_PUBLIC_IMAGEKIT_URL=https://ik.imagekit.io/a01bjbmceb/Prods/
```

### 4. Run the Development Server

```bash
npm run dev
```

- The app will be available at [http://localhost:58961](http://localhost:58961) (ensure you use this port for API compatibility).

### 5. Run Tests

```bash
npm run test
```

### 6. Lint and Format Code

```bash
npm run lint
npm run format
```

### 7. Build for Production

```bash
npm run build
```

### 8. Running Lighthouse Audits

To analyze your app's performance, accessibility, SEO, and best practices, you can use [Lighthouse](https://developers.google.com/web/tools/lighthouse):

```sh
npx lighthouse http://localhost:58961 --view
```

This command will run a Lighthouse audit on your local development server and open a detailed report in your browser.

**Why is this useful for e-commerce?**
- Lighthouse helps you identify and fix issues that impact site speed, accessibility, and SEO—all of which are critical for e-commerce success.
- Fast, accessible, and well-optimized stores lead to higher conversion rates, better user experience, and improved search engine rankings.

---

## 🧑‍💻 Technical Approach

- **Server Components**: All data fetching (shop ID, product details) is performed server-side for SEO and performance.
- **Dynamic Routing**: Uses `/app/product/[id]/page.tsx` for dynamic product detail pages.
- **Global State via Cookies**: The `sId` is fetched on the home page and stored in a cookie for use across the app.
- **Dynamic Referer Header**: The Referer is set dynamically using the current host/port for API requests, as required by the backend.
- **Client Components for Interactivity**: Only interactive UI elements (like carousels or pickers) use client components and React hooks.
- **Testing**: Jest and Testing Library are set up for robust unit and integration testing. `next/image` is mocked for test compatibility.
- **Error Handling**: Defensive checks for API responses and custom error pages are implemented.

---

## ✅ Production Checklist

- [x] No `console.log` in production code
- [x] All API URLs and secrets in environment variables
- [x] Error boundaries and custom error pages
- [x] Defensive checks for API responses
- [x] Linting and formatting enforced
- [x] All images have valid `alt` attributes
- [x] All tests pass (`npm run test`)

---

## 🚚 Deployment

- **Recommended:** Vercel (zero-config for Next.js)
- Set environment variables in your deployment platform
- CI/CD ready for automated builds and tests

---

## 🛠️ Troubleshooting

- **API Issues:** Ensure `.env.local` is present and the port matches `http://localhost:58961`.
- **Test Failures:** If tests fail due to `next/image`, check the mock in `__mocks__/next-image.js` and Jest config.
- **Build/Test Separation:** Babel config is isolated to `/test-config` for Jest only; Next.js uses SWC.

---

## 🙋‍♂️ Support

For questions or issues, please open a GitHub issue or contact the developer.

---

**Thank you for reviewing this project! It demonstrates my ability to build scalable, maintainable, and production-ready React/Next.js applications with a strong focus on best practices and real-world requirements.**

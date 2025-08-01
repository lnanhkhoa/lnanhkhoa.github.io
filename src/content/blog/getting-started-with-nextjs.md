---
title: "Getting Started with Next.js: A Complete Guide"
excerpt: "Learn how to build modern web applications with Next.js, from setup to deployment. Perfect for developers new to the framework."
date: "2024-07-20"
readTime: "6 min read"
tags: ["Next.js", "React", "JavaScript", "Web Development"]
featured: true
---

# Getting Started with Next.js: A Complete Guide

Next.js has become one of the most popular React frameworks for building modern web applications. In this comprehensive guide, we'll explore everything you need to know to get started with Next.js.

## What is Next.js?

Next.js is a React framework that provides a complete solution for building web applications. It offers:

- **Server-Side Rendering (SSR)** - Better SEO and performance
- **Static Site Generation (SSG)** - Pre-built pages for lightning-fast loading
- **API Routes** - Build your backend alongside your frontend
- **File-based Routing** - No need for complex routing configuration
- **Built-in CSS Support** - Including CSS Modules and Sass
- **Image Optimization** - Automatic image optimization and lazy loading

## Setting Up Your First Next.js Project

Getting started is incredibly simple:

```bash
# Create a new Next.js app
npx create-next-app@latest my-nextjs-app

# Navigate to your project
cd my-nextjs-app

# Start the development server
npm run dev
```

Your application will be available at `http://localhost:3000`.

## Project Structure

A typical Next.js project structure looks like this:

```
my-nextjs-app/
├── pages/
│   ├── api/
│   ├── _app.js
│   └── index.js
├── public/
├── styles/
├── components/
├── package.json
└── next.config.js
```

### Key Directories:

- **`pages/`** - Contains your application routes
- **`public/`** - Static assets like images and icons
- **`styles/`** - CSS files and stylesheets
- **`components/`** - Reusable React components

## File-Based Routing

One of Next.js's best features is its file-based routing system:

```javascript
// pages/index.js → /
// pages/about.js → /about
// pages/blog/index.js → /blog
// pages/blog/[slug].js → /blog/:slug
// pages/api/users.js → /api/users
```

### Dynamic Routes

Create dynamic routes using square brackets:

```javascript
// pages/blog/[slug].js
import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query

  return <h1>Post: {slug}</h1>
}
```

## Data Fetching

Next.js provides several methods for fetching data:

### getStaticProps (SSG)

For static generation at build time:

```javascript
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Regenerate the page at most once per day
    revalidate: 86400,
  }
}

export default function Blog({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
```

### getServerSideProps (SSR)

For server-side rendering on each request:

```javascript
export async function getServerSideProps(context) {
  const { params } = context
  const res = await fetch(`https://api.example.com/posts/${params.id}`)
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}
```

## API Routes

Build your backend API alongside your frontend:

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello, World!' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
```

## Styling Options

Next.js supports various styling approaches:

### CSS Modules

```javascript
// components/Button.module.css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}

// components/Button.js
import styles from './Button.module.css'

export default function Button({ children }) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}
```

### Styled JSX

```javascript
export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <style jsx>{`
        h1 {
          color: blue;
          font-size: 2rem;
        }
      `}</style>
    </div>
  )
}
```

## Image Optimization

Next.js provides automatic image optimization:

```javascript
import Image from 'next/image'

export default function Profile() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile Picture"
      width={500}
      height={500}
      priority // Load image with high priority
    />
  )
}
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy Next.js apps:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

Next.js can be deployed to:
- **Netlify** - Static and serverless
- **AWS** - Using Serverless Framework
- **Docker** - Containerized deployment
- **Traditional hosting** - Export as static files

## Best Practices

### 1. Use TypeScript

```bash
# Add TypeScript to existing project
npm install --save-dev typescript @types/react @types/node

# Rename files to .tsx/.ts
# Next.js will automatically configure TypeScript
```

### 2. Optimize Images

Always use the `next/image` component for better performance:

```javascript
import Image from 'next/image'

// Good
<Image src="/hero.jpg" alt="Hero" width={800} height={400} />

// Avoid
<img src="/hero.jpg" alt="Hero" />
```

### 3. Use Dynamic Imports

Reduce bundle size with code splitting:

```javascript
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/Heavy'), {
  loading: () => <p>Loading...</p>,
})
```

### 4. Configure next.config.js

Customize your Next.js configuration:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
```

## Common Patterns

### Layout Component

Create a reusable layout:

```javascript
// components/Layout.js
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title = 'My App' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My awesome Next.js app" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

// pages/_app.js
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
```

## Conclusion

Next.js provides an excellent foundation for building modern React applications. Its built-in features like SSR, SSG, and API routes make it perfect for everything from simple websites to complex web applications.

**Key takeaways:**

1. **File-based routing** simplifies navigation
2. **Multiple rendering options** (SSR, SSG, CSR) for different use cases
3. **Built-in optimizations** for images, fonts, and performance
4. **Great developer experience** with hot reloading and TypeScript support
5. **Easy deployment** especially with Vercel

Start with a simple project and gradually explore more advanced features as you become comfortable with the framework. Happy coding!

## Next Steps

- Explore the [Next.js documentation](https://nextjs.org/docs)
- Try building a blog or portfolio site
- Learn about the new App Router (Next.js 13+)
- Experiment with different deployment platforms

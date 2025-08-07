import{c as p}from"./index-f0c0e91b.js";const k=p("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),C=p("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),d=`---
title: "Building a Portfolio with React and Vite"
excerpt: "Add a compelling description of your post here..."
date: "2025-08-01"
readTime: "5 min read"
tags: ["Tag1", "Tag2", "Tag3"]
featured: false
---

# Building a Portfolio with React and Vite

Write your introduction here...

## Main Section

Add your main content here. You can use:

- **Bold text**
- *Italic text*
- \`inline code\`
- [Links](https://example.com)

### Code Blocks

\`\`\`javascript
function example() {
  console.log('Hello, world!')
}
\`\`\`

### Lists

1. First item
2. Second item
3. Third item

Or bullet points:

- Point one
- Point two
- Point three

## Conclusion

Wrap up your post here...

**Key takeaways:**
1. Point one
2. Point two
3. Point three
`,m=`---
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

\`\`\`bash
# Create a new Next.js app
npx create-next-app@latest my-nextjs-app

# Navigate to your project
cd my-nextjs-app

# Start the development server
npm run dev
\`\`\`

Your application will be available at \`http://localhost:3000\`.

## Project Structure

A typical Next.js project structure looks like this:

\`\`\`
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
\`\`\`

### Key Directories:

- **\`pages/\`** - Contains your application routes
- **\`public/\`** - Static assets like images and icons
- **\`styles/\`** - CSS files and stylesheets
- **\`components/\`** - Reusable React components

## File-Based Routing

One of Next.js's best features is its file-based routing system:

\`\`\`javascript
// pages/index.js → /
// pages/about.js → /about
// pages/blog/index.js → /blog
// pages/blog/[slug].js → /blog/:slug
// pages/api/users.js → /api/users
\`\`\`

### Dynamic Routes

Create dynamic routes using square brackets:

\`\`\`javascript
// pages/blog/[slug].js
import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query

  return <h1>Post: {slug}</h1>
}
\`\`\`

## Data Fetching

Next.js provides several methods for fetching data:

### getStaticProps (SSG)

For static generation at build time:

\`\`\`javascript
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
\`\`\`

### getServerSideProps (SSR)

For server-side rendering on each request:

\`\`\`javascript
export async function getServerSideProps(context) {
  const { params } = context
  const res = await fetch(\`https://api.example.com/posts/\${params.id}\`)
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}
\`\`\`

## API Routes

Build your backend API alongside your frontend:

\`\`\`javascript
// pages/api/hello.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello, World!' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
\`\`\`

## Styling Options

Next.js supports various styling approaches:

### CSS Modules

\`\`\`javascript
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
\`\`\`

### Styled JSX

\`\`\`javascript
export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <style jsx>{\`
        h1 {
          color: blue;
          font-size: 2rem;
        }
      \`}</style>
    </div>
  )
}
\`\`\`

## Image Optimization

Next.js provides automatic image optimization:

\`\`\`javascript
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
\`\`\`

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

\`\`\`bash
# Add TypeScript to existing project
npm install --save-dev typescript @types/react @types/node

# Rename files to .tsx/.ts
# Next.js will automatically configure TypeScript
\`\`\`

### 2. Optimize Images

Always use the \`next/image\` component for better performance:

\`\`\`javascript
import Image from 'next/image'

// Good
<Image src="/hero.jpg" alt="Hero" width={800} height={400} />

// Avoid
<img src="/hero.jpg" alt="Hero" />
\`\`\`

### 3. Use Dynamic Imports

Reduce bundle size with code splitting:

\`\`\`javascript
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/Heavy'), {
  loading: () => <p>Loading...</p>,
})
\`\`\`

### 4. Configure next.config.js

Customize your Next.js configuration:

\`\`\`javascript
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
\`\`\`

## Common Patterns

### Layout Component

Create a reusable layout:

\`\`\`javascript
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
\`\`\`

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
`,g=`---
title: "The Power of React Hooks: Beyond useState and useEffect"
excerpt: "Exploring advanced React hooks and creating custom hooks to solve common problems in React applications."
date: "2024-07-05"
readTime: "8 min read"
tags: ["React", "Hooks", "JavaScript", "Performance"]
featured: true
---

# The Power of React Hooks: Beyond useState and useEffect

React Hooks have transformed how we write React components. Let's explore some advanced hooks and create custom ones to solve common problems.

## useReducer for Complex State

When \`useState\` isn't enough, \`useReducer\` provides a more predictable state management pattern:

\`\`\`jsx
const initialState = { 
  count: 0, 
  loading: false,
  error: null 
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'setLoading':
      return { ...state, loading: action.payload }
    case 'setError':
      return { ...state, error: action.payload, loading: false }
    case 'reset':
      return initialState
    default:
      throw new Error(\`Unknown action: \${action.type}\`)
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleIncrement = () => {
    dispatch({ type: 'setLoading', payload: true })
    // Simulate async operation
    setTimeout(() => {
      dispatch({ type: 'increment' })
      dispatch({ type: 'setLoading', payload: false })
    }, 500)
  }
  
  return (
    <div>
      <p>Count: {state.count}</p>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <button onClick={handleIncrement} disabled={state.loading}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  )
}
\`\`\`

## Custom Hooks

Creating reusable logic with custom hooks:

### useLocalStorage Hook

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":\`, error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error)
    }
  }

  return [storedValue, setValue]
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  )
}
\`\`\`

### useFetch Hook

\`\`\`jsx
function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(url, {
          ...options,
          signal: abortController.signal
        })
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`)
        }
        
        const result = await response.json()
        setData(result)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => abortController.abort()
  }, [url])

  return { data, loading, error }
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`)
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!user) return <div>No user found</div>
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
\`\`\`

## useCallback and useMemo

Optimizing performance with memoization:

\`\`\`jsx
function ExpensiveComponent({ items, onItemClick, filter }) {
  // Memoize expensive calculations
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...')
    return items
      .filter(item => item.category === filter)
      .reduce((acc, item) => acc + item.value, 0)
  }, [items, filter])

  // Memoize event handlers to prevent unnecessary re-renders
  const handleClick = useCallback((item) => {
    onItemClick(item.id, item.name)
  }, [onItemClick])

  // Memoize filtered items
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter)
  }, [items, filter])

  return (
    <div>
      <p>Total Value: \${expensiveValue}</p>
      <div>
        {filteredItems.map(item => (
          <button 
            key={item.id} 
            onClick={() => handleClick(item)}
          >
            {item.name} - \${item.value}
          </button>
        ))}
      </div>
    </div>
  )
}
\`\`\`

## useRef Beyond DOM References

\`useRef\` can store any mutable value:

\`\`\`jsx
function Timer() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)
  const countRef = useRef(count)

  // Keep ref in sync with state
  useEffect(() => {
    countRef.current = count
  }, [count])

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true)
      intervalRef.current = setInterval(() => {
        setCount(prevCount => prevCount + 1)
      }, 1000)
    }
  }

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setIsRunning(false)
    }
  }

  const resetTimer = () => {
    stopTimer()
    setCount(0)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div>
      <h2>Timer: {count}s</h2>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  )
}
\`\`\`

## useContext for State Management

Avoiding prop drilling with Context:

\`\`\`jsx
const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Usage
function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
    </ThemeProvider>
  )
}

function Header() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <header className={\`header \${theme}\`}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  )
}
\`\`\`

## Best Practices

### 1. Rules of Hooks
- Only call hooks at the top level
- Only call hooks from React functions
- Use ESLint plugin for hooks

### 2. Custom Hook Naming
- Always start with "use"
- Be descriptive: \`useLocalStorage\`, not \`useLS\`

### 3. Dependency Arrays
- Include all dependencies in useEffect, useCallback, useMemo
- Use ESLint plugin for exhaustive deps

### 4. Performance Considerations
- Don't overuse useMemo and useCallback
- Profile before optimizing
- Consider if the optimization is worth the complexity

## Conclusion

React Hooks provide powerful patterns for managing state and side effects. Key takeaways:

1. **useReducer** for complex state logic
2. **Custom hooks** for reusable logic
3. **useCallback/useMemo** for performance optimization
4. **useRef** for mutable values and DOM access
5. **useContext** for avoiding prop drilling

Master these patterns and you'll write more maintainable and performant React applications!
`,f=Object.assign({"../content/blog/building-a-portfolio-with-react-and-vite.md":d,"../content/blog/getting-started-with-nextjs.md":m,"../content/blog/react-hooks-beyond-basics.md":g});function h(n){const l=/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/,o=n.match(l);if(!o)return{metadata:{},content:n};const[,a,c]=o,e={};return a.split(`
`).forEach(s=>{const i=s.indexOf(":");if(i===-1)return;const r=s.slice(0,i).trim(),t=s.slice(i+1).trim();!r||!t||(t.startsWith("[")&&t.endsWith("]")?e[r]=t.slice(1,-1).split(",").map(u=>u.trim().replace(/^["'](.*)["']$/,"$1")).filter(u=>u.length>0):t==="true"||t==="false"?e[r]=t==="true":e[r]=t.replace(/^["'](.*)["']$/,"$1"))}),{metadata:e,content:c.trim()}}function y(n){return n.replace(".md","").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function v(){const n=[];let l=1;return Object.entries(f).forEach(([o,a])=>{const c=o.split("/").pop().replace(".md",""),{metadata:e,content:s}=h(a),i=e.slug||y(c),r={id:l++,slug:i,title:e.title||"Untitled Post",excerpt:e.excerpt||"",date:e.date||new Date().toISOString().split("T")[0],readTime:e.readTime||"5 min read",tags:e.tags||[],featured:e.featured||!1,content:s};n.push(r)}),n.sort((o,a)=>new Date(a.date)-new Date(o.date))}const b=[{id:1,slug:"react-hooks-beyond-basics",title:"The Power of React Hooks: Beyond useState and useEffect",excerpt:"Exploring advanced React hooks and creating custom hooks to solve common problems in React applications.",date:"2024-07-05",readTime:"8 min read",tags:["React","Hooks","JavaScript","Performance"],featured:!0,content:`# The Power of React Hooks: Beyond useState and useEffect

React Hooks have transformed how we write React components. Let's explore some advanced hooks and create custom ones to solve common problems.

## useReducer for Complex State

When \`useState\` isn't enough, \`useReducer\` provides a more predictable state management pattern:

\`\`\`jsx
const initialState = { 
  count: 0, 
  loading: false,
  error: null 
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'setLoading':
      return { ...state, loading: action.payload }
    case 'setError':
      return { ...state, error: action.payload, loading: false }
    case 'reset':
      return initialState
    default:
      throw new Error(\`Unknown action: \${action.type}\`)
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleIncrement = () => {
    dispatch({ type: 'setLoading', payload: true })
    // Simulate async operation
    setTimeout(() => {
      dispatch({ type: 'increment' })
      dispatch({ type: 'setLoading', payload: false })
    }, 500)
  }
  
  return (
    <div>
      <p>Count: {state.count}</p>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <button onClick={handleIncrement} disabled={state.loading}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  )
}
\`\`\`

## Custom Hooks

Creating reusable logic with custom hooks:

### useLocalStorage Hook

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":\`, error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error)
    }
  }

  return [storedValue, setValue]
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  )
}
\`\`\`

## useCallback and useMemo

Optimizing performance with memoization:

\`\`\`jsx
function ExpensiveComponent({ items, onItemClick, filter }) {
  // Memoize expensive calculations
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...')
    return items
      .filter(item => item.category === filter)
      .reduce((acc, item) => acc + item.value, 0)
  }, [items, filter])

  // Memoize event handlers to prevent unnecessary re-renders
  const handleClick = useCallback((item) => {
    onItemClick(item.id, item.name)
  }, [onItemClick])

  return (
    <div>
      <p>Total Value: \${expensiveValue}</p>
      <div>
        {items.map(item => (
          <button 
            key={item.id} 
            onClick={() => handleClick(item)}
          >
            {item.name} - \${item.value}
          </button>
        ))}
      </div>
    </div>
  )
}
\`\`\`

## Best Practices

### 1. Rules of Hooks
- Only call hooks at the top level
- Only call hooks from React functions
- Use ESLint plugin for hooks

### 2. Custom Hook Naming
- Always start with "use"
- Be descriptive: \`useLocalStorage\`, not \`useLS\`

### 3. Dependency Arrays
- Include all dependencies in useEffect, useCallback, useMemo
- Use ESLint plugin for exhaustive deps

## Conclusion

React Hooks provide powerful patterns for managing state and side effects. Key takeaways:

1. **useReducer** for complex state logic
2. **Custom hooks** for reusable logic
3. **useCallback/useMemo** for performance optimization
4. **useRef** for mutable values and DOM access

Master these patterns and you'll write more maintainable and performant React applications!`}];function x(){try{return v()}catch(n){return console.warn("Dynamic blog loading failed, using fallback posts:",n),b}}const w=x();export{k as C,C as T,w as b};

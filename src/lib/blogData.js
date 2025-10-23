// Blog posts data - now dynamically loaded from markdown files
import { getBlogPosts } from './blogLoader'

// Export the dynamically loaded blog posts
export const blogPosts = getBlogPosts()

// Legacy static data (kept for reference, but not used)
const legacyBlogPosts = [
  {
    id: 1,
    slug: 'building-modern-web-apps-with-react-vite',
    title: 'Building Modern Web Applications with React and Vite',
    excerpt:
      'Exploring the benefits of using Vite as a build tool for React applications and how it improves development experience.',
    date: '2024-07-15',
    readTime: '5 min read',
    tags: ['React', 'Vite', 'JavaScript', 'Web Development'],
    featured: true,
    content: `# Building Modern Web Applications with React and Vite

Vite has revolutionized the way we build modern web applications. In this post, I'll share my experience using Vite with React and why it's become my go-to build tool.

## Why Vite?

Vite offers several advantages over traditional build tools:

- **Lightning-fast HMR**: Hot Module Replacement that actually works
- **Native ES modules**: No bundling during development
- **Optimized builds**: Rollup-based production builds
- **Plugin ecosystem**: Rich ecosystem with great TypeScript support

## Setting Up a React Project with Vite

Getting started is incredibly simple:

\`\`\`bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
\`\`\`

The development server starts in milliseconds, not seconds. This makes a huge difference in developer productivity.

## Key Features

### 1. Instant Server Start

Unlike traditional bundlers that need to process your entire application before starting the dev server, Vite starts instantly by serving your source files over native ES modules.

### 2. Lightning Fast HMR

Hot Module Replacement updates are consistently fast regardless of the size of your application.

### 3. Rich Features

Out-of-the-box support for:
- TypeScript
- JSX
- CSS pre-processors
- Static assets handling

## Performance Benefits

The development server starts in milliseconds, not seconds. This makes a huge difference in developer productivity, especially on larger projects.

Here's a simple component example:

\`\`\`jsx
import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Counter
\`\`\`

## Production Builds

For production, Vite uses Rollup to create highly optimized bundles with:
- Tree shaking
- Code splitting
- Asset optimization

## Conclusion

Vite has transformed my development workflow. The instant feedback loop and excellent developer experience make it an essential tool for modern React development.

**Key takeaways:**
1. Vite provides instant dev server startup
2. HMR is consistently fast regardless of app size
3. Production builds are highly optimized
4. Great TypeScript and modern JavaScript support

Give Vite a try on your next React project – you won't look back!`
  },
  {
    id: 2,
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS: Tips and Best Practices',
    excerpt:
      'A comprehensive guide to writing maintainable and scalable CSS with Tailwind CSS framework.',
    date: '2024-07-10',
    readTime: '7 min read',
    tags: ['CSS', 'Tailwind', 'Frontend', 'Design'],
    featured: false,
    content: `# Mastering Tailwind CSS: Tips and Best Practices

Tailwind CSS has changed how I approach styling web applications. Here are some tips and best practices I've learned along the way.

## Component-First Approach

Instead of thinking in terms of pages, think in terms of reusable components:

\`\`\`jsx
const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2'
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500'
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button 
      className={\`\${baseClasses} \${variants[variant]} \${sizes[size]}\`}
      {...props}
    >
      {children}
    </button>
  )
}
\`\`\`

## Custom Configuration

Don't be afraid to customize your \`tailwind.config.js\`:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
\`\`\`

## Responsive Design

Mobile-first approach with Tailwind's responsive prefixes:

\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="p-4 bg-white rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
    <p className="text-gray-600">Card content goes here...</p>
  </div>
</div>
\`\`\`

## Utility Patterns

### 1. Extracting Components

When you find yourself repeating the same utility combinations:

\`\`\`jsx
// Instead of repeating this everywhere
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
  Click me
</button>

// Extract to a component
<PrimaryButton>Click me</PrimaryButton>
\`\`\`

### 2. Using @apply Directive

For complex components, use \`@apply\` in CSS:

\`\`\`css
.btn-primary {
  @apply px-4 py-2 bg-blue-600 text-white rounded-lg;
  @apply hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500;
  @apply transition-colors duration-200;
}
\`\`\`

## Dark Mode Support

Tailwind makes dark mode implementation straightforward:

\`\`\`jsx
<div className="bg-white text-gray-900">
  <h1 className="text-2xl font-bold">
    This adapts to dark mode automatically
  </h1>
</div>
\`\`\`

## Performance Tips

### 1. Purge Unused CSS

Ensure your build process removes unused utilities:

\`\`\`javascript
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  // ... rest of config
}
\`\`\`

### 2. Use JIT Mode

Just-In-Time compilation generates styles on-demand.

## Conclusion

Tailwind CSS promotes consistency and speeds up development once you embrace its utility-first philosophy. Key principles:

- **Component-first thinking**: Build reusable components
- **Customize thoughtfully**: Extend the default theme when needed
- **Mobile-first**: Design for mobile, enhance for desktop
- **Performance matters**: Configure purging and use JIT mode

Start small, build components, and gradually adopt more advanced patterns. Tailwind will transform how you write CSS!`
  },
  {
    id: 3,
    slug: 'react-hooks-beyond-basics',
    title: 'The Power of React Hooks: Beyond useState and useEffect',
    excerpt:
      'Exploring advanced React hooks and creating custom hooks to solve common problems in React applications.',
    date: '2024-07-05',
    readTime: '8 min read',
    tags: ['React', 'Hooks', 'JavaScript', 'Performance'],
    featured: true,
    content: `# The Power of React Hooks: Beyond useState and useEffect

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

## useRef Beyond DOM References

\`useRef\` can store any mutable value:

\`\`\`jsx
function Timer() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

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

Master these patterns and you'll write more maintainable and performant React applications!`
  }
]

// blogPosts now exported at the top of the file

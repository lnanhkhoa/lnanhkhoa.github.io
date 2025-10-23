// Dynamic blog post loader that reads markdown files from src/content/blog
// This automatically imports all markdown files and parses their frontmatter

// Use Vite's import.meta.glob to dynamically import all markdown files
const markdownModules = import.meta.glob('../content/blog/*.md', {
  as: 'raw',
  eager: true
})

// Parse frontmatter from markdown content
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    // If no frontmatter, return content as-is with empty metadata
    return {
      metadata: {},
      content: content
    }
  }

  const [, frontmatterStr, markdownContent] = match
  const metadata = {}

  // Parse frontmatter
  frontmatterStr.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) return

    const key = line.slice(0, colonIndex).trim()
    const value = line.slice(colonIndex + 1).trim()

    if (!key || !value) return

    // Parse different value types
    if (value.startsWith('[') && value.endsWith(']')) {
      // Array
      metadata[key] = value
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim().replace(/^["'](.*)["']$/, '$1'))
        .filter((item) => item.length > 0)
    } else if (value === 'true' || value === 'false') {
      // Boolean
      metadata[key] = value === 'true'
    } else {
      // String (remove quotes if present)
      metadata[key] = value.replace(/^["'](.*)["']$/, '$1')
    }
  })

  return {
    metadata,
    content: markdownContent.trim()
  }
}

// Generate slug from filename
function generateSlug(filename) {
  return filename
    .replace('.md', '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Load and process all blog posts
export function loadBlogPosts() {
  const posts = []
  let idCounter = 1

  // Process each markdown file
  Object.entries(markdownModules).forEach(([filepath, content]) => {
    // Extract filename from filepath
    const filename = filepath.split('/').pop().replace('.md', '')
    const { metadata, content: markdownContent } = parseFrontmatter(content)

    // Generate slug from filename if not provided in frontmatter
    const slug = metadata.slug || generateSlug(filename)

    // Create post object
    const post = {
      id: idCounter++,
      slug,
      title: metadata.title || 'Untitled Post',
      excerpt: metadata.excerpt || '',
      date: metadata.date || new Date().toISOString().split('T')[0],
      readTime: metadata.readTime || '5 min read',
      tags: metadata.tags || [],
      featured: metadata.featured || false,
      content: markdownContent
    }

    posts.push(post)
  })

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// For development/fallback when require.context is not available
export const fallbackBlogPosts = [
  {
    id: 1,
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

// Get blog posts - try dynamic loading first, fallback to static
export function getBlogPosts() {
  try {
    return loadBlogPosts()
  } catch (error) {
    console.warn('Dynamic blog loading failed, using fallback posts:', error)
    return fallbackBlogPosts
  }
}

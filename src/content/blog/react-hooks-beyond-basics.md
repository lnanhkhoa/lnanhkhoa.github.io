---
title: 'The Power of React Hooks: Beyond useState and useEffect'
excerpt: 'Exploring advanced React hooks and creating custom hooks to solve common problems in React applications.'
date: '2024-07-05'
readTime: '8 min read'
tags: ['React', 'Hooks', 'JavaScript', 'Performance']
featured: true
---

# The Power of React Hooks: Beyond useState and useEffect

React Hooks have transformed how we write React components. Let's explore some advanced hooks and create custom ones to solve common problems.

## useReducer for Complex State

When `useState` isn't enough, `useReducer` provides a more predictable state management pattern:

```jsx
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
      throw new Error(`Unknown action: ${action.type}`)
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
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}
```

## Custom Hooks

Creating reusable logic with custom hooks:

### useLocalStorage Hook

```jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
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
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
    </div>
  )
}
```

### useFetch Hook

```jsx
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
          throw new Error(`HTTP error! status: ${response.status}`)
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
  const { data: user, loading, error } = useFetch(`/api/users/${userId}`)

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
```

## useCallback and useMemo

Optimizing performance with memoization:

```jsx
function ExpensiveComponent({ items, onItemClick, filter }) {
  // Memoize expensive calculations
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...')
    return items
      .filter((item) => item.category === filter)
      .reduce((acc, item) => acc + item.value, 0)
  }, [items, filter])

  // Memoize event handlers to prevent unnecessary re-renders
  const handleClick = useCallback(
    (item) => {
      onItemClick(item.id, item.name)
    },
    [onItemClick]
  )

  // Memoize filtered items
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.category === filter)
  }, [items, filter])

  return (
    <div>
      <p>Total Value: ${expensiveValue}</p>
      <div>
        {filteredItems.map((item) => (
          <button key={item.id} onClick={() => handleClick(item)}>
            {item.name} - ${item.value}
          </button>
        ))}
      </div>
    </div>
  )
}
```

## useRef Beyond DOM References

`useRef` can store any mutable value:

```jsx
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
        setCount((prevCount) => prevCount + 1)
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
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}
```

## useContext for State Management

Avoiding prop drilling with Context:

```jsx
const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
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
    <header className={`header ${theme}`}>
      <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'} mode</button>
    </header>
  )
}
```

## Best Practices

### 1. Rules of Hooks

- Only call hooks at the top level
- Only call hooks from React functions
- Use ESLint plugin for hooks

### 2. Custom Hook Naming

- Always start with "use"
- Be descriptive: `useLocalStorage`, not `useLS`

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

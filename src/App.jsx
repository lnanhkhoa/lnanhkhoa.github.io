import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
const Home = React.lazy(() => import('./pages/Home'));
// const Blog = React.lazy(() => import('./pages/Blog'));
// const BlogPost = React.lazy(() => import('./pages/BlogPost'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/blog/:id" element={<BlogPost />} /> */}
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  )
}

export default App

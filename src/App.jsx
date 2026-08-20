import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
const Home = React.lazy(() => import('./pages/Home'))
// const Blog = React.lazy(() => import('./pages/Blog'));
// const BlogPost = React.lazy(() => import('./pages/BlogPost'));

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-background">
        {/* Aurora background — fixed behind everything */}
        <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="aurora-blob animate-blob left-[-10%] top-[-15%] h-[36rem] w-[36rem] bg-violet-500/[0.13]" />
          <div className="aurora-blob animate-blob-slow right-[-12%] top-[20%] h-[32rem] w-[32rem] bg-primary/[0.07]" />
          <div className="aurora-blob animate-blob bottom-[-20%] left-[25%] h-[34rem] w-[34rem] bg-teal-400/[0.09] [animation-delay:-8s]" />
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-noise" />
        </div>

        <Header />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/blog/:id" element={<BlogPost />} /> */}
          </Routes>
        </React.Suspense>

        <ScrollToTop />

        <footer className="border-t border-white/[0.06] py-10">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} khoa<span className="text-primary">.le</span>
            </p>
            <p className="font-mono text-xs text-muted-foreground/70">
              built with react · tailwind ·{' '}
              <span className="text-primary/80">too much coffee</span>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

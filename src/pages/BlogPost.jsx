import React from 'react'
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import { blogPosts } from '../lib/blogData'
import 'highlight.js/styles/github-dark.css'

function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  // Look for post by slug (id parameter is actually the slug from the URL)
  const post = blogPosts.find((p) => p.slug === id)

  if (!post) {
    return (
      <section className="pt-24 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center justify-center mx-auto text-primary hover:text-primary/80 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>
        </div>
      </section>
    )
  }
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  // Custom components for markdown rendering
  const markdownComponents = {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-foreground mt-8 mb-4 first:mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">{children}</h3>
    ),
    p: ({ children }) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-muted-foreground space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 text-muted-foreground space-y-1">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-1">{children}</li>,
    code: ({ inline, children }) => {
      if (inline) {
        return (
          <code className="bg-secondary px-2 py-1 rounded text-sm font-mono text-foreground">
            {children}
          </code>
        )
      }
      return (
        <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4">
          {children}
        </code>
      )
    },
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary hover:text-primary/80 underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <section className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </button>

        {/* Post header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {post.readTime}
            </div>
            <button
              onClick={handleShare}
              className="flex items-center hover:text-primary transition-colors"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
        </header>

        {/* Post content */}
        <article className="prose prose-lg max-w-none markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            components={markdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Post footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <button
              onClick={handleShare}
              className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share this post
            </button>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default BlogPost

import React, { useState } from 'react'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { blogPosts } from '../lib/blogData'

function Blog() {
  const navigate = useNavigate()
  const [selectedTag, setSelectedTag] = useState(null)

  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))]

  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts

  const featuredPosts = blogPosts.filter((post) => post.featured)

  const handlePostClick = (post) => {
    navigate(`/blog/${post.slug}`)
  }

  return (
    <section className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Blog</h2>
          <h2 className="text-4xl font-bold text-fuchsia-600 mb-4">
            I'm building this feature. please ignore it
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, React, and modern frontend
            technologies.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Featured Posts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer border"
                  onClick={() => handlePostClick(post)}
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedTag(selectedTag === tag ? null : tag)
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-primary font-medium">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Tag Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              All Posts
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                  selectedTag === tag
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer border"
              onClick={() => handlePostClick(post)}
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {post.readTime}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-primary font-medium text-sm">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No posts found for the selected tag.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog

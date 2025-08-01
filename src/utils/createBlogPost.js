// Utility to help create new blog posts
// This is a helper for development - you can use this to generate new blog post templates

export function generateBlogPostTemplate(title, excerpt, tags = [], featured = false) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
  
  const date = new Date().toISOString().split('T')[0]
  
  const frontmatter = `---
title: "${title}"
excerpt: "${excerpt}"
date: "${date}"
readTime: "5 min read"
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
featured: ${featured}
---

# ${title}

${excerpt}

## Introduction

Write your introduction here...

## Main Content

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
`

  return {
    slug,
    frontmatter,
    filename: `${slug}.md`
  }
}

// Example usage:
// const post = generateBlogPostTemplate(
//   "Getting Started with Next.js",
//   "A comprehensive guide to building modern web applications with Next.js framework.",
//   ["Next.js", "React", "JavaScript", "Web Development"],
//   true
// )
// console.log(post.frontmatter)

export function createBlogPostData(markdownContent) {
  // Parse frontmatter and content
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = markdownContent.match(frontmatterRegex)
  
  if (!match) {
    throw new Error('Invalid markdown format. Frontmatter is required.')
  }
  
  const [, frontmatterStr, content] = match
  const frontmatter = {}
  
  // Parse frontmatter
  frontmatterStr.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim()
      
      // Parse different value types
      if (value.startsWith('[') && value.endsWith(']')) {
        // Array
        frontmatter[key.trim()] = value
          .slice(1, -1)
          .split(',')
          .map(item => item.trim().replace(/^"(.*)"$/, '$1'))
      } else if (value === 'true' || value === 'false') {
        // Boolean
        frontmatter[key.trim()] = value === 'true'
      } else {
        // String
        frontmatter[key.trim()] = value.replace(/^"(.*)"$/, '$1')
      }
    }
  })
  
  return {
    ...frontmatter,
    content: content.trim()
  }
}

// Instructions for adding new blog posts:
// 1. Create a new .md file in src/content/blog/
// 2. Use the generateBlogPostTemplate() function to create the structure
// 3. Write your content in markdown
// 4. Add the post data to src/lib/blogData.js using createBlogPostData()
// 5. Update the id and slug fields appropriately

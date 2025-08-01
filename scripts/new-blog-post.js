#!/usr/bin/env node

// Simple script to create new blog posts
// Usage: node scripts/new-blog-post.js "Your Post Title"

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function createBlogPost(title) {
  const slug = createSlug(title)
  const date = new Date().toISOString().split('T')[0]
  const filename = `${slug}.md`
  const filepath = path.join(__dirname, '..', 'src', 'content', 'blog', filename)
  
  const template = `---
title: "${title}"
excerpt: "Add a compelling description of your post here..."
date: "${date}"
readTime: "5 min read"
tags: ["Tag1", "Tag2", "Tag3"]
featured: false
---

# ${title}

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
`

  try {
    // Check if file already exists
    if (fs.existsSync(filepath)) {
      console.error(`❌ File already exists: ${filename}`)
      process.exit(1)
    }

    // Create the file
    fs.writeFileSync(filepath, template)
    
    console.log(`✅ Created new blog post: ${filename}`)
    console.log(`📁 Location: ${filepath}`)
    console.log(`🔗 Slug: ${slug}`)
    console.log(`\n📝 Next steps:`)
    console.log(`1. Edit the file to add your content`)
    console.log(`2. Update the excerpt, tags, and readTime`)
    console.log(`3. Set featured: true if you want it highlighted`)
    console.log(`4. Start the dev server to see your post`)
    
  } catch (error) {
    console.error(`❌ Error creating blog post:`, error.message)
    process.exit(1)
  }
}

// Get title from command line arguments
const title = process.argv[2]

if (!title) {
  console.error('❌ Please provide a title for your blog post')
  console.log('Usage: node scripts/new-blog-post.js "Your Post Title"')
  process.exit(1)
}

createBlogPost(title)

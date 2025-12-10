---
title: "Blog Workflow Guide: How to Draft and Publish Posts"
date: 2025-12-10
categories:
  - tutorial
  - guide
tags:
  - workflow
  - jekyll
  - blogging
---

This post explains the workflow for creating, drafting, and publishing posts on this blog. Whether you're a new contributor or just want to understand how things work behind the scenes, this guide has you covered.

## Overview of the Workflow

This blog uses Jekyll with a custom dual-folder system for managing content:

| Folder | Purpose | Published? |
|--------|---------|------------|
| `_posts/` | Drafts and work-in-progress posts | No (default `published: false`) |
| `_public/` | Published, live content | Yes |

**How it works:** The `_config.yml` sets `published: false` as a default for all posts in `_posts/`, which prevents them from appearing on the live site. The `_public/` folder is configured as a Jekyll collection with output enabled, so posts there are automatically published.

## Step-by-Step Workflow

### Step 1: Create a Draft

1. Navigate to the `_posts/` folder in the repository
2. Create a new Markdown file with the naming convention: `YYYY-MM-DD-your-post-title.md`
3. Add the required front matter at the top of your file:

```yaml
---
title: "Your Post Title"
date: 2025-12-10
categories:
  - category1
  - category2
tags:
  - tag1
  - tag2
---
```

4. Write your content using Markdown below the front matter

### Step 2: Preview Your Draft Locally (Optional)

Since drafts in `_posts/` have `published: false` by default, you can preview them locally by using the `--unpublished` flag:

```bash
bundle exec jekyll serve --unpublished
```

This will build the site including unpublished posts so you can see how your draft looks before moving it to `_public/`.

### Step 3: Review and Edit

- Make sure your content is complete and accurate
- Check for spelling and grammar errors
- Verify that any images or links work correctly

### Step 4: Publish the Post

When you're ready to publish:

1. Move your post file from `_posts/` to `_public/`
2. Commit and push your changes to GitHub
3. The post will automatically be built and deployed to the live site

### Step 5: Site Deployment

After pushing to GitHub:
- GitHub Pages will automatically build your site
- Changes typically appear within a few minutes
- Check the live site to confirm your post is visible

## Example Post Structure

Here's a complete example of a post file:

```markdown
---
title: "My Awesome Post"
date: 2025-12-10
categories:
  - blog
tags:
  - example
---

Your introduction paragraph goes here.

## Section 1

Content for section 1...

## Section 2

Content for section 2...

## Conclusion

Wrap up your thoughts here.
```

## Tips for Writing Great Posts

1. **Use descriptive titles** - Make your post titles clear and informative
2. **Choose relevant categories and tags** - This helps with organization and navigation
3. **Break up content with headings** - Use `##` for main sections and `###` for subsections
4. **Include code examples** - Use fenced code blocks with language hints for syntax highlighting
5. **Add images when helpful** - Place images in the `assets/images/` folder

## Summary

| Action | Location | Result |
|--------|----------|--------|
| Create draft | `_posts/` | Not visible on live site |
| Move to publish | `_public/` | Visible on live site after push |
| Push to GitHub | Repository | Triggers automatic deployment |

This simple workflow gives you full control over what content goes live on the site while keeping your drafts safely stored and versioned in Git.

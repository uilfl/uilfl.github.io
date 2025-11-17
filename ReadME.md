# Personal Blog Development with GitHub Pages and Jekyll

This guide outlines the steps and technical details for setting up a minimalist personal blog using GitHub Pages and Jekyll. The blog uses Markdown files for posts, with a focus on a clean and reader-friendly design.

## Content Organization

This blog uses a custom folder structure for managing published and draft content:

- **`_public/`**: Contains Markdown files for **published** blog posts that appear on the website
- **`_posts/`**: Contains Markdown files for **draft** posts that are still being worked on (not published)

### Workflow

1. **Write Draft Posts**:
   - Create draft blog posts as Markdown files (`.md`) in the `/_posts` directory
   - Use front matter to define metadata such as title, date, and tags
   - Example filename: `2025-03-01-my-draft-post.md`

2. **Publish Posts**:
   - When a draft is ready for publication, move it from `/_posts` to `/_public`
   - The post will automatically be included in the next site build
   - Posts in `/_public` are displayed on the homepage and in archives

3. **Build and Deploy**:
   - Jekyll automatically builds the site from `/_public` content
   - The generated site is created in the `_site` directory (excluded from version control)
   - Push changes to GitHub, and GitHub Pages will automatically deploy the site

## Example Post Structure

```markdown
---
title: "My Blog Post Title"
date: 2025-03-01
categories:
  - blog
tags:
  - topic1
  - topic2
---

Your blog post content goes here...
```

## Jekyll Setup

   - If you don't already have a Jekyll project, create one by running:
     ```bash
     jekyll new my-blog
     cd my-blog
     ```
   - Commit this new project to your GitHub repository.

2. **Theme Selection**:

   - For a minimalist design, use a theme like _Minimal Mistakes_ or _Cayman_.
     - _Minimal Mistakes_: A flexible Jekyll theme perfect for a clean, minimal blog.
     - _Cayman_: A simple, responsive theme for a blog.
   - To use the theme, follow the theme's installation instructions in your repository’s `Gemfile`.

3. **Customizing the Layout**:
   - Modify the `/_layouts/default.html` or create a custom layout to simplify the design and prioritize readability.
   - Keep text centered, use a clean font like _Georgia_ or _Roboto_, and ensure sufficient white space around content.
   - Include a navigation bar with only essential links (e.g., Home, About, and Archives).

## Site Structure

- **`/_public/`**: This directory holds all **published** blog posts that appear on the website.
  - Each post should follow the naming convention: `YYYY-MM-DD-title.md`.
- **`/_posts/`**: This directory holds **draft** blog posts that are still being worked on.
  - Draft posts are not published until moved to `/_public`.
- **`/assets/`**: Store any static files like images, stylesheets, or JavaScript here.
- **`/_config.yml`**: Configure Jekyll settings like title, description, and theme settings.
  - Example:
    ```yaml
    title: "My Personal Blog"
    description: "A minimalist blog focused on readability."
    theme: "minimal-mistakes-jekyll"
    ```

## Design Considerations

1. **Minimalist Theme**:

   - Use light backgrounds and dark text to minimize eye strain.
   - Limit the use of images to essential visuals; prioritize text-based content.
   - Implement a clean, sans-serif font for the body text and a serif font for headings to enhance readability.

2. **Responsive Layout**:

   - Ensure the theme is responsive for different screen sizes.
   - Test the site on mobile and desktop to confirm that the layout remains clean and accessible.

3. **Reader-Focused Features**:
   - **Font Size**: Provide an option for users to adjust the font size.
   - **Dark Mode**: Allow users to toggle between light and dark modes for different lighting conditions.
   - **Reading Progress**: Add a reading progress bar at the top of each post to help readers track their progress.

## Automating Deployment

To make the process more efficient, consider using **GitHub Actions** to automatically deploy the site when you push changes to the repository.

### Example GitHub Action (`.github/workflows/deploy.yml`):

```yaml
name: Deploy Jekyll site to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: "3.0"

      - name: Install dependencies
        run: |
          gem install bundler
          bundle install

      - name: Build the site
        run: |
          bundle exec jekyll build

      - name: Deploy to GitHub Pages
        run: |
          git config --global user.name 'GitHub Actions'
          git config --global user.email 'actions@github.com'
          git add .
          git commit -m "Deploy site"
          git push origin main
```

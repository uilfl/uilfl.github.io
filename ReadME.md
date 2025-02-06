# Personal Blog Development with GitHub Pages and Jekyll

This guide outlines the steps and technical details for setting up a minimalist personal blog using GitHub Pages and Jekyll. The blog will use Markdown files for posts, and the focus is on a clean and reader-friendly design.

## Workflow

1. **Write in Markdown Files**:

   - Create each blog post as a Markdown file (`.md`).
   - Store the posts in the `/_posts` directory of your GitHub repository.
   - Use front matter to define metadata such as title, date, and tags.

2. **Push to Public Folder**:

   - Store your Jekyll-generated site in the `public` folder of your repository.
   - This folder will contain the HTML files generated from your Markdown posts.

3. **Push to Git**:

   - Push your changes (Markdown files and the public folder) to your GitHub repository.
   - Ensure that your `public` folder is excluded from version control with `.gitignore` (Jekyll will regenerate it).

4. **Publish on GitHub Pages**:
   - Configure the GitHub Pages settings for your repository to deploy the site.
   - Make sure the source is set to the `main` or `gh-pages` branch (depending on your setup).

## Jekyll Setup

1. **Initialize a New Jekyll Project**:

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

- **`/_posts/`**: This directory will hold all your blog posts.
  - Each post should follow the naming convention: `YYYY-MM-DD-title.md`.
- **`/assets/`**: Store any static files like images, stylesheets, or JavaScript here.
- **`/_config.yml`**: Configure Jekyll settings like title, description, and theme settings.
  - Example:
    ```yaml
    title: "My Personal Blog"
    description: "A minimalist blog focused on readability."
    theme: "minimal-mistakes"
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

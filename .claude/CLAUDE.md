# Ron Lara's Portfolio

A modern, responsive portfolio website built with Vite and Tailwind CSS, showcasing 4+ years of professional software engineering experience.

## Project Overview

- **Type**: Static website (SPA)
- **Framework**: Vite + HTML/JavaScript
- **Styling**: Tailwind CSS (via CDN)
- **Hosting**: GitHub Pages
- **URL**: https://mngxx.github.io/Portfolio/

## Key Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS v3 (CDN)
- **Deployment**: GitHub Actions + GitHub Pages
- **Version Control**: Git

## Project Structure

```
Portfolio/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment workflow
├── .claude/
│   └── CLAUDE.md           # This file
├── images/                 # Project screenshots and assets
├── index.html              # Main portfolio page
├── app.js                  # Navigation and interactivity
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration (minimal)
├── package.json            # Dependencies
└── dist/                   # Built output (generated)
```

## Development Setup

### Prerequisites
- Node.js 18+
- npm

### Installation & Development
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

### Hero Section
- Eye-catching gradient text
- Animated blob background effects
- Call-to-action buttons

### Sections
1. **Technical Expertise** - Full-stack development and system design
2. **About Me** - Professional background and experience
3. **Projects** - 6 featured projects with descriptions and links
4. **Contact** - Email, phone, and social media links
5. **Navigation** - Sticky responsive navbar with mobile menu

### Responsive Design
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg)
- Hamburger menu for mobile devices
- Touch-friendly interactions

## Deployment

### GitHub Pages Setup
- **Repository**: Mngxx/Portfolio
- **Deployment**: Automatic via GitHub Actions
- **Trigger**: Push to `main` branch
- **Build Output**: `dist/` folder
- **Base Path**: `/Portfolio/`

### GitHub Actions Workflow
The `.github/workflows/deploy.yml` file:
1. Installs dependencies
2. Builds the project with Vite
3. Uploads artifact
4. Deploys to GitHub Pages

Deployment typically completes in 30-60 seconds.

## Customization

### Update Content
- Edit `index.html` directly - all content is there
- Modify project descriptions in the Projects section
- Update social links in the Contact section

### Styling
- Tailwind classes are applied inline in HTML
- Custom animations in `<style>` tag in HTML head
- No build-time CSS processing needed (using CDN)

### Performance
- Lightweight build (~1.3KB JavaScript)
- Images optimized automatically by Vite
- Tailwind CSS loaded from CDN (external cache)

## Common Tasks

### Add a New Project
1. Add project image to `images/` folder
2. Copy a project card in HTML
3. Update project name, description, and link
4. Commit and push - GitHub Actions deploys automatically

### Change Colors/Theme
1. Update Tailwind color classes in HTML
2. Classes like `bg-slate-900`, `text-cyan-400` control colors
3. Commit and push to deploy

### Update Skills/Experience
1. Edit the "Technical Expertise" section in HTML
2. Update project descriptions to reflect current work
3. Commit and push

## Best Practices

- **Test locally**: Always run `npm run dev` and test changes at http://localhost:3000
- **Mobile first**: Test on mobile devices/viewport sizes
- **Commit messages**: Use clear, descriptive commit messages
- **Regular updates**: Update portfolio with recent projects and experience

## Useful Commands

```bash
# Development
npm run dev                    # Start dev server
npm run build                  # Production build
npm run preview               # Preview production build

# Git
git add -A                     # Stage changes
git commit -m "message"        # Commit changes
git push                       # Push to GitHub (triggers deploy)
git status                     # Check status
git log --oneline             # View commit history
```

## Troubleshooting

### Dev server not starting
- Check Node.js version: `node --version` (should be 18+)
- Clear node_modules: `rm -rf node_modules && npm install`

### Build fails
- Check for syntax errors in HTML/JavaScript
- Ensure all image paths are correct
- Run `npm run build` to see detailed error messages

### GitHub Pages not updating
- Check GitHub Actions in the Actions tab
- Verify deployment completed successfully (green checkmark)
- Hard refresh browser: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Check Pages section in repository settings

## Portfolio Content

### Professional Profile
- **Title**: Software Engineer
- **Experience**: 4+ years
- **Focus**: Full-stack development, system design, scalable solutions

### Featured Projects
1. **Aninaw Tech** - Data visualization platform (Lead Developer)
2. **Reddot** - Community forum platform (Back-end Developer)
3. **FeuARubrics** - Educational grading system (Front-end Lead)
4. **Mandanas Ruling** - Government compliance platform (Front-end Developer)
5. **Bago Tayo** - Youth empowerment platform (Lead Developer)
6. **Guiding Lands** - Android survival guide app (Lead Developer)

### Contact Information
- **Email**: lararon2428@gmail.com
- **GitHub**: https://github.com/Mngxx
- **LinkedIn**: https://www.linkedin.com/in/ron-lara-1067b0212/
- **Certificates**: https://www.credly.com/users/ron-lara/badges

## Future Improvements

Potential enhancements:
- [ ] Add blog section for technical articles
- [ ] Implement dark/light mode toggle
- [ ] Add more interactive components
- [ ] Performance monitoring
- [ ] Analytics integration
- [ ] SEO optimization

## Related Files

- `.gitignore` - Git ignore patterns
- `.github/workflows/deploy.yml` - Deployment configuration
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind configuration

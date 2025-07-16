# Personal CV Website

A modern, responsive personal CV website built with Vite, TypeScript, and modern web technologies. Designed for deployment on AWS and optimized for performance and user experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for mobile, tablet, and desktop devices
- **Performance Optimized**: Fast loading times and excellent Lighthouse scores
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with keyboard navigation support
- **TypeScript**: Type-safe development with modern ES6+ features

## 📋 Sections

- **Hero Section**: Personal introduction with animated role titles
- **About**: Professional background and core values
- **Experience**: Detailed timeline of work history and achievements
- **Skills**: Interactive skill bars with technology proficiency
- **Projects**: Portfolio showcase with live demos and GitHub links
- **Contact**: Contact form with multiple communication channels

## 🛠 Technology Stack

- **Frontend**: Vite, TypeScript, Vanilla JavaScript
- **Styling**: Modern CSS with CSS Grid and Flexbox
- **Fonts**: Inter (primary), JetBrains Mono (code)
- **Icons**: SVG icons for lightweight performance
- **Build Tool**: Vite for fast development and optimized builds

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.19.0 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd perosnal
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open your browser and visit \`http://localhost:5173\`

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **index.html**: Update meta tags, title, and description
2. **src/components/hero.ts**: Update name, role, and social links
3. **src/components/about.ts**: Update personal details and stats
4. **src/components/experience.ts**: Add your work experience
5. **src/components/skills.ts**: Update skills and proficiency levels
6. **src/components/projects.ts**: Showcase your projects
7. **src/components/contact.ts**: Update contact information

### Styling

- **Colors**: Modify CSS variables in \`src/style.css\`
- **Fonts**: Update font imports in \`index.html\`
- **Layout**: Adjust grid and flexbox properties in component styles

### Images

- Replace \`public/favicon.ico\` with your favicon
- Add your profile picture to the hero section
- Add project screenshots to the projects section

## 🌐 Deployment

This website can be deployed on multiple platforms:

### GitHub Pages (Recommended)

The website is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - the workflow will automatically build and deploy

The site will be available at: `https://yourusername.github.io/personal_cv/`

### Manual GitHub Pages Deployment

If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

### AWS Deployment

### Option 1: AWS S3 + CloudFront

1. **Build the project**:
   \`\`\`bash
   npm run build
   \`\`\`

2. **Create S3 bucket** for static website hosting

3. **Upload dist/ contents** to S3 bucket

4. **Configure CloudFront** for global CDN distribution

5. **Set up Route 53** for custom domain (optional)

### Option 2: AWS Amplify

1. **Connect repository** to AWS Amplify
2. **Configure build settings**:
   \`\`\`yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
   \`\`\`

### Build Configuration

The project includes optimizations for production:

- **Code Splitting**: Automatic chunk splitting for better caching
- **Asset Optimization**: Minified CSS and JavaScript
- **Modern ES Modules**: Efficient module loading
- **Gzip Compression**: Reduced file sizes

## 📱 Performance

The website is optimized for excellent performance:

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🎯 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you have any questions or need help customizing the website, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Inter Font](https://rsms.me/inter/) for the beautiful typography
- [JetBrains Mono](https://www.jetbrains.com/mono/) for the monospace font
- [Vite](https://vitejs.dev/) for the amazing build tool
- [TypeScript](https://www.typescriptlang.org/) for type safety

---

Built with ❤️ using modern web technologies

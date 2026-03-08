# Infodra AI - AI Engineering & Technology Consulting Website

A professional, enterprise-grade AI Engineering and Technology Consulting website built with Next.js, TypeScript, and Tailwind CSS.

![Infodra AI Platform](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🚀 Overview

**Infodra AI** represents Infodra Technologies Pvt Ltd - a company that provides AI engineering, software development, CAD engineering services, and technical staffing, while also building AI-powered SaaS platforms.

The website features a premium enterprise technology company design, similar to EPAM, Globant, or Stripe-style modern SaaS websites.

## 📋 Website Sections

1. **Hero Section** - AI Engineering & Technical Talent for Modern Enterprises
2. **Engineering & Talent Solutions** - 4 service offerings in 2x2 grid
3. **Industries Served** - 5 key industries
4. **Technology Expertise** - 5 core technology capabilities
5. **Flexible Engagement Models** - 4 engagement options
6. **Innovation Platforms** - 4 SaaS products (ParkAlert, BizLead, AI Assistant, StaffTrack)
7. **Why Infodra** - 4 key differentiators
8. **Call to Action** - Conversion-focused section
9. **Footer** - Comprehensive navigation and links

## 🎯 Key Features

- **Premium Enterprise Design**: Modern SaaS style inspired by leading tech companies
- **Dark/Light Theme**: Seamless theme switching with system preference support
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Smooth Animations**: Professional animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Built with Next.js 14 for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
infodra-ai/
├── app/
│   ├── layout.tsx              # Root layout with theme provider
│   ├── page.tsx                # Homepage with all sections
│   └── globals.css             # Global styles
├── components/
│   ├── ThemeProvider.tsx       # Theme context provider
│   ├── Navbar.tsx              # Navigation bar
│   ├── HeroSection.tsx         # Hero section
│   ├── TalentSolutions.tsx     # Engineering & Talent Solutions
│   ├── IndustriesSection.tsx   # Industries served
│   ├── TechnologyExpertise.tsx # Technology capabilities
│   ├── EngagementModels.tsx    # Flexible engagement models
│   ├── ProductsSection.tsx     # Innovation platforms
│   ├── WhyInfodra.tsx          # Why choose Infodra
│   ├── CTASection.tsx          # Call to action
│   └── Footer.tsx              # Footer with links
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json
```

## 🎨 Customization

### Colors

The color scheme uses a blue/purple gradient theme. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Blue shades */ },
  accent: { /* Purple shades */ },
}
```

### Content

To update content, edit the respective component files in the `components/` directory.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Theme Support

The website supports both light and dark themes:
- Automatic system preference detection
- Manual toggle via navbar
- Persistent theme selection

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

```bash
npm run build
npm start
```

## 📧 Contact

- **Email**: info@infodra.ai
- **Website**: [infodratechnologies.com](https://infodratechnologies.com)
- **LinkedIn**: [linkedin.com/company/infodra](https://linkedin.com/company/infodra)

## 📄 License

© 2026 Infodra Technologies Private Limited. All rights reserved.

---

Built with ❤️ by Infodra Technologies

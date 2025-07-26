# Portfolio - Łukasz Nowak

A professional portfolio website showcasing my journey as a Frontend Developer. Built with modern React architecture and featuring complete internationalization (PL/EN).

## 🚀 Tech Stack

- **Frontend:** React 18
- **Styling:** Tailwind CSS v3
- **Build Tool:** Vite
- **Language:** JavaScript/JSX
- **Icons:** Lucide React
- **Internationalization:** Custom Context + translations
- **Version Control:** Git

## ✨ Features

### 🏗️ **Architecture & Code Quality**
- [x] **Modular component architecture** - No more "walls of code"
- [x] **Clean, focused components** - Single responsibility principle
- [x] **Reusable UI components** - Modal, ProjectCard, LanguageToggle
- [x] **Custom hooks** - useScrollAnimation, useLanguage
- [x] **Context API** - Global language state management

### 🌐 **Internationalization**
- [x] **Complete PL/EN translations** - 200+ translated strings
- [x] **Dynamic language switching** - Instant UI updates
- [x] **Translated content** - Projects, skills, CliftonStrengths
- [x] **Responsive language toggle** - Desktop & mobile

### 🎨 **UI/UX Design**
- [x] **Fully responsive design** - Mobile-first approach
- [x] **Modern UI with Tailwind CSS** - Professional styling
- [x] **Smooth scroll animations** - Intersection Observer API
- [x] **Professional icons** - Lucide React icon family
- [x] **Glassmorphism effects** - Modern visual design
- [x] **Accessibility features** - Semantic HTML, ARIA labels

### 📄 **Content Sections**
- [x] **Hero section** - Dynamic greeting with CTA buttons
- [x] **About me** - Professional background + value proposition
- [x] **CliftonStrengths integration** - Top 5 talents with detailed modals
- [x] **Skills showcase** - Interactive carousel with 4 categories
- [x] **Soft skills** - Business competencies grid
- [x] **Projects portfolio** - 4 real projects with live demos
- [x] **Contact section** - Professional form + contact info
- [x] **Footer** - Simplified navigation + social links

### 🔧 **Technical Features**
- [x] **Auto-advancing carousel** - Skills section with manual controls
- [x] **Modal system** - CliftonStrengths detailed view
- [x] **Form handling** - Contact form with validation
- [x] **Smooth scrolling** - Section navigation
- [x] **Performance optimized** - Component-based architecture

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header/          # Navigation, language toggle, mobile menu
│   │   ├── Footer/          # Brand, navigation, location
│   │   └── Layout.jsx       # Main wrapper
│   ├── sections/
│   │   ├── Hero.jsx         # Landing section
│   │   ├── About/           # About content, CliftonStrengths, value prop
│   │   ├── Skills/          # Skills navigation, carousel, soft skills, stats
│   │   ├── Projects/        # Projects grid, project cards
│   │   └── Contact/         # Contact info, form
│   └── ui/
│       └── Modal.jsx        # Reusable modal component
├── contexts/
│   └── LanguageContext.jsx  # Global language state
├── data/
│   ├── translations.js      # PL/EN translations
│   ├── projects.js          # Project data with translations
│   └── skills.js            # Skills data with translations
├── utils/
│   └── scrollAnimations.js  # Custom animation hooks
└── App.jsx                  # Main app with language provider
```

## 🛠️ Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation & Setup
```bash
# Clone the repository
git clone https://github.com/enowuigrek/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev        # Start development server (http://localhost:5173)
npm run build      # Create production build
npm run preview    # Preview production build locally
```

## 🌟 Key Highlights

### **Refactored Architecture**
- **83% code reduction** in main components
- **Single responsibility** - each component has one clear purpose
- **Easy maintenance** - modular structure enables quick updates
- **Reusable components** - consistent UI patterns

### **Real-World Projects**
- **x-tool** - Business SKU management tool (JavaScript, HTML, CSS)
- **Urban Survey** - QR-based city questionnaire app (React, Firebase)
- **Daily AI Assistant** - AI-powered todo application (React, OpenAI API)
- **Uknuta Magia** - Commercial children's book website (React, Figma, Supabase)

### **Professional Features**
- **CliftonStrengths Assessment** - Official Gallup results integration
- **Business experience focus** - 10+ years B2B background
- **Modern tech stack** - React, AI APIs, Firebase
- **Częstochowa, Poland** based developer

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile devices** (320px+)
- **Tablets** (768px+)
- **Desktop** (1024px+)
- **Large screens** (1920px+)

## 🎯 Performance

- **Modular components** - Faster rendering and easier debugging
- **Optimized images** - Placeholder gradients for projects
- **Efficient animations** - Intersection Observer for scroll effects
- **Clean code** - No technical debt, easy to maintain

## 🌐 Internationalization

The portfolio supports:
- **Polish (PL)** - Native language
- **English (EN)** - International audience
- **Dynamic switching** - Instant language updates
- **Complete coverage** - All UI elements and content translated

## 📄 Documentation

- **Project handover document** - Complete technical documentation
- **Component architecture** - Clear separation of concerns
- **Translation system** - Easy to extend with new languages
- **Development guidelines** - Best practices maintained

## 🚀 Deployment

Ready for deployment on:
- **Netlify** (recommended)
- **Vercel**
- **GitHub Pages**
- **Any static hosting service**

## 📞 Contact

**Łukasz Nowak** - Frontend Developer
- **Email:** theLukaszNowak85@gmail.com
- **Phone:** +48 509 266 079
- **GitHub:** [@enowuigrek](https://github.com/enowuigrek)
- **LinkedIn:** [the-lukasz-nowak85](https://linkedin.com/in/the-lukasz-nowak85)

---

## 🏆 Project Status

✅ **Production Ready**  
✅ **Fully Refactored**  
✅ **Internationalized**  
✅ **Performance Optimized**  
🚀 **Ready for Deployment**

---

Made with ❤️ using React + Tailwind CSS | Częstochowa, Poland 🇵🇱
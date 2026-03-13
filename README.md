# 💰 Bajaj Finance EMI Landing Page

A modern, bilingual (English & Hindi) React landing page for Bajaj Finance EMI services. Built for Ayush Jhariya's finance consultancy in Nainpur, Madhya Pradesh.

![React](https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-9370DB?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)

---

## 🌟 Features

### 💼 Core Features
- **Bilingual Support** - Seamlessly switch between English & Hindi
- **Dark/Light Mode** - Eye-friendly theme toggle
- **EMI Calculator** - Real-time monthly EMI calculation with visual breakdown
- **Responsive Design** - Fully mobile-optimized (works on all devices)
- **WhatsApp Integration** - One-click WhatsApp contact & application submission
- **Smooth Animations** - Scroll-triggered reveals and floating elements

### 📱 Service Showcase
- Mobile Phone Finance (iPhone, Samsung, Realme, etc.)
- LED TV Finance (Sony, LG, Samsung)
- Laptop Finance (HP, Dell, Lenovo, Asus)
- Home Appliances (Refrigerators, Washing Machines, ACs)

### 📊 Smart Sections
1. **Hero Section** - Professional introduction with trust badges
2. **About Me** - Experience stats, service areas, credentials
3. **Services** - 6 product categories with descriptions
4. **How It Works** - 4-step process visualization
5. **EMI Calculator** - Interactive calculator with loan breakdown
6. **Documents Required** - Minimal documentation checklist
7. **Testimonials** - Real customer reviews (5-star ratings)
8. **Application Form** - Direct WhatsApp form submission
9. **Contact Section** - Multiple contact options
10. **Floating WhatsApp Button** - Always-accessible chat

### 🎨 Design Features
- Modern gradient backgrounds
- Smooth scroll animations
- Pulse animations on CTA buttons
- Card hover effects
- Ticker/marquee for services
- Professional typography
- Color-coded sections
- Trust badges and stats

---

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI Framework |
| **Vite** | Build tool & dev server |
| **JavaScript (ES6+)** | Logic & interactivity |
| **CSS3** | Styling (no external framework) |
| **Google Fonts** | Typography (Plus Jakarta Sans, Yatra One) |

---

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/bajaj-emi-landing.git
cd bajaj-emi-landing
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

Your app will open at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```

---

## 📁 Project Structure

```
bajaj-emi-landing/
├── src/
│   ├── a.jsx              # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies
└── README.md              # This file
```

---

## 🎯 Key Components

### 1. **Bilingual Content (T Object)**
All text is stored in a translation object with English (`en`) and Hindi (`hi`) keys.

```javascript
const T = {
  en: { name: "Ayush Jhariya", ... },
  hi: { name: "आयुष झारिया", ... }
};
```

### 2. **EMI Calculator**
- Takes Product Price, Down Payment, and Tenure
- Calculates monthly EMI with 1.5% monthly interest
- Shows loan amount, total interest, and total amount
- Real-time updates as user changes values

### 3. **WhatsApp Integration**
- Direct WhatsApp links with pre-filled messages
- Form submission sends data directly to WhatsApp
- Floating button for quick access
- Support for phone (+91 6265678158)

### 4. **Dark/Light Mode**
- CSS variables for theme switching
- Smooth transitions between modes
- Persisted preference (can be saved to localStorage)

### 5. **Scroll Reveal Animations**
- Intersection Observer API for efficiency
- Fade-up animations on scroll
- Staggered delays for sequential reveals

---

## 🎨 Customization

### Change Contact Number
Edit `WA_NUM` and `PHONE` variables:
```javascript
const WA_NUM = "+-contactNo.";
const PHONE = "+-contactNo.";
```

### Add Your Photo
Replace the emoji in the photo frame:
```javascript
<span style={{ fontSize: "5rem" }}>👨‍💼</span>
// Replace with: <img src="your-photo.jpg" alt="Profile" />
```

### Modify Colors
Update CSS variables in `makeCSS()`:
```css
--blue:    #2563eb;
--bajaj:   #e84040;
--green:   #25D366;
```

### Edit Content
Update the `T` object with your own text, testimonials, and services.

---

## 📱 Mobile Optimization

- Responsive grid layouts (3 cols → 2 cols → 1 col)
- Touch-friendly buttons (48px minimum)
- Optimized font sizes (uses clamp for fluidity)
- Mobile navbar with icon-only toggles
- Full-width forms on small screens

---

## ⚡ Performance

- **Fast Load Time**: Vite's optimized bundling
- **Smooth Animations**: GPU-accelerated CSS
- **Lazy Loading**: Images load on demand
- **Efficient Reveal**: IntersectionObserver for scroll animations
- **No Heavy Dependencies**: Vanilla CSS, no UI framework bloat

---

## 🔗 Features in Detail

### EMI Calculator
- Realistic interest calculation (1.5% monthly)
- Visual pie chart breakdown (Principal vs Interest)
- Supported tenures: 3, 6, 9, 12, 18, 24 months
- Real-time updates

### WhatsApp Integration
**Chat Link:**
```
https://wa.me/+-contactNo.
```

**Application Form sends:**
- Full name
- Phone number
- City/Village
- Product name & price

### Services Offered
1. 📱 **Mobile Phones** - iPhone, Samsung, Vivo, Oppo
2. 📺 **LED TVs** - All major brands
3. 💻 **Laptops** - Work, study, gaming
4. 🧊 **Refrigerators** - Single & double door
5. 🫧 **Washing Machines** - Automatic & semi-auto
6. ❄️ **Air Conditioners** - 1, 1.5, 2 ton

---

## 📞 Contact Information

| Channel | Details |
|---------|---------|
| **WhatsApp** | +91 xyz |
| **Phone** | +91 xyz |
| **Location** | Nainpur, Madhya Pradesh |
| **Service Area** | Nainpur |
| **Experience** | 3+ years |
| **Customers** | 500+ happy customers |

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy on Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy on GitHub Pages
Add to `vite.config.js`:
```javascript
export default {
  base: '/bajaj-emi-landing/',
}
```

Then push to `gh-pages` branch.

---

## 📊 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE 11 | ❌ Not supported |

---

## 🎓 Learning Resources

This project demonstrates:
- React hooks (useState, useEffect)
- CSS custom properties (variables)
- Intersection Observer API
- WhatsApp Web API
- Responsive design
- Dark mode implementation
- Bilingual UI

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Credits

- Built with **React** & **Vite**
- Fonts: **Google Fonts** (Plus Jakarta Sans, Yatra One)
- Icons: **Unicode Emojis**
- Integration: **WhatsApp Business API**

---

## 📧 Contact & Support

For questions or issues:
- **Email**: ayushjhariya@example.com
- **WhatsApp**: [Chat directly](https://wa.me/-contactNo.)
- **Location**: Nainpur, M.P., India

---

## 📈 Future Enhancements

- [ ] Backend integration for form storage
- [ ] Payment gateway integration (Razorpay, PayU)
- [ ] Customer dashboard
- [ ] Admin panel for testimonials
- [ ] SMS notifications
- [ ] Email notifications
- [ ] Multi-language support (add more languages)
- [ ] Blog section for finance tips
- [ ] Video testimonials

---

## 🚀 Getting Started (Quick Reference)

```bash
# Clone
git clone https://github.com/yourusername/bajaj-emi-landing.git

# Install
cd bajaj-emi-landing
npm install

# Develop
npm run dev

# Build
npm run build

# Deploy
npm install -g vercel
vercel
```

---

**Made with ❤️ by Ayush Jhariya | Bajaj Finance Authorized Agent**

⭐ If you found this helpful, please consider giving it a star! ⭐

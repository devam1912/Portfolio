# Devam's Portfolio ⚽

A production-grade, football-themed portfolio built with **React + Vite + Tailwind CSS**.  
Multi-page SPA with smooth transitions, pitch theme toggle (Green/Black), and a chat-style contact widget powered by **Formspree**.

## 🔗 Live Demo

**[View Live Portfolio](https://portfolio-liart-delta-80.vercel.app/)**

## ✨ Features

- ⚽ **Football Pitch Theme** - Toggle between Green Pitch and Black Pitch themes
- 🧭 **Multi-page SPA** - Seamless navigation with React Router
- 🎬 **Smooth Transitions** - Polished animations and scroll-to-top functionality
- 💬 **Chat-style Contact Widget** - Integrated with Formspree for easy communication
- 📄 **Resume Download** - Accessible PDF resume
- 📱 **Responsive Design** - Mobile-friendly navbar and adaptive layout
- 🚀 **Vercel Deployment** - Optimized for production hosting

## 🛠 Tech Stack

- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Form Handling:** Formspree
- **Deployment:** Vercel

## 📂 Project Structure
```txt
public/
  ├── profile.jpg
  ├── og.svg
  ├── favicon.svg
  └── resume/
      └── Resume.pdf
src/
  ├── components/
  │   ├── ChatWidget.jsx
  │   ├── Navbar.jsx
  │   ├── PitchBackground.jsx
  │   ├── ScrollToTop.jsx
  │   ├── ThemeToggle.jsx
  │   └── ui/
  │       └── Button.jsx
  ├── layouts/
  │   └── SiteLayout.jsx
  ├── pages/
  │   ├── Home.jsx
  │   ├── About.jsx
  │   ├── Projects.jsx
  │   ├── Achievements.jsx
  │   └── Contact.jsx
  ├── styles/
  │   ├── globals.css
  │   └── animations.css
  ├── App.jsx
  └── main.jsx
```

## ⚙️ Environment Variables

Create a `.env` file in the project root:
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xpqqwlzg
```

**For Vercel Deployment:**
1. Navigate to Project → Settings → Environment Variables
2. Add `VITE_FORMSPREE_ENDPOINT` with your Formspree endpoint
3. Redeploy the project

## 🚀 Run Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## ✅ Build & Preview (Production)
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment (Vercel)

1. Import your GitHub repository into Vercel
2. Configure the following settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Add environment variable: `VITE_FORMSPREE_ENDPOINT`
4. Deploy!

Vercel will automatically redeploy on every push to your main branch.

## 📝 Update Resume

To update your resume:

1. Replace the file at `public/resume/Resume.pdf` (keep the same filename)
2. Commit and push your changes
3. Vercel will auto-deploy the update

## 👤 Author

**Devam Tanna**

- 🌐 **Portfolio:** [portfolio-liart-delta-80.vercel.app](https://portfolio-liart-delta-80.vercel.app/)
- 💼 **LinkedIn:** [devam-tanna](https://www.linkedin.com/in/devam-tanna-885a96286/)
- 🐙 **GitHub:** [@devam1912](https://github.com/devam1912)
- 📧 **Email:** devamtanna07@gmail.com

---

⭐ **Found this helpful?** Give it a star if you like the project!

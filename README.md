# Gym Landing Page 🏋️‍♂️

A visually stunning and fully responsive landing page for a fitness center built using **React + Vite**, with stylish components and smooth scroll navigation.

## 🔥 Features

- Hero section with animated entrance and call-to-action buttons
- Smooth scroll to page sections (Programs, Why Us, Plans, Testimonials)
- Responsive design (mobile-first with desktop polish)
- Dynamic Testimonials carousel
- Modern Card-based pricing plans
- Get Started form with local storage integration
- Animated UI using CSS and intersection observers
- Clean Navbar with dropdown behavior and mobile menu

## 🛠 Tech Stack

- **React.js** + Vite
- **CSS3** with custom variables
- `react-scroll`, `react-icons`, `gh-pages`

## 🧭 Folder Structure

```
src/
│
├── Components/
│   ├── Hero/
│   ├── Navbar/
│   ├── Footer/
│   ├── Card/
│   └── Testimonial/
│
├── Pages/
│   ├── Home.jsx
│   └── GetStarted.jsx
│
├── api/
│   └── TestimonialApi.json
│
└── App.jsx, main.jsx
```

## 🚀 Deployment

The site is deployed on **GitHub Pages**.

### 1. Add to `package.json`:

```
"homepage": "https://aayush45123.github.io/Gym-Landing-Page",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 2. Update `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: "/Gym-Landing-Page/",
});
```

### 3. Deploy

```bash
npm install gh-pages --save-dev
npm run deploy
```

Then visit: https://aayush45123.github.io/Gym-Landing-Page

## 📦 Setup Locally

```bash
git clone https://github.com/aayush45123/Gym-Landing-Page.git
cd Gym-Landing-Page
npm install
npm run dev
```

---

### 📬 Contact

Built by **Aayush Bharda**. For collaboration or queries, connect via GitHub!

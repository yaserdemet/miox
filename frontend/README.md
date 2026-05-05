# Miox | Damage Process Dashboard

Miox is a high-performance management dashboard built for tracking and managing insurance damage claims with a focus on modern UX and developer efficiency.

---

### 🛠 Core Technologies

| Layer | Technology |
| :--- | :--- |
| **Framework** | React 18 (Vite) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + Shadcn UI |
| **Routing** | React Router v6 |
| **State** | Zustand (with Persistence) |
| **Data Fetching** | TanStack Query v5 |
| **i18n** | i18next (TR/EN Support) |

---

### ✨ Key Features

- **Dynamic Claim Board**: Comprehensive table with status-based coloring and real-time filtering.
- **Process Clarity**: "Explain" feature that translates complex insurance jargon into simplified terms for users.
- **Persistent Notes**: Document-specific notes powered by Zustand persistence (saves to local storage).
- **Deep Tracking**: Detailed view for every claim, showing full process history and technical data.
- **Modern UX**: Breadcrumb navigation, smooth transitions, and a quick-toggle Dark Mode ("D" key).
- **Performance**: Optimized via code-splitting (Suspense/Lazy loading) and efficient data caching.

---

### 📁 Project Architecture

```bash
src/
├── components/   # Atomic UI & Shared Logic
├── pages/        # Main View Components
├── store/        # Zustand Persistence Logic
├── locales/      # i18n Translation Assets
├── data/         # Mock API & Data Simulation
└── layout/       # App Shell & Navigation
```

---

### 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Launch development server**:
   ```bash
   npm run dev
   ```
3. **Build for production**:
   ```bash
   npm run build
   ```

---

### 🔮 Roadmap & Future Enhancements

The following features were identified for the next development phase:

- **Debounced Search**: Optimize filtering by reducing unnecessary re-renders during input.
- **Server-side Pagination**: Scalable data handling for thousands of records.
- **Scroll Restoration**: Persistence of scroll position during navigation.
- **Global Error Boundary**: Custom UI for graceful error handling across the app.
- **Error Tracking**: Integration with **Sentry** for real-time error monitoring and debugging.
- **Interactive Analytics**: Charting tools to visualize claim processing times and trends.

---

## AI Assistance

This project was developed with the assistance of AI tools. Specifically, Gemini and Jules from Antigravity were utilized to enhance productivity and code quality.

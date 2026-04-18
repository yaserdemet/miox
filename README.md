# Miox - Damage Process Management Dashboard

Miox is a modern, high-performance, and user-friendly management dashboard designed to track, manage, and detail insurance and damage processes.

> [!NOTE]  
> This project was developed using **Gemini** AI within the **Antigravity IDE**, showcasing the power of AI-assisted coding in building robust React applications.

## 🚀 Tech Stack & Tools

This project is built using modern web development standards and best practices:

- **Vite & React**: Fast development environment and optimized production builds.
- **TypeScript**: Type safety and better developer experience across the application.
- **Shadcn UI & Tailwind CSS**: Highly customizable, accessible, and modern design components.
- **React Router DOM**: Dynamic route management and comprehensive detail views.
- **TanStack Query (React Query)**: Asynchronous state management, caching, and a simulated API layer.
- **Zustand & Persist**: Lightweight and performant state management. Integrated with persist middleware to store user notes in local storage.
- **i18next**: Multi-language support (English & Turkish) with instant language switching.
- **React Suspense & Lazy Load**: Optimized loading times through page-based code splitting.
- **Lucide React**: Consistent and aesthetic icon set.

## ✨ Key Features

- **Damage Dashboard**: A dynamic table where all files are listed by status and process stages.
- **Advanced Filtering**: Instant data filtering by file number, title, or status.
- **Detailed Process Tracking**: Reviewing the history and current steps of each file with technical details.
- **Process Explanation (AI-Driven UI)**: "Explain Process" feature that simplifies complex technical terms for the end-user.
- **Persistent Note System**: Ability to take private notes for each file that persist across browser sessions.
- **Multi-language Support**: Seamless switching between EN and TR.
- **Dark/Light Mode**: Full dark mode support for better accessibility (Quick toggle with "D" key).
- **Dynamic Breadcrumbs**: Automatically updated navigation paths based on the current route.

## 🛠️ Installation & Usage

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

- `src/components`: UI and modular components.
- `src/pages`: Page-level components (Dashboard, Details, Settings).
- `src/store`: Zustand state definitions.
- `src/locales`: Language translation files (JSON).
- `src/data`: Mock datasets and simulated API services.
- `src/layout`: Application shell, Sidebar, and Header components.

## 🔮 Future Roadmap (Next Steps)

With more development time, the following features would be implemented to further enhance performance and UX:

- **Filtering Debounce**: Implementing a debounce mechanism for the search input to reduce unnecessary re-renders and filter operations during typing.
- **Server-side Pagination**: Adding pagination support to handle thousands of damage records efficiently without overloading the browser.
- **Scroll Restoration**: Ensuring the user returns to their exact scroll position when navigating back from a detail page to the main list.
- **Advanced Analytics**: Integrating charts to visualize damage process durations and status distributions.

---



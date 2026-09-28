# Kaustubh Tripathi · Portfolio

A macOS-style portfolio: a desktop with a dock, a menu bar, and draggable windows for projects, skills, resume, and contact.

**Live:** https://portfolio-eta-pied-53.vercel.app

I'm a backend engineer (Java/Spring Boot, Node.js) moving into AI engineering. The main project here is [LeetCode Agent Tracker](https://github.com/ktripathi2281/Leetcode-Tracker), a set of Gemini agents with function calling and full invocation logging.

## Stack

- **React 19** + **Vite**
- **GSAP** (Draggable) for window dragging and dock magnification
- **Zustand** + **Immer** for window state (open/close, focus, z-order)
- **Tailwind CSS v4**
- **react-pdf** for the in-browser resume viewer

## How it works

Every window is wrapped by [`WindowWrapper`](src/hoc/WindowWrapper.jsx), which handles open animations, dragging, and focus. Window state lives in [`src/store/window.js`](src/store/window.js), so anything can open a window with `openWindow(key, data)`.

Content (projects, skills, about, socials) lives in [`src/constants/index.js`](src/constants/index.js). Adding a project means adding an entry there, with no component changes.

```
src/
├── components/   Navbar, Dock, Welcome, WindowControls
├── hoc/          WindowWrapper (drag, focus, animation)
├── store/        Zustand stores for windows and Finder location
├── windows/      Finder, Terminal, Resume, Contact, Text, Image
└── constants/    All site content
```

## Run locally

```bash
npm install
npm run dev
```

## Roadmap

- **Spotlight (⌘K) assistant:** ask questions about my work. Answers are grounded in my projects and resume, stream in, and can open the relevant windows through Gemini function calling.
- **Trace view:** show the tool calls, tokens, latency, and cost behind each answer.
- **Activity Monitor:** live request, latency, and spend metrics from the backend.

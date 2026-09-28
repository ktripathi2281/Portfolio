const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "Spring Security", "REST APIs", "WebSockets"],
  },
  {
    category: "AI / LLM",
    items: ["Gemini API", "Function calling", "Agent loops", "Agent tracing"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "Vite"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Docker Compose", "Git", "Linux"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ktripathi2281",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/kaustubh-tripathi",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/me.jpg",
  }
];

export {
  navLinks,
  navIcons,
  dockApps,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "LeetCode Agent Tracker",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "LeetCode-Agent-Tracker.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Three Gemini agents on top of a LeetCode prep platform",
          description: [
            "A full-stack LeetCode prep platform (React, Express, MongoDB) with problem tracking, a Leitner-style spaced-repetition scheduler, and an analytics dashboard covering topic heatmaps and company readiness.",
            "Planner agent: an autonomous weekly-plan agent built on Gemini function calling. The model picks from 4 database tools across up to 8 iterations, then returns a study plan with a rationale for each choice.",
            "Hint tutor: a Socratic tutor that withholds the solution and gives graduated, multi-turn hints instead.",
            "Post-mortem agent: reviews solved code and flags suboptimal time and space complexity.",
            "Observability: every agent invocation (tool calls, reasoning trace, latency) is logged to a queryable collection, so each agent decision can be audited after the fact.",
          ],
        },
        {
          id: 2,
          name: "GitHub",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ktripathi2281/Leetcode-Tracker",
          position: "top-10 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Skill Barter",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Skill-Barter.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          subtitle: "Peer-to-peer skill exchange with real-time chat",
          description: [
            "A platform where people trade skills instead of money. A matching engine classifies users as Perfect (mutual) or Partial (one-way) matches and sorts them by distance using MongoDB 2dsphere geospatial indexes.",
            "Real-time chat on Socket.io with room-based WebSockets, typing indicators, read receipts, and a two-way trade lifecycle that needs mutual consent to accept and complete a trade.",
            "Auth: dual-token JWT (15-min access + 7-day refresh) with silent renewal, OTP email verification, bcrypt hashing, and API rate limiting against brute-force attempts.",
            "Stack: MongoDB, Express, React (Vite), Node.js. Deployed on Render and Vercel with environment-driven config and CORS whitelisting.",
          ],
        },
        {
          id: 2,
          name: "Live demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://skill-barter-psi.vercel.app/",
          position: "top-10 left-20",
        },
        {
          id: 3,
          name: "GitHub",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ktripathi2281/Skill-Barter",
          position: "top-52 left-80",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpg",
    },
    {
      id: 2,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Backend engineer, building with LLMs",
      image: "/images/me.jpg",
      description: [
        "Hey! I'm Kaustubh 👋, a software engineer at Tata Consultancy Services, where I work on a fintech/banking module: backend services in Java and Spring Boot, front-end features in JavaScript, and SQL tuning when things get slow.",
        "Most of my work is backend: REST APIs, auth, WebSockets, and databases (PostgreSQL, MongoDB, Redis). I like the unglamorous parts, like debugging production issues from logs and making queries faster with the right index.",
        "Lately I've been building LLM-powered systems: agents that call tools, tutors that know when not to give the answer, and the logging you need to see why an agent did what it did.",
        "I'm moving toward AI engineering, which to me means taking what I know about building reliable backends and applying it to software with models in it.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
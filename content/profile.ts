export const profile = {
  name: "Sumit Avhale",
  role: "Software Engineer",
  location: "Aurangabad, Maharashtra, India",
  email: "sumitavhale99@gmail.com",
  phone: "+91 8788395470",
  github: {
    username: "Sumit18-coder",
    url: "https://github.com/Sumit18-coder",
  },
  linkedin: "https://linkedin.com/in/sumit-avhale-50a944233/",
  resumeFile: "/resume.pdf",
  siteUrl: "https://REPLACE_WITH_DOMAIN.vercel.app",
  tagline: "Sumit Avhale builds backend systems that hold up under real traffic.",
  subhead:
    "Computer engineering graduate focused on layered architecture, REST APIs, and full-stack delivery — Spring Boot and Node.js on the server, React on the client, Postgres and MongoDB underneath.",
  summary: [
    "Most of my work starts the same way: a workflow with real edge cases — leave approvals, order state, video upload pipelines — that only holds together if the layers underneath are designed, not just written.",
    "I lean toward the backend because that's where the guarantees live: role-based access that actually restricts access, database schemas that don't fight you six months later, APIs documented well enough that someone else can pick them up without asking me first.",
    "I still build the front end when a project needs it — React interfaces wired to the same APIs — but I think in services first, screens second. That's the engineer I'm continuing to become.",
  ],
  principles: [
    { label: "layered architecture", detail: "MVC and service-layer separation by default, not an afterthought." },
    { label: "access control", detail: "RBAC and auth treated as core design, not a bolt-on." },
    { label: "documented APIs", detail: "Swagger and clear contracts so integration isn't guesswork." },
    { label: "still learning", detail: "New grad mindset — comfortable saying \"I looked it up\" and meaning it." },
  ],
  skills: [
    { category: "Languages", items: ["Java", "JavaScript", "Python", "SQL", "C", "C++"] },
    { category: "Frameworks", items: ["Spring Boot", "Spring MVC", "React", "Node.js", "Express", "Hibernate / JPA"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
    { category: "Practices", items: ["REST APIs", "Swagger", "Git / GitHub", "Agile / Scrum", "Unit testing", "Code review"] },
  ],
  projects: [
    {
      slug: "employee-leave-management-system",
      title: "Employee leave management system",
      description:
        "A full-stack leave management system covering applications, approvals, and employee records, with role-based access control and Swagger-documented endpoints.",
      details:
        "Engineered with Spring Boot, Spring Security, and Hibernate over PostgreSQL, applying OOP principles and layered architecture for scalable, reusable services. Developed 20+ REST APIs for employee management, leave applications, and approval workflows, with role-based access control, exception handling, validation, and Swagger documentation.",
      stack: ["Spring Boot", "Spring Security", "Hibernate", "PostgreSQL", "RBAC", "Swagger"],
      github: "#",
      demo: "#",
    },
    {
      slug: "videotube",
      title: "VideoTube",
      description:
        "A full-stack video-sharing platform with JWT authentication, uploads, playlists, and creator dashboards, with query optimization to keep playback and load times responsive under traffic.",
      details:
        "Built a full-stack video-sharing platform with JWT-based authentication, uploads, playlists, and dashboards, designing REST APIs and optimizing database queries. Backend workflows and queries were tuned to improve throughput and reduce latency under load.",
      stack: ["Node.js", "Express", "JWT", "REST APIs", "Query optimization"],
      github: "#",
      demo: "#",
    },
    {
      slug: "carrot-ecommerce-platform",
      title: "Carrot e-commerce platform",
      description:
        "A modular MVC commerce backend with RESTful APIs for products, users, and orders, paired with responsive React interfaces for the storefront.",
      details:
        "Designed a modular MVC backend and built responsive React.js interfaces, developing RESTful Node.js/Express.js APIs and integrating MongoDB for product, user, and order data. APIs handle core business logic across product, user, and order operations.",
      stack: ["React", "Node.js", "Express", "MongoDB", "MVC"],
      github: "#",
      demo: "#",
    },
  ],
  experience: [
    {
      company: "Adzevia AI",
      role: "Full stack developer intern",
      period: "Mar 2026 — Jun 2026",
      location: "Remote",
      bullets: [
        "Developed and supported REST APIs and backend services for SaaS applications, writing and debugging moderately complex features.",
        "Used Git and GitHub for version control within Agile sprint cycles and team development practices.",
        "Collaborated with cross-functional team members in sprints, communicating technical progress clearly.",
      ],
    },
  ],
  education: {
    degree: "B.Tech, Computer Engineering",
    school: "Government College of Engineering, Jalgaon",
    period: "Dec 2021 — Jun 2025",
  },
  certifications: [
    { year: "2024", title: "Web development bootcamp" },
    { year: "2022", title: "Data science — AcmeGrade" },
  ],
  apiConsoleLines: [
    { method: "POST", path: "/api/leave-requests", status: "201 Created" },
    { method: "GET", path: "/api/videos/:id/stream", status: "200 OK" },
    { method: "POST", path: "/api/orders", status: "201 Created" },
    { method: "GET", path: "/api/employees?role=manager", status: "200 OK" },
    { method: "POST", path: "/api/auth/login", status: "200 OK" },
  ],
} as const;

export type Profile = typeof profile;

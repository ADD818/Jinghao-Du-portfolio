import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Jinghao Du",
  role: "AI Engineer",
  tagline: "Building seamless digital experiences with code and creativity.",
  bio: "I am a passionate software engineer with over 8 years of experience in building high-performance web applications. I specialize in the React ecosystem, TypeScript, and integrating cutting-edge AI solutions. My goal is to bridge the gap between complex engineering and intuitive user design.",
  email: "dujinghao22@mails.ucas.ac.cn",
  github: "https://github.com", 
  linkedin: "https://linkedin.com",
  location: "Beijing, China"
};

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, icon: "atom" },
  { name: "TypeScript", level: 90, icon: "code" },
  { name: "Tailwind CSS", level: 95, icon: "palette" },
  { name: "Node.js", level: 85, icon: "server" },
  { name: "Gemini API / AI", level: 80, icon: "sparkles" },
  { name: "UI/UX Design", level: 75, icon: "pen-tool" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Nebula Analytics Dashboard",
    description: "A real-time SaaS analytics platform processing over 1M events daily. Features interactive D3.js charts and predictive AI modeling.",
    technologies: ["React", "D3.js", "Python", "AWS"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "#"
  },
  {
    id: "2",
    title: "Artify GenAI Suite",
    description: "An AI-powered creative toolkit allowing users to generate and edit images using natural language prompts via Gemini 2.5.",
    technologies: ["Next.js", "Gemini API", "Tailwind", "WebGL"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "#"
  },
  {
    id: "3",
    title: "TaskFlow Pro",
    description: "A collaborative project management tool designed for remote teams, featuring real-time synchronization and offline support.",
    technologies: ["React", "Firebase", "Redux Toolkit"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "#"
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Jinghao Du's personal portfolio website.
Your name is "Jinghao's Virtual Assistant".
Your goal is to answer questions about Jinghao's professional background, skills, and projects in a friendly, professional, and concise manner.
Use the following context:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role}
Bio: ${PERSONAL_INFO.bio}
Skills: ${SKILLS.map(s => s.name).join(', ')}
Projects: ${PROJECTS.map(p => `${p.title} (${p.description})`).join('; ')}
Contact: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}

If asked about something not in this context, politely say you only know about Alex's professional life.
Keep answers under 100 words unless asked for details.
`;

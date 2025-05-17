import { Project, Skill } from './types';

// Developer info
export const DEVELOPER_NAME = "JOHN DOE";
export const DEVELOPER_TITLE = "Full Stack Developer";
export const DEVELOPER_SUBTITLE = "Turning Ideas into Digital Reality";
export const DEVELOPER_BIO = "Passionate about creating seamless user experiences and robust backends. Specializing in React, Node.js, and cloud solutions.";

// Projects data
export const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with payment integration",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=350",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Analytics platform for social media management",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&h=350",
    tags: ["Vue.js", "Express", "D3.js"],
    link: "#"
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "Mobile app for workout tracking and nutrition",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&h=350",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#"
  }
];

export const WEB_PROJECTS: Project[] = [
  {
    id: 4,
    title: "Task Manager Pro",
    description: "Collaborative project management solution",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&h=350",
    tags: ["Angular", "TypeScript", "PostgreSQL"],
    link: "#"
  },
  {
    id: 5,
    title: "Property Finder",
    description: "Real estate listing and management platform",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&h=350",
    tags: ["React", "Django", "MySQL"],
    link: "#"
  },
  {
    id: 6,
    title: "ContentFlow CMS",
    description: "Headless CMS for digital content management",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&h=350",
    tags: ["Next.js", "GraphQL", "Strapi"],
    link: "#"
  }
];

// Skills data
export const FRONTEND_SKILLS: Skill[] = [
  {
    id: 1,
    name: "React",
    icon: "fa-react",
    iconColor: "text-blue-400",
    proficiency: 95
  },
  {
    id: 2,
    name: "Vue.js",
    icon: "fa-vuejs",
    iconColor: "text-green-500",
    proficiency: 85
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "fa-js-square",
    iconColor: "text-yellow-400",
    proficiency: 90
  },
  {
    id: 4,
    name: "CSS/SASS",
    icon: "fa-css3-alt",
    iconColor: "text-blue-500",
    proficiency: 88
  }
];

export const BACKEND_SKILLS: Skill[] = [
  {
    id: 5,
    name: "Node.js",
    icon: "fa-node-js",
    iconColor: "text-green-600",
    proficiency: 92
  },
  {
    id: 6,
    name: "SQL/NoSQL",
    icon: "fa-database",
    iconType: "fas",
    iconColor: "text-blue-300",
    proficiency: 85
  },
  {
    id: 7,
    name: "Python",
    icon: "fa-python",
    iconColor: "text-yellow-300",
    proficiency: 80
  },
  {
    id: 8,
    name: "API Design",
    icon: "fa-server",
    iconType: "fas",
    iconColor: "text-purple-400",
    proficiency: 90
  }
];

export const TOOLS_SKILLS: Skill[] = [
  {
    id: 9,
    name: "Docker",
    icon: "fa-docker",
    iconColor: "text-blue-500",
    proficiency: 85
  },
  {
    id: 10,
    name: "AWS",
    icon: "fa-aws",
    iconColor: "text-orange-400",
    proficiency: 80
  },
  {
    id: 11,
    name: "Git/GitHub",
    icon: "fa-git-alt",
    iconColor: "text-red-500",
    proficiency: 95
  },
  {
    id: 12,
    name: "Responsive",
    icon: "fa-mobile-alt",
    iconType: "fas",
    iconColor: "text-gray-300",
    proficiency: 92
  }
];

// Experience & Education
export const EXPERIENCE = [
  "Lead Developer at Tech Solutions (2020-Present)",
  "Frontend Specialist at WebCraft (2018-2020)",
  "Junior Developer at Digital Innovations (2016-2018)"
];

export const EDUCATION = [
  "MSc in Computer Science, Tech University",
  "BSc in Software Engineering, State University",
  "Various certifications in web technologies"
];

// Contact information
export const CONTACT_INFO = {
  email: "johndoe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA"
};

export const SOCIAL_LINKS = [
  { name: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
  { name: "GitHub", icon: "fab fa-github", url: "#" },
  { name: "Twitter", icon: "fab fa-twitter", url: "#" },
  { name: "Medium", icon: "fab fa-medium", url: "#" }
];

// Heroes images
export const HERO_IMAGE = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&h=1080";
export const ABOUT_BG_IMAGE = "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&h=1080";
export const PROFILE_IMAGE = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=900";
export const VISITOR_PROFILE_IMAGE = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300";
export const RECRUITER_PROFILE_IMAGE = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&h=300";

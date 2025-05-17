// Project types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

// Skill types
export interface Skill {
  id: number;
  name: string;
  icon: string;
  iconType?: string;
  iconColor: string;
  proficiency: number;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Profile types
export enum ProfileType {
  Visitor = 'visitor',
  Recruiter = 'recruiter'
}

export interface IntroState {
  introCompleted: boolean;
  profileSelected: ProfileType | null;
}

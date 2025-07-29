
export interface NavItem {
  id: string;
  name: string;
  icon: React.ElementType;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  achievement?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  company: string;
}

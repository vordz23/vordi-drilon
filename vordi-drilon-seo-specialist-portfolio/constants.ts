
import type { NavItem, ExperienceItem, EducationItem, CertificationItem, ProjectItem, TestimonialItem } from './types';
import { Home, List, GitFork, Briefcase, GraduationCap, Star, Quote, Mail } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', name: 'Home', icon: Home },
  { id: 'skills', name: 'Skills', icon: List },
  { id: 'projects', name: 'Projects', icon: GitFork },
  { id: 'experience', name: 'Experience', icon: Briefcase },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'certifications', name: 'Certifications', icon: Star },
  { id: 'testimonials', name: 'Testimonials', icon: Quote },
  { id: 'contact', name: 'Contact', icon: Mail },
];

export const CORE_SKILLS: string[] = [
  'SEO Strategy', 'On-Page SEO', 'Technical SEO', 'Link Building', 'Google Analytics',
  'Shopify SEO', 'Content Marketing', 'Data Analysis', 'Ahrefs', 'SEMrush', 'Klaviyo', 'Liquid'
];

export const SERVICES: string[] = [
    'SEO', 'Link Building', 'Lead Generation', 'Data Management', 
    'Appointment Setting', 'Shopify Web Development', 'Wordpress Web Development', 
    'Video Editing', 'Administrative Tasks'
];

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/vordi-drilon-47b367194/',
    facebook: 'https://www.facebook.com/2ez4vrdz/',
    instagram: 'https://www.instagram.com/2ez4vrdz/'
};

export const PROJECTS: ProjectItem[] = [
    {
        name: "E-commerce SEO Overhaul",
        description: "Executed a complete SEO strategy for a national Shopify store, resulting in a 150% increase in organic traffic and a 75% rise in conversion rates over six months.",
        tech: ["Shopify", "Ahrefs", "Google Analytics", "Klaviyo"],
    },
    {
        name: "Legal Firm Link Building Campaign",
        description: "Acquired over 50 high-authority backlinks from .gov, .edu, and top-tier legal directory domains, significantly boosting domain authority and keyword rankings for a competitive law firm.",
        tech: ["Ahrefs", "SEMrush", "Hunter.io", "HARO"],
    },
    {
        name: "SaaS Content & Keyword Strategy",
        description: "Developed and implemented a data-driven content marketing plan that doubled primary keyword rankings and drove a 200% increase in qualified demo requests within one year.",
        tech: ["Wordpress", "Google Search Console", "SurferSEO", "Clearscope"],
    }
];

export const TESTIMONIALS: TestimonialItem[] = [
    {
        quote: "Vordi's expertise in technical SEO and link building was a game-changer for our organic reach. The results speak for themselves. A true professional and a pleasure to work with.",
        name: "Abdi Abdinasir",
        company: "CEO, Supplying Seniors"
    },
    {
        quote: "The quality of backlinks Vordi secured for us was exceptional. His outreach is professional, ethical, and incredibly effective in a very competitive market.",
        name: "Carlos Carrera",
        company: "SEO Director, Arash Law"
    }
];


export const EXPERIENCES: ExperienceItem[] = [
    {
        role: "SEO Specialist",
        company: "Supplying Seniors",
        period: "Dec 2024 - Jun 2025",
        description: [
            "Perform on-page optimization from homepage to product pages.",
            "Perform technical audit to the website and increase the site speed.",
            "Add custom section using the liquid programming.",
            "Setup Klaviyo workflow and perform weekly email campaign.",
            "Create landing pages for the website using systeme.io.",
            "Overhaul revamp in the homepage to make it look modern."
        ]
    },
    {
        role: "Senior Link Builder",
        company: "Arash Law",
        period: "Aug 2023 - Dec 2023",
        description: [
            "Proactively seek link opportunities for guest post campaigns, identify .gov, .edu and .org link prospects for our resource campaigns, and perform citation placements on legal directories.",
            "Successfully placed backlinks from government websites.",
            "Rank high value keywords.",
            "Established relations and trust with government, chiropractor, therapist’s websites."
        ]
    },
    {
        role: "Senior Data Management Specialist",
        company: "Callbox Inc",
        period: "Jun 2020 - Jun 2023",
        description: [
            "Lead data profiling efforts for the Ilo-ilo and Siargao Callbox branches, ensuring the examination and verification of data to meet our client's Ideal Customer Profile (ICP) and target the correct decision-makers.",
            "Meticulously gather and collect data from data warehouses and online sources, adhering to legal data availability guidelines aligned with the client's ICP."
        ]
    },
    {
        role: "Social Media Marketing Specialist",
        company: "Callbox Inc",
        period: "Jan 2020 - Jun 2020",
        description: [
            "Serve as a LinkedIn appointment setter, conducting research, reaching out to the clients' Ideal Customer Profile (ICP), and efficiently qualifying and scheduling appointments for them."
        ]
    },
    {
        role: "Email Hyper-Personalizer",
        company: "◯ accelerate agency",
        period: "Jul 2022 - Aug 2022",
        description: [
            "Collect prospect data and craft hyper-personalized emails for targeted outreach as part of the guest post link building process."
        ]
    },
    {
        role: "Outreach Specialist | Link Builder",
        company: "Bahagia Staff",
        period: "Jan 2019 - Dec 2019",
        description: [
            "Responsible for the acquisition of backlinks through ethical, white hat SEO techniques.",
            "Worked with prominent clients, including Canva, Airtasker, Contactout, and ConsciousEd."
        ]
    }
];

export const EDUCATION: EducationItem[] = [
    {
        institution: "University of Southeastern Philippines",
        degree: "Bachelor of Science in Information Technology"
    },
    {
        institution: "Thompson Christian School",
        degree: "High School Diploma"
    },
    {
        institution: "Dawis Elementary School",
        degree: "First Honorable Mention"
    }
];

export const CERTIFICATIONS: CertificationItem[] = [
    {
        name: "Advanced Search Engine Optimization",
        issuer: "HubSpot"
    },
    {
        name: "Competitive Analysis and Keyword Research",
        issuer: "Semrush"
    }
];

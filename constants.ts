import { 
  ServiceItem, 
  EducationProgram, 
  TeamMember, 
  Testimonial, 
  ContactInfo, 
  WorkProcessStep 
} from "./types";

// ⭐ Correct local image imports
import RavikiranImg from "./assets/Ravikiran.png";
import RajendraImg from "./assets/Rajendra.png";
import YogeshImg from "./assets/Yogesh.png";
import GorakhImg from "./assets/Gorakh.png";
import NamrataImg from "./assets/Namrata.png";

export const HERO_CONTENT = {
  title: "RRY AI SOLUTIONS",
  subtitle: "Innovating the Future with Intelligent Software, AI & IoT",
  description: "We build powerful, scalable, and smart solutions that accelerate your digital transformation."
};

export const ABOUT_CONTENT = {
  title: "About Us",
  paragraphs: [
    "RRY AI SOLUTIONS is a technology-driven company specializing in Artificial Intelligence, IoT, and custom software development.",
    "Our mission is to help businesses automate operations, improve efficiency, and adopt intelligent systems for smarter decision-making.",
    "With deep technical expertise and modern development practices, we deliver secure, scalable, and performance-focused digital products for businesses of all sizes."
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: "AI & Machine Learning",
    iconKey: "brain",
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80",
    items: [
      "Predictive analytics",
      "AI automation systems",
      "NLP & chatbot development",
      "Computer vision solutions",
      "Custom ML model development"
    ]
  },
  {
    title: "Custom Software Development",
    iconKey: "code",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    items: [
      "Web applications",
      "Android & iOS apps",
      "ERP/CRM systems",
      "Product development",
      "API integration services"
    ]
  },
  {
    title: "Website Development & UI/UX",
    iconKey: "layout",
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80",
    items: [
      "Modern responsive website design",
      "User interface & dashboard design",
      "Figma/Adobe XD prototyping",
      "Branding & visual identity"
    ]
  },
  {
    title: "IoT Solutions",
    iconKey: "wifi",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    items: [
      "Smart home & office IoT systems",
      "Industrial IoT monitoring",
      "Sensor integration & connectivity",
      "Real-time data dashboards",
      "IoT cloud platforms & automation"
    ]
  },
  {
    title: "Cloud & DevOps",
    iconKey: "cloud",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    items: [
      "AWS, Azure, GCP deployment",
      "DevOps CI/CD pipelines",
      "Containers & Kubernetes",
      "Infrastructure security",
      "Server maintenance & monitoring"
    ]
  }
];

export const WHY_CHOOSE_US: string[] = [
  "Expert team in AI, IoT, and software engineering",
  "Quality-driven, efficient delivery process",
  "Tailored solutions for every business",
  "Scalable, future-ready system architecture",
  "Transparent communication & dedicated support",
  "End-to-end project execution from idea to deployment"
];

export const EDUCATION_PROGRAMS: EducationProgram[] = [
  {
    title: "Student Internship Programs",
    description: "Gain real-world experience working on live projects under expert mentorship. Perfect for students looking to bridge the gap between theory and practice.",
    features: ["Live Project Experience", "Mentorship from Industry Experts", "Certification upon Completion", "Job Placement Assistance"],
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
  },
  {
    title: "Industrial Training",
    description: "Comprehensive training modules designed to equip you with in-demand skills in AI, IoT, and Full Stack Development.",
    features: ["Hands-on Coding Sessions", "Latest Tech Stack", "IoT Hardware Prototyping", "Project-Based Learning"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
  },
  {
    title: "Corporate Workshops",
    description: "Tailored workshops for companies looking to upskill their workforce in emerging technologies and digital transformation strategies.",
    features: ["Customized Curriculum", "On-site or Remote Training", "AI Adoption Strategies", "Team Building & Innovation"],
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  }
];

// ⭐ Updated team with all members + local images
export const TEAM_DATA: TeamMember[] = [
  {
    name: "Ravikiran Shelar",
    role: "CEO, Director",
    description: "Provides strategic leadership and drives innovation across AI, IoT, and software development.",
    imageUrl: RavikiranImg
  },
  {
    name: "Rajendra Shelar",
    role: "MD, Director",
    description: "Oversees operations, business development, and organizational growth.",
    imageUrl: RajendraImg
  },
  {
    name: "Yogesh Shelke",
    role: "CTO, Director",
    description: "Leads technology strategy, engineering teams, and advanced product development initiatives.",
    imageUrl: YogeshImg
  },
  {
    name: "Gorakh Dongare",
    role: "IT Head",
    description: "Manages IT infrastructure, cybersecurity, and enterprise technology planning.",
    imageUrl: GorakhImg
  },
  {
    name: "Namrata Gaikwad",
    role: "Software Engineer",
    description: "Develops scalable applications and contributes to full-stack development and system architecture.",
    imageUrl: NamrataImg
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "RRY AI SOLUTIONS automated our workflow—brilliant team!" },
  { quote: "Their IoT system helped us monitor machines in real time." },
  { quote: "Great service, modern design, and excellent communication." }
];

export const CONTACT_INFO: ContactInfo = {
  email: "rryaisolutions@gmail.com",
  phone: "+91-9370665082",
  location: "Laxmi Enclave Lane no.2, Sharanpur Rd, next to Chai Tapri Cafe, Pandit Colony, Nashik, Maharashtra 422002"
};

export const WORK_PROCESS: WorkProcessStep[] = [
  { number: "01", title: "Discovery" },
  { number: "02", title: "Design" },
  { number: "03", title: "Development" },
  { number: "04", title: "Deployment" }
];

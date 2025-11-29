

export interface ServiceItem {
  title: string;
  description?: string;
  items: string[];
  iconKey: string;
  imageUrl?: string;
}

export interface EducationProgram {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface WorkProcessStep {
  number: string;
  title: string;
}
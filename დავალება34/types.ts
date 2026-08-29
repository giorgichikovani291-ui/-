export interface SocialLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  years: string;
}

export interface Project {
  id: string;
  title: string;
  tags: string[];
  colorFrom: string;
  colorTo: string;
  demoHref: string;
  codeHref: string;
}

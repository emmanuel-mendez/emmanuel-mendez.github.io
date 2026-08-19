import { Injectable } from '@angular/core';

export interface Project {
  slug: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  link?: string;
  sourceCode?: string;
  content: string;
}

const PROJECTS: Project[] = [
  {
    slug: 'emmanuel-mendez-website',
    title: 'Emmanuel Mendez Website',
    description:
      'Personal portfolio website built with Angular featuring server-side rendering, responsive design, and light/dark theme switching.',
    icon: 'web',
    technologies: ['Angular', 'TypeScript', 'CSS', 'SSR'],
    link: 'https://emmanuel-mendez-website.vercel.app/',
    sourceCode: 'https://github.com/emmanuel-mendez/emmanuel-mendez-website',
    content:
      'A personal portfolio website showcasing professional experience, skills, and projects. Built with Angular 21, it features server-side rendering for optimal SEO, responsive design with mobile-first approach, and light/dark theme support using CSS light-dark() function.',
  },
  {
    slug: 'ui-component-library',
    title: 'UI Component Library',
    description:
      'Reusable Angular component library built with atomic design principles, fully documented with Storybook and unit tested.',
    icon: 'widgets',
    technologies: ['Angular', 'TypeScript', 'Storybook', 'Jest'],
    sourceCode: 'https://github.com/emmanuel-mendez',
    content:
      'A comprehensive Angular component library following atomic design methodology. Components are organized into atoms, molecules, organisms, and templates. Fully documented with Storybook for interactive development and visual testing. Unit tested with Jest for reliability.',
  },
  {
    slug: 'state-management-dashboard',
    title: 'State Management Dashboard',
    description:
      'Frontend dashboard application with advanced global state management, reactive data streams, and dynamic data visualizations.',
    icon: 'dashboard',
    technologies: ['Angular', 'RxJS', 'TypeScript', 'CSS'],
    sourceCode: 'https://github.com/emmanuel-mendez',
    content:
      'A frontend dashboard application demonstrating advanced state management patterns with RxJS. Features reactive data streams, dynamic chart visualizations, and efficient data caching strategies for optimal performance.',
  },
];

@Injectable({ providedIn: 'root' })
export class ProjectsData {
  public readonly projects: readonly Project[] = PROJECTS;

  public getBySlug(slug: string): Project | undefined {
    return this.projects.find((project) => project.slug === slug);
  }
}

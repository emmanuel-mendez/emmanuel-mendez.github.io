import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Layout } from '@components/templates/layout/layout';
import { Page } from '@services/page/page';
import { ProjectsData } from '@services/projects/projects-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Layout, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly pageService = inject(Page);
  private readonly projectsData = inject(ProjectsData);

  public readonly projects = this.projectsData.projects;

  private readonly DESCRIPTION =
    'Projects - Emmanuel Mendez / +3 years of experience creating web applications using TypeScript and frontend frameworks, managing global states, documenting UI components and unit testing them. Expert using CSS frameworks and UI component libraries. Advanced knowledge of best practices, programming principles, object-oriented, reactive and functional programming, design patterns and atomic design.';

  constructor() {
    this.pageService.setMetaTags(this.DESCRIPTION);
  }
}

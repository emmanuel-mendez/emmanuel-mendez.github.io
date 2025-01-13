import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../../services/page/page.service';
import { LayoutComponent } from '../../templates/layout/layout.component';

@Component({
  selector: 'app-page-not-found',
  imports: [LayoutComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent implements OnInit {
  description: string =
    'Page Not Found - +3 years of experience creating web applications using TypeScript and frontend frameworks, managing global states, documenting UI components and unit testing them. Expert using CSS frameworks and UI component libraries. Advanced knowledge of best practices, programming principles, object-oriented, reactive and functional programming, design patterns and atomic design.';
  url: string = '/404';

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.pageService.setTitle(data['title']);
    });
    this.pageService.setMetaTags(this.description, this.url);
  }
}

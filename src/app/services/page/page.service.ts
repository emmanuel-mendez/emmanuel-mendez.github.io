import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private suffix: string = ' - Emmanuel Mendez';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {}

  public setTitle(title: string): void {
    this.titleService.setTitle(`${title}${this.suffix}`);
  }

  public setMetaTags(description: string, url?: string): void {
    this.metaService.updateTag({
      name: 'description',
      content: description,
    });
    this.metaService.addTag({
      property: 'og:title',
      content: this.titleService.getTitle(),
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: description,
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: `https://emmanuel-mendez.github.io${url ?? this.router.url}`,
    });
  }
}

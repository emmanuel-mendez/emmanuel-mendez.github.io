import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private suffix: string = ' - Emmanuel Mendez';

  constructor(private titleService: Title) {}

  public setTitle(title: string): void {
    this.titleService.setTitle(`${title}${this.suffix}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { LayoutComponent } from '../../templates/layout/layout.component';

@Component({
  selector: 'app-home',
  imports: [LayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private metaService: Meta) {}

  ngOnInit(): void {
    this.metaService.addTags([
      { property: 'og:title', content: 'Home - Emmanuel Mendez' },
    ]);
  }
}

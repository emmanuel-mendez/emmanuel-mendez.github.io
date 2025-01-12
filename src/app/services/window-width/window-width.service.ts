import {
  Injectable,
  Inject,
  PLATFORM_ID,
  signal,
  WritableSignal,
  Signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WindowWidthService {
  private width: WritableSignal<number>;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.width = signal<number>(this.getWindowWidth());
    this.listenToResize();
  }

  private getWindowWidth(): number {
    return isPlatformBrowser(this.platformId) ? window.innerWidth : 0;
  }

  private listenToResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      fromEvent(window, 'resize')
        .pipe(
          startWith(this.getWindowWidth()),
          map(() => window.innerWidth),
          debounceTime(50)
        )
        .subscribe((width) => this.width.set(width));
    }
  }

  public getWidth(): Signal<number> {
    return this.width;
  }
}

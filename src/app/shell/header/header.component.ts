import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="flex items-center justify-between px-6 py-4 bg-bliss-white/60 backdrop-blur-xl border-b border-bliss-border">
      <span class="text-2xl font-bold font-bliss-display text-bliss-dark">
        BLISS
      </span>
      <button class="relative p-2 text-bliss-muted hover:text-bliss-dark transition-colors duration-200">
        <i class="fa-regular fa-bell text-xl"></i>
        <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-bliss-rose"></span>
      </button>
    </header>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class HeaderComponent {}

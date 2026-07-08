import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  standalone: true,
  template: `
    <div class="fixed inset-0 flex flex-col items-center justify-center"
         style="background: radial-gradient(ellipse at center, #ddd6fe 0%, #ffffff 70%);">
      <div class="text-bliss-dark">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2"
             stroke-linecap="round" stroke-linejoin="round" class="mb-6">
          <circle cx="40" cy="42" r="3" fill="currentColor" opacity="0.4" />
          <path d="M40 42 Q32 24 40 12 Q48 24 40 42" opacity="0.7" />
          <path d="M40 42 Q22 28 16 16 Q26 24 40 42" opacity="0.5" />
          <path d="M40 42 Q58 28 64 16 Q54 24 40 42" opacity="0.5" />
          <path d="M40 42 Q32 56 26 66 Q34 58 40 42" opacity="0.6" />
          <path d="M40 42 Q48 56 54 66 Q46 58 40 42" opacity="0.6" />
        </svg>
      </div>

      <h1 class="text-4xl font-bliss-display font-light tracking-[0.15em] text-bliss-dark mb-12">
        bliss.
      </h1>

      <p class="text-xs font-bliss tracking-[0.2em] text-bliss-muted mb-6">
        Breathing in... Breathing out
      </p>

      <div class="w-32 h-[2px] bg-bliss-lavender/30 rounded-full overflow-hidden">
        <div class="h-full bg-bliss-mauve rounded-full transition-all duration-[2500ms] ease-in-out"
             [style.width]="progressWidth">
        </div>
      </div>
    </div>
  `,
})
export class SplashComponent implements OnInit {
  private router = inject(Router);
  progressWidth = '0%';

  ngOnInit(): void {
    requestAnimationFrame(() => {
      this.progressWidth = '100%';
    });
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 2600);
  }
}

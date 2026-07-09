import { Component, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface OnboardingSlide {
  title: string;
  subtitle: string;
  svgId: string;
}

@Component({
  selector: 'app-onboarding',
  standalone: true,
  template: `
    <div class="fixed inset-0 flex flex-col items-center justify-center"
         style="background: radial-gradient(ellipse at center, #ddd6fe 0%, #ffffff 70%);">

      @if (!isLastSlide()) {
        <button (click)="skip()"
                class="absolute top-6 right-6 text-sm text-bliss-muted hover:text-bliss-dark transition-colors z-10 font-medium">
          Skip
        </button>
      }

      <div class="w-full max-w-sm overflow-hidden relative flex-1 flex items-center">
        <div class="flex transition-transform duration-500 ease-out w-full"
             [style]="'transform: translateX(-' + currentSlide() * 100 + '%)'">
          @for (slide of slides; track slide.svgId) {
            <div class="flex-shrink-0 w-full flex flex-col items-center justify-center px-8">
              <span class="mb-8" [innerHTML]="svgSvgs[slide.svgId]"></span>
              <h2 class="text-2xl font-bliss-display font-bold text-bliss-dark text-center mb-3">
                {{ slide.title }}
              </h2>
              <p class="text-sm text-bliss-muted text-center leading-relaxed max-w-[260px]">
                {{ slide.subtitle }}
              </p>
            </div>
          }
        </div>
      </div>

      <div class="flex items-center justify-between w-full max-w-sm px-8 pb-14">
        <div class="flex items-center gap-2">
          @for (dot of [0,1,2]; track dot) {
            <span class="rounded-full transition-all duration-300"
                  [class]="dot === currentSlide() ? 'w-6 h-1.5 bg-bliss-mauve' : 'w-1.5 h-1.5 bg-bliss-lavender'">
            </span>
          }
        </div>
        <button (click)="nextSlide()"
                class="bg-bliss-dark text-white rounded-bliss-sm px-6 py-2.5 text-sm font-semibold
                       hover:bg-bliss-soft-dark active:scale-[0.97] transition-all duration-200">
          @if (isLastSlide()) {
            Get Started
          } @else {
            Next
          }
        </button>
      </div>
    </div>
  `,
})
export class OnboardingComponent {
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);

  currentSlide = signal(0);
  isLastSlide = computed(() => this.currentSlide() === this.slides.length - 1);

  readonly slides: OnboardingSlide[] = [
    { title: 'Find Your Inner Peace', subtitle: 'Start each day with a moment of calm. BLISS helps you track what matters.', svgId: 'peace' },
    { title: 'Track Your Journey', subtitle: 'Log your mood daily and discover patterns that shape your emotional wellbeing.', svgId: 'journey' },
    { title: 'Grow Together', subtitle: 'Share experiences and find support on a path to wellbeing.', svgId: 'together' },
  ];

  readonly svgSvgs: Record<string, SafeHtml> = {
    peace: this.sanitizer.bypassSecurityTrustHtml(
      `<svg viewBox="0 0 120 120" fill="none" stroke="#a78bfa" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="60" cy="60" r="48" stroke-opacity="0.15"/>
        <circle cx="60" cy="60" r="36" stroke-opacity="0.25"/>
        <circle cx="60" cy="60" r="3" fill="#a78bfa" stroke="none" opacity="0.4"/>
        <path d="M60 60 Q48 34 60 16 Q72 34 60 60" opacity="0.7"/>
        <path d="M60 60 Q34 40 24 24 Q38 34 60 60" opacity="0.5"/>
        <path d="M60 60 Q86 40 96 24 Q82 34 60 60" opacity="0.5"/>
        <path d="M60 60 Q48 80 40 96 Q52 84 60 60" opacity="0.6"/>
        <path d="M60 60 Q72 80 80 96 Q68 84 60 60" opacity="0.6"/>
      </svg>`
    ),
    journey: this.sanitizer.bypassSecurityTrustHtml(
      `<svg viewBox="0 0 120 120" fill="none" stroke="#a78bfa" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <linearGradient id="journeyFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#c4b5fd" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#c4b5fd" stop-opacity="0.05"/>
          </linearGradient>
        </defs>
        <polyline points="15,85 35,68 55,74 75,48 95,30" stroke-width="2"/>
        <path d="M15,105 L15,85 L35,68 L55,74 L75,48 L95,30 L95,105 Z" fill="url(#journeyFill)"/>
        <circle cx="15" cy="85" r="3.5" fill="#a78bfa" stroke="white" stroke-width="1.5"/>
        <circle cx="35" cy="68" r="3.5" fill="#a78bfa" stroke="white" stroke-width="1.5"/>
        <circle cx="55" cy="74" r="3.5" fill="#a78bfa" stroke="white" stroke-width="1.5"/>
        <circle cx="75" cy="48" r="3.5" fill="#a78bfa" stroke="white" stroke-width="1.5"/>
        <circle cx="95" cy="30" r="3.5" fill="#a78bfa" stroke="white" stroke-width="1.5"/>
      </svg>`
    ),
    together: this.sanitizer.bypassSecurityTrustHtml(
      `<svg viewBox="0 0 120 120" fill="none" stroke="#c4b5fd" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="44" cy="48" r="28" opacity="0.4"/>
        <circle cx="76" cy="48" r="28" opacity="0.4"/>
        <circle cx="60" cy="74" r="28" opacity="0.4"/>
        <circle cx="44" cy="42" r="6" opacity="0.6"/>
        <path d="M44 48v10M38 53h12" opacity="0.6"/>
        <circle cx="76" cy="42" r="6" opacity="0.6"/>
        <path d="M76 48v10M70 53h12" opacity="0.6"/>
        <circle cx="60" cy="68" r="6" opacity="0.6"/>
        <path d="M60 74v10M54 79h12" opacity="0.6"/>
      </svg>`
    ),
  };

  nextSlide(): void {
    this.currentSlide.update(n => n + 1);
  }

  finish(): void {
    localStorage.setItem('bliss_onboarding', 'done');
    this.router.navigateByUrl('/login');
  }

  skip(): void {
    this.finish();
  }
}

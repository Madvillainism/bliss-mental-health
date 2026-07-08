import { Component, inject, signal, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MockAuthService } from '../../shared/services/mock-auth.service';
import { MockNotificationService } from '../../shared/services/mock-notification.service';

interface MoodOption {
  id: string;
  label: string;
  bgFrom: string;
  bgTo: string;
  borderColor: string;
  iconColor: string;
  value: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="flex flex-col min-h-full px-5 pt-6 pb-4">

      <div class="flex items-start justify-between mb-6">
        <div>
          <p class="text-sm text-bliss-muted font-bliss">{{ greeting }}</p>
          <h1 class="text-xl font-bliss-display font-bold text-bliss-dark mt-0.5">
            How are you feeling today?
          </h1>
        </div>
        <div class="shrink-0">
          <svg width="44" height="44" viewBox="0 0 44 44" class="rounded-full">
            <circle cx="22" cy="22" r="22" fill="#c4b5fd" />
            <text x="22" y="22" text-anchor="middle" dominant-baseline="central"
                  fill="#1e1b2e" font-size="15" font-weight="600" font-family="Outfit, sans-serif">
              {{ auth.currentUser()?.initials }}
            </text>
          </svg>
        </div>
      </div>

      <div class="mb-6">
        <div class="grid grid-cols-5 gap-1.5">
          @for (mood of moods; track mood.id) {
            <button
              (click)="selectMood(mood)"
              class="flex flex-col items-center gap-1.5 py-2.5 px-1 rounded-bliss transition-all duration-300"
              [class]="mood.bgFrom + ' ' + mood.bgTo"
              [class.scale-105]="selectedMoodId() === mood.id"
              [class.opacity-50]="selectedMoodId() !== null && selectedMoodId() !== mood.id"
              [class.ring-2]="selectedMoodId() === mood.id"
              [class.ring-offset-2]="selectedMoodId() === mood.id"
              [style]="selectedMoodId() === mood.id ? { '--tw-ring-color': mood.borderColor } : {}"
            >
              <span [class]="mood.iconColor" [innerHTML]="moodSvgs[mood.id]"></span>
              <span class="text-[10px] font-semibold text-bliss-dark text-center leading-tight">
                {{ mood.label }}
              </span>
            </button>
          }
        </div>
      </div>

      <div class="space-y-3 mt-1">
        <div
          class="relative overflow-hidden rounded-bliss p-5 cursor-pointer active:scale-[0.98] transition-transform duration-200"
          style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);">
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-1">
              <i class="fa-solid fa-cloud text-lg text-bliss-sky"></i>
              <h3 class="text-sm font-bliss-display font-semibold text-bliss-dark">5 min Breathing Exercise</h3>
            </div>
            <p class="text-xs text-bliss-muted">Follow the guide to center yourself</p>
          </div>
          <div class="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-white/20 blur-xl"></div>
        </div>

        <div
          class="relative overflow-hidden rounded-bliss p-5 cursor-pointer active:scale-[0.98] transition-transform duration-200"
          style="background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);">
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-1">
              <i class="fa-solid fa-pen text-lg text-bliss-peach"></i>
              <h3 class="text-sm font-bliss-display font-semibold text-bliss-dark">Daily Journaling</h3>
            </div>
            <p class="text-xs text-bliss-muted">Write down your thoughts for today</p>
          </div>
          <div class="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-white/20 blur-xl"></div>
        </div>
      </div>
    </div>
  `,
})
export class DashboardComponent implements OnInit {
  protected auth = inject(MockAuthService);
  private notificationService = inject(MockNotificationService);

  selectedMoodId = signal<string | null>(null);

  greeting = '';

  private sanitizer = inject(DomSanitizer);

  readonly moodSvgs: Record<string, SafeHtml> = {
    radiant: this.sanitizer.bypassSecurityTrustHtml(
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
        <circle cx="12" cy="12" r="4.5"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      </svg>`
    ),
    good: this.sanitizer.bypassSecurityTrustHtml(
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>`
    ),
    okay: this.sanitizer.bypassSecurityTrustHtml(
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
        <path d="M2 15c2-3 4-5 6-5s4 3 6 3 4-3 6-3 4 2 6 5"/>
      </svg>`
    ),
    low: this.sanitizer.bypassSecurityTrustHtml(
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
        <path d="M17.5 19a3.5 3.5 0 0 0 0-7h-1A5.5 5.5 0 0 0 6 13.5A3.5 3.5 0 0 0 7.5 19h10z"/>
      </svg>`
    ),
    stressed: this.sanitizer.bypassSecurityTrustHtml(
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
        <path d="M12 3L3 20h18L12 3z"/>
        <path d="M12 10v3"/>
        <circle cx="12" cy="16.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>`
    ),
  };

  readonly moods: MoodOption[] = [
    { id: 'radiant', label: 'Radiant', bgFrom: 'bg-gradient-to-br', bgTo: 'from-amber-200 to-rose-200', borderColor: '#f59e0b', iconColor: 'text-amber-600', value: 5 },
    { id: 'good', label: 'Good', bgFrom: 'bg-gradient-to-br', bgTo: 'from-emerald-200 to-teal-200', borderColor: '#10b981', iconColor: 'text-emerald-600', value: 4 },
    { id: 'okay', label: 'Okay', bgFrom: 'bg-gradient-to-br', bgTo: 'from-blue-200 to-indigo-200', borderColor: '#3b82f6', iconColor: 'text-blue-600', value: 3 },
    { id: 'low', label: 'Low', bgFrom: 'bg-gradient-to-br', bgTo: 'from-slate-200 to-slate-300', borderColor: '#64748b', iconColor: 'text-slate-600', value: 2 },
    { id: 'stressed', label: 'Stressed', bgFrom: 'bg-gradient-to-br', bgTo: 'from-purple-200 to-violet-300', borderColor: '#7c3aed', iconColor: 'text-purple-600', value: 1 },
  ];

  private readonly MOOD_STORAGE_KEY = 'bliss_moods';

  ngOnInit(): void {
    this.setGreeting();
    this.loadTodayMood();
  }

  private setGreeting(): void {
    const hour = new Date().getHours();
    const name = this.auth.currentUser()?.name || 'there';
    if (hour < 12) this.greeting = `Good morning, ${name}`;
    else if (hour < 18) this.greeting = `Good afternoon, ${name}`;
    else this.greeting = `Good evening, ${name}`;
  }

  private getTodayKey(): string {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  private loadTodayMood(): void {
    try {
      const stored = localStorage.getItem(this.MOOD_STORAGE_KEY);
      if (stored) {
        const all = JSON.parse(stored);
        const todayKey = this.getTodayKey();
        if (all[todayKey]) {
          this.selectedMoodId.set(all[todayKey].moodId);
        }
      }
    } catch { /* ignore */ }
  }

  private saveMood(moodId: string): void {
    try {
      const stored = localStorage.getItem(this.MOOD_STORAGE_KEY);
      const all: Record<string, { moodId: string; value: number; date: string }> = stored ? JSON.parse(stored) : {};
      const todayKey = this.getTodayKey();
      const mood = this.moods.find(m => m.id === moodId);
      all[todayKey] = { moodId, value: mood?.value ?? 3, date: todayKey };
      localStorage.setItem(this.MOOD_STORAGE_KEY, JSON.stringify(all));
    } catch { /* ignore */ }
  }

  selectMood(mood: MoodOption): void {
    this.selectedMoodId.set(mood.id);
    this.saveMood(mood.id);

    if (mood.id === 'stressed') {
      this.notificationService.emitSupportEmail();
    }
  }
}

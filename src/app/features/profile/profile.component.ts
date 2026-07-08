import { Component, inject, signal, model, OnInit } from '@angular/core';
import { MockAuthService } from '../../shared/services/mock-auth.service';

interface Goal {
  label: string;
  current: number;
  max: number;
  unit: string;
  color: string;
}

interface Setting {
  label: string;
  icon: string;
  key: string;
  enabled: boolean;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div class="flex flex-col min-h-full px-5 pt-8 pb-4 items-center">

      <div class="relative mb-4">
        <svg width="72" height="72" viewBox="0 0 72 72">
          <defs>
            <linearGradient id="avatarRing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#c4b5fd" />
              <stop offset="100%" stop-color="#a78bfa" />
            </linearGradient>
          </defs>
          <circle cx="36" cy="36" r="34" fill="none" stroke="url(#avatarRing)" stroke-width="2.5" />
          <circle cx="36" cy="36" r="30" fill="#ddd6fe" />
          <text x="36" y="36" text-anchor="middle" dominant-baseline="central"
                fill="#1e1b2e" font-size="20" font-weight="600" font-family="Outfit, sans-serif">
            {{ auth.currentUser()?.initials }}
          </text>
        </svg>
      </div>

      <h2 class="text-lg font-bliss-display font-bold text-bliss-dark">{{ auth.currentUser()?.name }}</h2>
      <div class="flex items-center gap-1.5 mt-1 mb-6">
        <i class="fa-solid fa-fire text-bliss-peach text-xs"></i>
        <span class="text-xs text-bliss-muted">12 day streak</span>
      </div>

      <h3 class="text-xs font-semibold text-bliss-muted uppercase tracking-wider self-start mb-3">Goals</h3>

      <div class="w-full space-y-4 mb-6">
        @for (goal of goals; track goal.label) {
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-xs font-medium text-bliss-dark">{{ goal.label }}</span>
              <span class="text-[11px] text-bliss-muted">{{ goal.current }}{{ goal.unit }}</span>
            </div>
            <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full rounded-full transition-all duration-500"
                   [style]="{ width: (goal.current / goal.max * 100) + '%', background: goal.color }">
              </div>
            </div>
          </div>
        }
      </div>

      <h3 class="text-xs font-semibold text-bliss-muted uppercase tracking-wider self-start mb-3">Settings</h3>

      <div class="w-full space-y-1">
        @for (setting of settings; track setting.key) {
          <div class="flex items-center justify-between py-2.5 px-1">
            <div class="flex items-center gap-3">
              <i class="fa-solid {{ setting.icon }} text-sm text-bliss-muted w-5"></i>
              <span class="text-sm text-bliss-dark">{{ setting.label }}</span>
            </div>
            <button
              (click)="toggleSetting(setting)"
              role="switch"
              [attr.aria-checked]="setting.enabled"
              class="relative w-11 h-6 rounded-full transition-colors duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-bliss-mauve/30"
              [class]="setting.enabled ? 'bg-bliss-soft-dark' : 'bg-gray-200'"
            >
              <span class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ease-out"
                    [class]="setting.enabled ? 'translate-x-5' : 'translate-x-0'">
              </span>
            </button>
          </div>
        }
      </div>

    </div>
  `,
})
export class ProfileComponent implements OnInit {
  protected auth = inject(MockAuthService);

  readonly goals: Goal[] = [
    { label: 'Sleep Quality', current: 8, max: 10, unit: '/10', color: '#a78bfa' },
    { label: 'Meditation', current: 4, max: 7, unit: ' days', color: '#a7f3d0' },
    { label: 'Journaling', current: 5, max: 7, unit: ' days', color: '#bae6fd' },
  ];

  settings: Setting[] = [
    { label: 'Notifications', icon: 'fa-bell', key: 'notifications', enabled: true },
    { label: 'Data Privacy', icon: 'fa-shield', key: 'privacy', enabled: true },
    { label: 'Dark Mode', icon: 'fa-moon', key: 'darkMode', enabled: false },
  ];

  private readonly SETTINGS_KEY = 'bliss_settings';

  ngOnInit(): void {
    this.loadSettings();
  }

  private loadSettings(): void {
    try {
      const stored = localStorage.getItem(this.SETTINGS_KEY);
      if (stored) {
        const saved = JSON.parse(stored) as Record<string, boolean>;
        this.settings = this.settings.map(s => ({ ...s, enabled: saved[s.key] ?? s.enabled }));
      }
    } catch { /* ignore */ }
  }

  private saveSettings(): void {
    const data: Record<string, boolean> = {};
    this.settings.forEach(s => { data[s.key] = s.enabled; });
    localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(data));
  }

  toggleSetting(setting: Setting): void {
    setting.enabled = !setting.enabled;
    this.saveSettings();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotificationBannerComponent } from '../shared/components/notification-banner/notification-banner.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavBarComponent, NotificationBannerComponent],
  template: `
    <div class="flex items-center justify-center min-h-[100dvh] bg-bliss-cream p-4">
      <div class="shell-viewport relative w-full max-w-[430px] h-[100dvh] bg-bliss-white shadow-2xl flex flex-col overflow-hidden
                  rounded-3xl border border-bliss-glass-border">
        <app-header />
        <main class="flex-1 overflow-y-auto">
          <router-outlet />
        </main>
        <app-nav-bar />
        <app-notification-banner />
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    @media (max-width: 430px) {
      .shell-viewport {
        max-width: 100%;
        border-radius: 0;
      }
    }
  `],
})
export class ShellComponent {}

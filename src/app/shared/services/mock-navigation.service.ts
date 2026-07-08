import { Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

export interface NavTab {
  index: number;
  label: string;
  icon: string;
  route: string;
}

@Injectable({ providedIn: 'root' })
export class MockNavigationService {
  readonly activeTabIndex: WritableSignal<number> = signal(0);

  readonly tabs: NavTab[] = [
    { index: 0, label: 'Home', icon: 'fa-house', route: '/dashboard' },
    { index: 1, label: 'Mood', icon: 'fa-face-smile', route: '/mood' },
    { index: 2, label: 'Community', icon: 'fa-users', route: '/community' },
    { index: 3, label: 'Profile', icon: 'fa-user', route: '/profile' },
  ];

  constructor(private router: Router) {}

  navigate(index: number): void {
    const tab = this.tabs.find(t => t.index === index);
    if (tab) {
      this.activeTabIndex.set(index);
      this.router.navigateByUrl(tab.route);
    }
  }
}

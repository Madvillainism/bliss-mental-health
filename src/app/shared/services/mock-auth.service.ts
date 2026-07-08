import { Injectable, signal, computed, Signal } from '@angular/core';

export interface BlissUser {
  name: string;
  email: string;
  initials: string;
}

@Injectable({ providedIn: 'root' })
export class MockAuthService {
  private readonly STORAGE_KEY = 'bliss_auth';

  private userSignal = signal<BlissUser | null>(this.loadUser());

  readonly currentUser = this.userSignal.asReadonly();
  readonly isAuthenticated: Signal<boolean> = computed(() => this.userSignal() !== null);

  private loadUser(): BlissUser | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  private saveUser(user: BlissUser | null): void {
    if (user) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  login(email: string, _password: string): BlissUser {
    const name = email.includes('@') ? email.split('@')[0] : email;
    const clean = name.replace(/[^a-zA-Z0-9]/g, '');
    const initials = (clean.slice(0, 2) || 'U').toUpperCase();
    const user: BlissUser = { name: clean, email, initials };
    this.saveUser(user);
    this.userSignal.set(user);
    return user;
  }

  register(email: string, password: string): BlissUser {
    return this.login(email, password);
  }

  logout(): void {
    this.saveUser(null);
    this.userSignal.set(null);
  }
}

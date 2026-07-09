import { Component, inject, model } from '@angular/core';
import { Router } from '@angular/router';
import { MockAuthService } from '../../shared/services/mock-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="fixed inset-0 flex items-center justify-center p-6"
         style="background: radial-gradient(ellipse at center, #ddd6fe 0%, #ffffff 70%);">
      <div class="w-full max-w-sm bg-white/85 backdrop-blur-md rounded-bliss-lg shadow-xl shadow-slate-100 p-8">

        <h1 class="text-2xl font-bliss-display font-semibold text-bliss-dark text-center mb-2">
          Welcome back,<br />take a deep breath.
        </h1>
        <p class="text-sm text-bliss-muted text-center mb-8">
          {{ isRegisterMode ? 'Create your account' : 'Sign in to continue' }}
        </p>

        <div class="space-y-4">
          <div class="relative">
            <i class="fa-regular fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-sm text-bliss-muted pointer-events-none"></i>
            <input
              type="email"
              placeholder="Email address"
              [value]="email()"
              (input)="email.set($any($event.target).value)"
              class="w-full bg-gray-50 rounded-2xl pl-10 pr-4 py-3 text-sm text-bliss-dark placeholder-bliss-muted
                     border border-bliss-border focus:outline-none focus:ring-2 focus:ring-bliss-mauve/30 focus:border-bliss-mauve transition-all"
            />
          </div>

          <div class="relative">
            <i class="fa-regular fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-sm text-bliss-muted pointer-events-none"></i>
            <input
              type="password"
              placeholder="Password"
              [value]="password()"
              (input)="password.set($any($event.target).value)"
              class="w-full bg-gray-50 rounded-2xl pl-10 pr-4 py-3 text-sm text-bliss-dark placeholder-bliss-muted
                     border border-bliss-border focus:outline-none focus:ring-2 focus:ring-bliss-mauve/30 focus:border-bliss-mauve transition-all"
            />
          </div>

          @if (error()) {
            <p class="text-xs text-bliss-rose text-center">{{ error() }}</p>
          }

          <button
            (click)="handleSubmit()"
            class="w-full bg-bliss-dark text-white font-medium rounded-2xl py-3 text-sm
                   hover:bg-bliss-soft-dark active:scale-[0.98] transition-all duration-200"
          >
            {{ isRegisterMode ? 'Sign Up' : 'Sign In' }}
          </button>

          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-bliss-border"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-white/80 px-3 text-xs text-bliss-muted">or</span>
            </div>
          </div>

          <button
            (click)="handleGoogle()"
            class="w-full flex items-center justify-center gap-3 bg-white border border-bliss-border rounded-2xl py-3
                   hover:bg-gray-50 active:scale-[0.98] transition-all duration-200"
          >
            <i class="fa-brands fa-google text-lg text-bliss-muted"></i>
            <span class="text-sm text-bliss-muted">Continue with Google</span>
          </button>

          <p class="text-xs text-bliss-muted text-center mt-6">
            {{ isRegisterMode ? 'Already have an account?' : "Don't have an account?" }}
            <button (click)="toggleMode()" class="text-bliss-mauve font-medium hover:underline">
              {{ isRegisterMode ? 'Sign in' : 'Sign up' }}
            </button>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  private auth = inject(MockAuthService);
  private router = inject(Router);

  email = model('');
  password = model('');
  error = model('');
  isRegisterMode = false;

  toggleMode(): void {
    this.isRegisterMode = !this.isRegisterMode;
    this.error.set('');
  }

  handleSubmit(): void {
    const e = this.email().trim();
    const p = this.password().trim();

    if (!e || !p) {
      this.error.set('Please fill in all fields');
      return;
    }

    if (!e.includes('@')) {
      this.error.set('Please enter a valid email');
      return;
    }

    if (this.isRegisterMode && p.length < 3) {
      this.error.set('Password must be at least 3 characters');
      return;
    }

    if (this.isRegisterMode) {
      this.auth.register(e, p);
    } else {
      this.auth.login(e, p);
    }

    this.router.navigateByUrl('/dashboard');
  }

  handleGoogle(): void {
    this.auth.login('guest@bliss.app', '');
    this.router.navigateByUrl('/dashboard');
  }
}

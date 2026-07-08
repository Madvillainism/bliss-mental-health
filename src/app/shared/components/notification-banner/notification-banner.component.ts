import { Component, inject } from '@angular/core';
import { MockNotificationService } from '../../services/mock-notification.service';

@Component({
  selector: 'app-notification-banner',
  standalone: true,
  template: `
    <div class="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
      @for (notif of notificationService.notifications(); track notif.id) {
        <div class="pointer-events-auto bg-white rounded-2xl shadow-xl border border-bliss-border/60 p-4
                    animate-banner-in flex items-start gap-3"
             [class]="notif.type === 'support' ? 'border-l-4 border-l-bliss-rose' : ''">
          <div class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
               [class]="notif.type === 'support' ? 'bg-bliss-rose/20' : 'bg-bliss-lavender/20'">
            <i class="fa-regular fa-envelope text-xs"
               [class]="notif.type === 'support' ? 'text-bliss-rose' : 'text-bliss-mauve'"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between mb-0.5">
              <span class="text-[11px] font-semibold text-bliss-dark">{{ notif.title }}</span>
              <button (click)="notificationService.dismiss(notif.id)"
                      class="text-bliss-muted hover:text-bliss-dark transition-colors ml-2">
                <i class="fa-solid fa-xmark text-xs"></i>
              </button>
            </div>
            <p class="text-[11px] text-bliss-muted leading-relaxed">{{ notif.message }}</p>
            <span class="text-[9px] text-bliss-lavender mt-1 block font-medium">notifications&#64;bliss.app</span>
          </div>
        </div>
      }
    </div>
  `,
})
export class NotificationBannerComponent {
  protected notificationService = inject(MockNotificationService);
}

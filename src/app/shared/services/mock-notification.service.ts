import { Injectable, signal } from '@angular/core';

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  type: 'support' | 'reminder' | 'system';
}

@Injectable({ providedIn: 'root' })
export class MockNotificationService {
  private notificationsSignal = signal<Notification[]>([]);

  readonly notifications = this.notificationsSignal.asReadonly();

  private idCounter = 0;
  private genId(): string {
    return `notif_${++this.idCounter}_${Date.now()}`;
  }

  emit(title: string, message: string, type: Notification['type'] = 'system'): void {
    const id = this.genId();
    const notif: Notification = { id, title, message, timestamp: new Date(), type };
    this.notificationsSignal.update(list => [...list, notif]);

    setTimeout(() => this.dismiss(id), 5000);
  }

  dismiss(id: string): void {
    this.notificationsSignal.update(list => list.filter(n => n.id !== id));
  }

  emitSupportEmail(): void {
    this.emit(
      'Support Request',
      'A BLISS support team member will reach out to you shortly. You are not alone.',
      'support'
    );
  }
}

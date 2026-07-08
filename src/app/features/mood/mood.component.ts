import { Component, signal, computed } from '@angular/core';

interface WeekPoint {
  day: string;
  value: number;
  label: string;
}

interface DayNote {
  moodId: string;
  moodLabel: string;
  moodColor: string;
  notes: string;
}

const WEEK_DATA: WeekPoint[] = [
  { day: 'Mon', value: 4, label: 'Good' },
  { day: 'Tue', value: 3, label: 'Okay' },
  { day: 'Wed', value: 2, label: 'Low' },
  { day: 'Thu', value: 4, label: 'Good' },
  { day: 'Fri', value: 5, label: 'Radiant' },
  { day: 'Sat', value: 3, label: 'Okay' },
  { day: 'Sun', value: 4, label: 'Good' },
];

const MOOD_COLORS: Record<string, string> = {
  radiant: 'bg-amber-200',
  good: 'bg-emerald-200',
  okay: 'bg-blue-200',
  low: 'bg-slate-200',
  stressed: 'bg-purple-200',
};

const HARDCODED_NOTES: Record<number, DayNote> = {
  1: { moodId: 'good', moodLabel: 'Good', moodColor: '#a7f3d0', notes: 'Started the week strong. Morning meditation felt great.' },
  5: { moodId: 'radiant', moodLabel: 'Radiant', moodColor: '#fdba74', notes: 'Amazing day! Went for a walk in the park and finished my book.' },
  15: { moodId: 'okay', moodLabel: 'Okay', moodColor: '#bae6fd', notes: 'Pretty balanced day. Work was calm, had a nice lunch.' },
  20: { moodId: 'low', moodLabel: 'Low', moodColor: '#94a3b8', notes: 'Felt a bit tired today. Went to bed early.' },
};

@Component({
  selector: 'app-mood',
  standalone: true,
  template: `
    <div class="flex flex-col min-h-full px-5 pt-6 pb-4">

      <h2 class="text-lg font-bliss-display font-bold text-bliss-dark mb-5">This Week</h2>

      <div class="w-full mb-6">
        <svg viewBox="0 0 280 130" class="w-full h-auto">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#c4b5fd" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#c4b5fd" stop-opacity="0.05" />
            </linearGradient>
          </defs>

          <polyline
            [attr.points]="linePoints()"
            fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          />
          <path [attr.d]="fillPath()" fill="url(#chartFill)" />

          @for (pt of chartPoints(); track pt.day; let i = $index) {
            <circle [attr.cx]="pt.x" [attr.cy]="pt.y" r="3.5" fill="#a78bfa" stroke="white" stroke-width="1.5" />
            <text [attr.x]="pt.x" y="125" text-anchor="middle" fill="#8b87a0" font-size="9" font-family="Inter, sans-serif">
              {{ pt.day }}
            </text>
          }
        </svg>
      </div>

      <h3 class="text-sm font-bliss-display font-semibold text-bliss-dark mb-3">July 2026</h3>

      <div class="grid grid-cols-7 gap-1 mb-2">
        @for (day of ['S', 'M', 'T', 'W', 'T', 'F', 'S']; track day) {
          <div class="text-center text-[10px] font-medium text-bliss-muted py-1">{{ day }}</div>
        }
      </div>

      @for (week of calendarWeeks(); track $index) {
        <div class="grid grid-cols-7 gap-1">
          @for (day of week; track $index + '-' + (day ?? 'e')) {
            <button
              (click)="selectDay(day)"
              [class]="getDayClass(day)"
              [disabled]="day === null"
            >
              {{ day ?? '' }}
            </button>
          }
        </div>
      }

      @if (selectedNote(); as note) {
        <div class="mt-4 rounded-bliss p-4 animate-fade-in"
             [style]="{ background: note.moodColor + '30', borderLeft: '4px solid ' + note.moodColor }">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-semibold text-bliss-dark">{{ note.moodLabel }}</span>
          </div>
          <p class="text-xs text-bliss-muted leading-relaxed">{{ note.notes }}</p>
        </div>
      }
    </div>
  `,
})
export class MoodComponent {
  selectedDay = signal<number | null>(null);

  readonly chartPoints = computed(() => {
    const w = 280;
    const h = 130;
    const pad = { top: 20, bottom: 28, left: 15, right: 15 };
    const cw = w - pad.left - pad.right;
    const ch = h - pad.top - pad.bottom;
    const yMin = 1;
    const yMax = 5;

    return WEEK_DATA.map((d, i) => ({
      day: d.day,
      value: d.value,
      x: pad.left + (i / (WEEK_DATA.length - 1)) * cw,
      y: pad.top + ch - ((d.value - yMin) / (yMax - yMin)) * ch,
    }));
  });

  readonly linePoints = computed(() =>
    this.chartPoints().map(p => `${p.x},${p.y}`).join(' ')
  );

  readonly fillPath = computed(() => {
    const pts = this.chartPoints();
    if (pts.length === 0) return '';
    const first = pts[0];
    const last = pts[pts.length - 1];
    const bottomY = 130 - 28;
    const top = pts.map(p => `${p.x},${p.y}`).join(' L ');
    return `M ${first.x},${bottomY} L ${top} L ${last.x},${bottomY} Z`;
  });

  readonly selectedNote = computed(() => {
    const day = this.selectedDay();
    if (day === null) return null;
    return HARDCODED_NOTES[day] ?? null;
  });

  readonly currentMonth = new Date().getMonth();
  readonly currentYear = new Date().getFullYear();

  readonly calendarWeeks = computed(() => {
    const year = this.currentYear;
    const month = this.currentMonth;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date().getDate();

    const weeks: (number | null)[][] = [];
    let week: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) week.push(null);

    for (let d = 1; d <= daysInMonth; d++) {
      week.push(d);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      while (week.length < 7) week.push(null);
      weeks.push(week);
    }

    return weeks;
  });

  private getMoodForDay(day: number): string | null {
    const stored = localStorage.getItem('bliss_moods');
    if (!stored) return null;
    try {
      const all = JSON.parse(stored);
      const dateKey = `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const entry = all[dateKey];
      return entry?.moodId ?? null;
    } catch {
      return null;
    }
  }

  readonly today = new Date().getDate();

  getDayClass(day: number | null): string {
    if (day === null) return 'h-8 text-xs rounded-full';

    const isToday = day === this.today;
    const mood = this.getMoodForDay(day);
    const isSelected = day === this.selectedDay();

    let cls = 'h-8 text-xs rounded-full flex items-center justify-center transition-all duration-200 font-medium ';

    if (mood && MOOD_COLORS[mood]) {
      cls += MOOD_COLORS[mood] + ' ';
    } else {
      cls += 'hover:bg-gray-100 ';
    }

    if (isToday) {
      cls += 'ring-2 ring-bliss-mauve ring-offset-1 ';
    }

    if (isSelected) {
      cls += 'scale-110 shadow-md ';
    }

    cls += 'text-bliss-dark';

    return cls;
  }

  selectDay(day: number | null): void {
    this.selectedDay.set(day);
  }
}

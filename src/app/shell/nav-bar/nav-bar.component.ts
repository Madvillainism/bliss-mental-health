import { Component, inject } from '@angular/core';
import { MockNavigationService } from '../../shared/services/mock-navigation.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  template: `
    <nav class="flex items-center justify-around px-2 py-3 bg-bliss-white/80 backdrop-blur-xl border-t border-bliss-border">
      @for (tab of nav.tabs; track tab.index) {
        <button
          class="flex flex-col items-center gap-0.5 px-3 py-1 transition-all duration-200 relative"
          (click)="nav.navigate(tab.index)"
        >
          <i
            class="fa-solid {{ tab.icon }} text-lg transition-colors duration-200"
            [class.text-bliss-mauve]="nav.activeTabIndex() === tab.index"
            [class.text-slate-500]="nav.activeTabIndex() !== tab.index"
          ></i>
          <span
            class="text-[10px] font-medium transition-colors duration-200"
            [class.text-bliss-mauve]="nav.activeTabIndex() === tab.index"
            [class.text-slate-500]="nav.activeTabIndex() !== tab.index"
          >{{ tab.label }}</span>
          @if (nav.activeTabIndex() === tab.index) {
            <span class="absolute -top-0.5 w-1 h-1 rounded-full bg-bliss-mauve"></span>
          }
        </button>
      }
    </nav>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class NavBarComponent {
  protected nav = inject(MockNavigationService);
}

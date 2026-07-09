import { Component } from '@angular/core';

interface SupportGroup {
  name: string;
  members: number;
  membersOnline: number;
  avatars: string[];
}

interface Resource {
  title: string;
  readTime: string;
  category: string;
  gradient: string;
  icon: string;
}

@Component({
  selector: 'app-community',
  standalone: true,
  template: `
    <div class="flex flex-col min-h-full px-5 pt-6 pb-4">

      <h2 class="text-lg font-bliss-display font-bold text-bliss-dark mb-1">Community</h2>
      <p class="text-xs text-bliss-muted mb-5">Connect with others on their journey</p>

      <h3 class="text-xs font-semibold text-bliss-muted uppercase tracking-wider mb-3">Support Groups</h3>

      <div class="space-y-3 mb-6">
        @for (group of supportGroups; track group.name) {
          <div class="rounded-bliss p-4 bg-white border border-bliss-border/40 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-bliss-display font-semibold text-bliss-dark">{{ group.name }}</h4>
              <span class="text-[10px] text-bliss-muted">{{ group.membersOnline }} online</span>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                @for (avatar of group.avatars; track avatar; let i = $index) {
                  <div class="w-7 h-7 rounded-full flex items-center justify-center -ml-1.5 first:ml-0 border-2 border-white"
                       [style]="{ background: avatarColors[i % avatarColors.length], zIndex: group.avatars.length - i }">
                    <span class="text-[9px] font-bold text-bliss-dark">{{ avatar }}</span>
                  </div>
                }
                <span class="text-[10px] text-bliss-muted ml-2">{{ group.members }} members</span>
              </div>

              <button class="text-[11px] font-semibold text-bliss-soft-dark bg-bliss-lavender/30 px-4 py-1.5 rounded-full
                             hover:bg-bliss-lavender/40 active:scale-95 transition-all">
                Join Room
              </button>
            </div>
          </div>
        }
      </div>

      <h3 class="text-xs font-semibold text-bliss-muted uppercase tracking-wider mb-3">Resources</h3>

      <div class="space-y-3">
        @for (item of resources; track item.title) {
          <div class="rounded-bliss overflow-hidden flex active:scale-[0.98] transition-transform duration-200 cursor-pointer"
               [style]="{ background: item.gradient }">
            <div class="flex-1 p-4">
              <span class="text-[10px] font-medium text-bliss-muted uppercase tracking-wide">{{ item.category }}</span>
              <h4 class="text-sm font-bliss-display font-semibold text-bliss-dark mt-1 leading-snug">{{ item.title }}</h4>
              <div class="flex items-center gap-1.5 mt-2">
                <i class="fa-regular fa-clock text-[10px] text-bliss-muted"></i>
                <span class="text-[10px] text-bliss-muted">{{ item.readTime }}</span>
              </div>
            </div>
            <div class="w-20 flex items-center justify-center bg-white/30">
              <i class="fa-solid {{ item.icon }} text-2xl text-white/60"></i>
            </div>
          </div>
        }
      </div>

    </div>
  `,
})
export class CommunityComponent {
  readonly avatarColors = ['#c4b5fd', '#a7f3d0', '#fda4af', '#bae6fd', '#fdba74'];

  readonly supportGroups: SupportGroup[] = [
    {
      name: 'Anxiety Support Circle',
      members: 243,
      membersOnline: 18,
      avatars: ['JD', 'SK', 'AL', '+5'],
    },
    {
      name: 'Mindfulness for Beginners',
      members: 189,
      membersOnline: 12,
      avatars: ['MT', 'RN', '+8'],
    },
  ];

  readonly resources: Resource[] = [
    {
      title: 'Understanding your sleep cycle',
      readTime: '4 min read',
      category: 'Sleep',
      gradient: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)',
      icon: 'fa-moon',
    },
    {
      title: '5 grounding techniques for anxiety',
      readTime: '6 min read',
      category: 'Mindfulness',
      gradient: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #6ee7b7 100%)',
      icon: 'fa-spa',
    },
    {
      title: 'The power of daily journaling',
      readTime: '3 min read',
      category: 'Wellness',
      gradient: 'linear-gradient(135deg, #fef9f0 0%, #fed7aa 50%, #fdba74 100%)',
      icon: 'fa-book-open',
    },
  ];
}

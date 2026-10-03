import { Component, DOCUMENT, afterNextRender, inject, signal } from '@angular/core';
import { PROFILE, PROJECTS, SKILLS } from './portfolio.data';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly profile = PROFILE;
  protected readonly skills = SKILLS;
  protected readonly projects = PROJECTS;
  protected readonly year = new Date().getFullYear();
  protected readonly theme = signal<Theme>('light');

  private readonly doc = inject(DOCUMENT);

  constructor() {
    this.doc.title = `${PROFILE.name} | Backend Portfolio`;

    afterNextRender(() => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem('theme');
      } catch {}
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.applyTheme(saved === 'dark' || (!saved && prefersDark) ? 'dark' : 'light');
    });
  }

  protected toggleTheme() {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {}
  }

  protected telHref(phone: string) {
    return 'tel:' + phone.replace(/[^\d+]/g, '');
  }

  private applyTheme(theme: Theme) {
    this.theme.set(theme);
    this.doc.documentElement.dataset['theme'] = theme;
  }
}

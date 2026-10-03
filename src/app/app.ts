import { Component, DOCUMENT, HostListener, afterNextRender, inject, signal } from '@angular/core';
import { EDUCATION, PROFILE, PROJECTS, Project, SKILLS } from './portfolio.data';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly profile = PROFILE;
  protected readonly skills = SKILLS;
  protected readonly projects = PROJECTS;
  protected readonly education = EDUCATION;
  protected readonly year = new Date().getFullYear();
  protected readonly theme = signal<Theme>('light');
  protected readonly viewer = signal<{ project: Project; index: number } | null>(null);

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

  protected openShot(project: Project, index: number) {
    this.viewer.set({ project, index });
    this.doc.body.style.overflow = 'hidden';
  }

  protected closeShot() {
    this.viewer.set(null);
    this.doc.body.style.overflow = '';
  }

  protected step(delta: number) {
    const v = this.viewer();
    if (!v) return;
    const n = v.project.shots.length;
    this.viewer.set({ project: v.project, index: (v.index + delta + n) % n });
  }

  @HostListener('document:keydown', ['$event'])
  protected onKey(e: KeyboardEvent) {
    if (!this.viewer()) return;
    if (e.key === 'Escape') this.closeShot();
    if (e.key === 'ArrowLeft') this.step(-1);
    if (e.key === 'ArrowRight') this.step(1);
  }

  private applyTheme(theme: Theme) {
    this.theme.set(theme);
    this.doc.documentElement.dataset['theme'] = theme;
  }
}

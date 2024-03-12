import { Component, HostListener, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public isMenuOpen: boolean = false;
  public navLinks: NavLink[] = [
    { path: '', label: 'translate_home' },
    { path: '/ads', label: 'translate_ads' },
    { path: '/requests', label: 'translate_requests' },
    { path: '/workers', label: 'translate_workers' },
    { path: '/contact us', label: 'translate_contact_us' },
  ];

  constructor(
    private ngZone: NgZone,
    public translate: TranslateService,
  ) {
    this.onResize();

    this.initializeTranslation();
  }

  @HostListener('window:resize')
  private onResize(): void {
    this.ngZone.run(() => {
      if (typeof window !== 'undefined') {
        this.isMenuOpen = window.innerWidth >= 768;
      }
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isMenuOpen) {
      this.toggleMenu();
    }
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  initializeTranslation(): void {
    const browserLang = this.translate.getBrowserLang();
    let langToSet = 'ar'; // default language

    if (typeof localStorage !== 'undefined') {
      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        langToSet = savedLang;
      } else if (browserLang) {
        langToSet = browserLang;
      }
    }

    this.translate.setDefaultLang(langToSet);
    this.translate.use(langToSet);
  }

  public changeLang(language: string): void {
    this.translate.use(language);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('lang', language);
    }
  }
}

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
  }

  @HostListener('window:resize')
  private onResize(): void {
    this.ngZone.run(() => {
      if (typeof window !== 'undefined') {
        this.isMenuOpen = window.innerWidth >= 768;
      }
    });
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public changeLang(language: string): void {
    this.translate.use(language);
  }
}

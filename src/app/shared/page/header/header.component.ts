import { Component, HostListener, NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      @media (min-width: 768px) {
        .mt-3 {
          margin-top: 0 !important;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  navLinks = [
    { path: '', label: 'الرئيسية' },
    { path: '/ads', label: 'الإعلانات' },
    { path: '/requests', label: 'الطلبات' },
    { path: '/workers', label: 'المشتغلين' },
    { path: '/contact us', label: 'تواصل معنا' },
  ];

  isMenuOpen = false;

  constructor(private ngZone: NgZone) {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.ngZone.run(() => {
      if (typeof window !== 'undefined') {
        this.isMenuOpen = window.innerWidth >= 768;
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

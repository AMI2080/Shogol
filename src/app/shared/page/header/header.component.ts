import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  navLinks = [
    { path: '', label: 'الرئيسية' },
    { path: '/ads', label: 'الإعلانات' },
    { path: '/requests', label: 'الطلبات' },
    { path: '/workers', label: 'المشتغلين' },
    { path: '/contact us', label: 'تواصل معنا' },
  ];

  show: boolean = false;

  onshow() {
    this.show = !this.show;
  }
  // isHeaderFixed : boolean = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.isHeaderFixed = window.pageYOffset > 100;
  // }

  ////////////////////////
}

import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  navLinks = [
    { path: '', label: 'الرئيسية' },
    { path: '/ads', label: 'الإعلانات' },
    { path: '/requests', label: 'الطلبات' },
    { path: '/workers', label: 'المشتغلين' },
    { path: '/contact us', label: 'تواصل معنا' },
  ];

  // show: boolean = false;

  // onshow() {
  //   this.show = !this.show;
  // }
  // isHeaderFixed : boolean = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.isHeaderFixed = window.pageYOffset > 100;
  // }

  ////////////////////////
  isMenuOpen = false;
  resizeListener!: Function;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.resizeListener = this.renderer.listen(
        'window',
        'resize',
        (event) => {
          this.isMenuOpen = event.target.innerWidth >= 768;
        },
      );
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMenuOpen = window.innerWidth >= 768;
    }
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      this.resizeListener();
    }
  }
}

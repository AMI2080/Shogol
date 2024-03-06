import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
      @media (max-width: 768px) {
        .text-special {
          text-align: center !important;
        }
      }
    `,
  ],
})
export class FooterComponent {
  infoLinks = [
    { title: 'معلومات عن شغل', route: ['', 'routePath'] },
    { title: 'الأسئلة الشائعة', route: ['', 'routePath'] },
    { title: 'ضمان حقوقك', route: ['', 'routePath'] },
    { title: 'شروط الاستخدام', route: '/terms-of-use' },
  ];

  otherLinks = [
    { title: 'الشركاء', route: ['', 'routePath'] },
    { title: 'المقالات', route: ['', 'routePath'] },
    { title: 'مركز المساعدة', route: ['', 'routePath'] },
  ];

  pageLinks = [
    { title: 'تسجيل جديد', route: ['', 'routePath'] },
    { title: 'قدم كشريك', route: ['', 'routePath'] },
    { title: 'تصفح كل الفئات', route: ['', 'routePath'] },
    { title: 'اتصل بنا', route: ['', 'routePath'] },
  ];

  appLinks = [
    {
      imgSrc: 'assets/images/app-store.png',
      imgAlt: 'app-store',
      route: ['', 'routePath'],
    },
    {
      imgSrc: 'assets/images/google-play.png',
      imgAlt: 'google-play',
      route: ['', 'routePath'],
    },
  ];

  socialLinks = [
    {
      icon: 'fa-brands fa-snapchat fa-xl text-blue-950',
      route: ['', 'routePath'],
    },
    {
      icon: 'fa-brands fa-instagram fa-xl text-blue-950',
      route: ['', 'routePath'],
    },
    {
      icon: 'fa-brands fa-twitter fa-xl text-blue-950',
      route: ['', 'routePath'],
    },
    {
      icon: 'fa-brands fa-facebook-f fa-2xl text-blue-950 translate-y-1.5',
      route: ['', 'routePath'],
    },
  ];
}

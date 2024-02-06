import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  infoLinks: { title: string, url: string }[] = [
    { title: 'الأسئلة الشائعة', url: '#' },
    { title: 'ضمان حقوقك', url: '#' },
    { title: 'شروط الاستخدام', url: '#' }
  ];

  otherLinks: { title: string, url: string }[] = [

    { title: 'الشركاء', url: '#' },
    { title: 'المقالات', url: '#' },
    { title: 'مركز المساعدة', url: '#' }
  ];

  pagesLinks: { title: string, url: string }[] = [
    { title: 'تسجيل جديد', url: '#' },
    { title: 'قدم كشريك', url: '#' },
    { title: 'تصفح كل الفئات', url: '#' },
    { title: 'اتصل بنا', url: '#' }
  ];
  socialMediaPlatforms: { iconClass: string, href: string }[] = [
    { iconClass: 'fa-brands fa-facebook', href: '#' },
    { iconClass: 'fa-brands fa-snapchat', href: '#' },
    { iconClass: 'fa-brands fa-twitter', href: '#' },
    { iconClass: 'fa-brands fa-instagram', href: '#' }
  ];
}

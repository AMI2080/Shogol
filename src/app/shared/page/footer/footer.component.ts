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
    { title: 'translate_info_about_shogol', route: ['', 'routePath'] },
    { title: 'translate_faq', route: ['', 'routePath'] },
    { title: 'translate_guarantee_your_rights', route: ['', 'routePath'] },
    { title: 'translate_terms_of_use', route: '/terms-of-use' },
  ];

  otherLinks = [
    { title: 'translate_partners', route: ['', 'routePath'] },
    { title: 'translate_articles', route: ['', 'routePath'] },
    { title: 'translate_help_center', route: ['', 'routePath'] },
  ];

  pageLinks = [
    { title: 'translate_new_sign_up', route: ['', 'routePath'] },
    { title: 'translate_provid_partner', route: ['', 'routePath'] },
    { title: 'translate_browse_categories', route: ['', 'routePath'] },
    { title: 'translate_call_us', route: ['', 'routePath'] },
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

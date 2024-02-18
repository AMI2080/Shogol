import { Component } from '@angular/core';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  isChecked = false;

  public links = [
    { path: '../profile', icon: 'fa-solid fa-user', text: 'الحساب الشخصــي' },
    {
      path: 'offers',
      icon: 'fa-solid fa-clipboard-check',
      text: 'العروض',
      special: true,
    },
    { path: 'ads', icon: 'fa-solid fa-bullhorn', text: 'إعلاناتي' },
    {
      path: 'custumer-requests',
      icon: 'fa-sharp fa-solid fa-people-group',
      text: 'طلبات العملاء',
    },
    { path: 'my-requests', icon: 'fa-solid fa-clipboard-list', text: 'طلباتي' },
    {
      path: 'notifications',
      icon: 'fa-solid fa-message-captions',
      text: 'الإشعارات',
    },
    { path: 'edit', icon: 'fa-solid fa-user-pen', text: 'تعديل حسابي' },
    { path: 'wallet', icon: 'fa-solid fa-wallet', text: 'المحفظة الإلكترونية' },
    { path: 'settings', icon: 'fa-solid fa-gear', text: 'اعدادات الحساب' },
    {
      path: 'log-out',
      icon: 'fa-solid fa-right-from-bracket',
      text: 'تسجيل الخروج',
    },
  ];
}

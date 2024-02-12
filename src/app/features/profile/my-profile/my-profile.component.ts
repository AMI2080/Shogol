import { Component } from '@angular/core';

@Component({
  templateUrl: './my-profile.component.html',
})
export class MyProfileComponent {
  public specialties = [
    { text: 'تصميم مواقع' },
    { text: 'إنشاء موقع إلكتروني' },
    { text: 'إنشاء موقع إلكتروني' },
  ];
  public certificates = [
    { name: 'جافاسكربت', rating: 5 },
    { name: 'برمجة PHP', rating: 3 },
    { name: 'لغة جافا', rating: 4 },
  ];
  public languages = [
    { name: 'اللغة العربية', rating: 5 },
    { name: 'اللغة الإنجليزية', rating: 3 },
  ];
  public documents = [
    { text: 'البريد الإلكتروني' },
    { text: 'البريد الإلكتروني' },
    { text: 'البريد الإلكتروني' },
    { text: 'البريد الإلكتروني' },
  ];
  public badges = [
    { text: 'أوسمة' },
    { text: 'أوسمة' },
    { text: 'أوسمة' },
  ];
}

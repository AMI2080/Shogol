import { Component } from '@angular/core';

@Component({
  templateUrl: './my-profile.component.html',
})
export class MyProfileComponent {
  public personalInfo: { label: string; value: string }[] = [
    { label: 'البريد الإلكتروني', value: 'adnan20222@gmail.com' },
    { label: 'رقم الجوال', value: '96600000000000+' },
    { label: 'بلد الإقامة', value: 'السعودية' },
    { label: 'النوع', value: 'ذكر' },
  ];
  public descriptions: string[] = [
    'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي"',
  ];
  public specialties: { text: string }[] = [
    { text: 'تصميم مواقع' },
    { text: 'إنشاء موقع إلكتروني' },
    { text: 'إنشاء موقع إلكتروني' },
  ];
  public certificates: { name: string; rating: number }[] = [
    { name: 'جافاسكربت', rating: 5 },
    { name: 'برمجة PHP', rating: 3 },
    { name: 'لغة جافا', rating: 4 },
  ];
  public languages: { name: string; rating: number }[] = [
    { name: 'اللغة العربية', rating: 5 },
    { name: 'اللغة الإنجليزية', rating: 3 },
  ];
  public documents: { text: string }[] = [
    { text: 'البريد الإلكتروني' },
    { text: 'البريد الإلكتروني' },
    { text: 'البريد الإلكتروني' },
    { text: 'البريد الإلكتروني' },
  ];
  public badges: { text: string }[] = [
    { text: 'أوسمة' },
    { text: 'أوسمة' },
    { text: 'أوسمة' },
  ];
  public workSites: { src: string; alt: string }[] = [
    { src: 'assets/images/mostaql.png', alt: 'mostaql-img' },
    { src: 'assets/images/khamsat.png', alt: 'khamsat-img' },
    { src: 'assets/images/harag.png', alt: 'harag-img' },
  ];
}

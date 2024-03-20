import { Component } from '@angular/core';

@Component({
  templateUrl: './my-profile.component.html',
})
export class MyProfileComponent {
  public personalInfo: { label: string; value: string }[] = [
    { label: 'translate_email', value: 'adnan20222@gmail.com' },
    { label: 'translate_phone', value: '96600000000000+' },
    { label: 'translate_address', value: 'translate_ksa' },
    { label: 'translate_gender', value: 'translate_male' },
  ];
  public descriptions: string[] = ['translate_descriptions'];
  public specialties: { text: string }[] = [
    { text: 'translate_design_website' },
    { text: 'translate_create_website' },
    { text: 'translate_create_website' },
  ];
  public certificates: { name: string; rating: number }[] = [
    { name: 'translate_javascript', rating: 5 },
    { name: 'translate_php', rating: 3 },
    { name: 'translate_java', rating: 4 },
  ];
  public languages: { name: string; rating: number }[] = [
    { name: 'translate_ar', rating: 5 },
    { name: 'translate_en', rating: 3 },
  ];
  public documents: { text: string }[] = [
    { text: 'translate_email' },
    { text: 'translate_email' },
    { text: 'translate_email' },
    { text: 'translate_email' },
  ];
  public badges: { text: string }[] = [
    { text: 'translate_badges' },
    { text: 'translate_badges' },
    { text: 'translate_badges' },
  ];
  public workSites: { src: string; alt: string }[] = [
    { src: 'assets/images/mostaql.png', alt: 'mostaql-img' },
    { src: 'assets/images/khamsat.png', alt: 'khamsat-img' },
    { src: 'assets/images/harag.png', alt: 'harag-img' },
  ];
}

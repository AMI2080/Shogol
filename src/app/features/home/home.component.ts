import { Component } from '@angular/core';

export interface CardItem {
  imageSrc: string;
  name: string;
  flagSrc: string;
  rating: string;
  description: string;
  price: string;
  time: string;
  descriptionText: string;
  specialization: string;
  before: string;
}

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  cardItems: CardItem[] = [
    {
      imageSrc: 'assets/images/card-1.png',
      name: 'translate_name',
      flagSrc: 'assets/images/flag-ksa.png',
      rating: '(22)4.2',
      description: 'translate_web_designing',
      price: 'translate_SAR',
      time: 'translate_minutes',
      descriptionText: 'translate_web_application_specialists_descrption',
      specialization: 'translate_web_application_specialists',
      before: 'translate_before',
    },
    {
      imageSrc: 'assets/images/card-2.png',
      name: 'translate_name',
      flagSrc: 'assets/images/flag-ksa.png',
      rating: '(22)4.2',
      description: 'translate_web_designing',
      price: 'translate_SAR',
      time: 'translate_minutes',
      descriptionText: 'translate_web_application_specialists_descrption',
      specialization: 'translate_web_application_specialists',
      before: 'translate_before',
    },
    {
      imageSrc: 'assets/images/card-3.png',
      name: 'translate_name',
      flagSrc: 'assets/images/flag-ksa.png',
      rating: '(22)4.2',
      description: 'translate_web_designing',
      price: 'translate_SAR',
      time: 'translate_minutes',
      descriptionText: 'translate_web_application_specialists_descrption',
      specialization: 'translate_web_application_specialists',
      before: 'translate_before',
    },
    {
      imageSrc: 'assets/images/card-4.png',
      name: 'translate_name',
      flagSrc: 'assets/images/flag-ksa.png',
      rating: '(22)4.2',
      description: 'translate_web_designing',
      price: 'translate_SAR',
      time: 'translate_minutes',
      descriptionText: 'translate_web_application_specialists_descrption',
      specialization: 'translate_web_application_specialists',
      before: 'translate_before',
    },
  ];
}

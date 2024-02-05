import { Component  , HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  myObjectArray: { name: string , link : string}[]= [
    {  name: 'الرئسية' ,   link : ""},
    {  name: 'الاعلانات'   , link : "" },
    {  name: 'الطلبات',   link : "" },
    {  name: 'المشتغلين'  , link : "" },
  ];
  show : boolean = false ;

  onshow(){
    this.show = !this.show ;
  }
  isHeaderFixed : boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position and set the fixed class accordingly
    this.isHeaderFixed = window.pageYOffset > 0;
  }
}

import { Component  , HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  myLinks: { name: string , link : string}[]= [
    {  name: 'الرئسية' ,   link : ""},
    {  name: 'الاعلانات'   , link : "" },
    {  name: 'الطلبات',   link : "" },
    {  name: 'المشتغلين'  , link : "" },
  ];
  show : boolean = false ;

  onshow(){
    this.show = !this.show ;
  }
  // isHeaderFixed : boolean = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.isHeaderFixed = window.pageYOffset > 100;
  // }
}

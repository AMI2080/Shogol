import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  myObjectArray: { name: string , link : string}[]= [
    {  name: 'الرئسية' ,   link : ""},
    {  name: 'الاعلانات'   , link : "" },
    {  name: 'الطلبات',   link : "" },
    {  name: 'المشتغلين'  , link : "" },
    // {  name: 'تواصل معنا',  link : ""}
  ];
  show : boolean = false ;

  onshow(){
    this.show = !this.show ;
    console.log(this.show)
  }
}

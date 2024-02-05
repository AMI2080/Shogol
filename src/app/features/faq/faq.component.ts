
import { Component,ViewChild, ElementRef} from '@angular/core';

@Component({
  templateUrl: './faq.component.html',
})
export class FAQComponent {
  @ViewChild('element1') element1!: ElementRef;
  @ViewChild('element2') element2!: ElementRef;
  @ViewChild('element3') element3!: ElementRef;
  @ViewChild('element4') element4!: ElementRef;

  elementsVisible = [true, false, false, false];

  toggleElement(index: number): void {
    this.elementsVisible[index] = !this.elementsVisible[index];
  }

  getIconClass(index: number): string {
    return this.elementsVisible[index] ? 'fas fa-minus' : 'fas fa-plus';
  }
  
}

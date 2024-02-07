import { Component } from '@angular/core';

@Component({
  templateUrl: './new.component.html',
  styles: [
    `
      ::ng-deep .ng-dropdown-panel {
        border: 1px solid #e2e8f0;
      }
      ::ng-deep .ng-option {
        color: #6b7280;
        background-color: #fff;
        padding: 0.5rem;
        border-bottom: 1px solid #e2e8f0;
        &:hover,
        &.ng-option-marked {
          background-color: #14b8a6;
          color: #fff;
        }
      }
    `,
  ],
})
export class NewComponent {
  options: string[] = [
    'فوتوشوب',
    'تصميم جرافيك',
    'اللغة العربية',
    'تصميم شعار',
    'التصميم الإبداعي',
    'اللغة الإنجليزية',
    'تصميم إعلان',
    'Adobe Illustrator',
    'تعديل الصور',
    'كتابة المحتوى',
    'مايكروسوفت وورد',
    'الترجمة',
    'تصميم بوسترات',
    'البحث على الإنترنت',
    'الفكرة التصميمية',
    'إدخال بيانات',
    'كتابة مقالات',
    'إعادة صياغة المحتوى',
    'مايكروسوفت أوفيس',
    'إنتاج الفيديو',
    'مايكروسوفت إكسل',
    'تصميم بنرات',
    'تحويل PDF',
    'HTML',
    'التسويق عبر الإنترنت',
    'الكتابة على الإنترنت',
    'تصميم دعوات',
    'التسويق الإلكتروني',
    'مونتاج فيديو',
    'تصميم موقع إلكتروني',
    'الكتابة الإبداعية',
    'باوربوينت',
    'التدقيق اللغوي',
    'CSS',
    'تصميم 3D',
    'التسويق عبر مواقع التواصل الاجتماعي',
    'كتابة التقارير',
    'إدارة المشاريع',
    'التسويق عبر الفيس بوك',
    'تصميم ملصقات المنتجات',
    'البحث والتطوير',
    'خدمة العملاء',
    'جافا سكريبت',
    'أوتوكاد',
    'تحرير المحتوى',
    'PHP',
    'تدريس خصوصي',
    'After Effects',
    'ووردبريس',
    'برمجة أندرويد',
  ];

  // Select multiple files from device to upload via input:file with cancel function (button(x))
  selectedFiles: File[] = [];

  onFilesSelected(event: any): void {
    const files: FileList = event.target.files;
    this.selectedFiles.push(...Array.from(files));
  }

  cancelFileSelection(file: File): void {
    this.selectedFiles = this.selectedFiles.filter((f) => f !== file);
  }

  // Select multiple options from options array via select(dropdown menu)
  selectedOptions: any[] = [];

  addOption(event: Event) {
    const option = event;
    if (!this.selectedOptions.includes(option)) {
      this.selectedOptions.push(option);
    }
  }

  removeOption(index: number) {
    this.selectedOptions.splice(index, 1);
  }
}

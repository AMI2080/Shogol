import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import intlTelInput from 'intl-tel-input';

interface Country {
  name: string;
  cities: City[];
}

interface City {
  name: string;
  regions: Region[];
}

interface Region {
  name: string;
}

@Component({
  templateUrl: './edit-profile.component.html',
  styles: [
    `
      // #1 / info section styles
      ::ng-deep .iti {
        width: 100%;
      }
      ::ng-deep .iti__search-input {
        outline: none;
      }

      // #4 / location section styles
      .section-4 {
        ::ng-deep .ng-dropdown-panel {
          background-color: #fff;
          border: 1px solid #e2e8f0;
        }
        ::ng-deep .ng-option {
          color: #6b7280;
          padding: 0.5rem;
          border-bottom: 1px solid #e2e8f0;
          &.ng-option-marked {
            color: gray;
          }
          &:hover {
            background-color: #14b8a6;
            color: #fff;
          }
        }
      }

      // #5 / specialist-fileds section styles
      .section-5 {
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
        ::ng-deep
          .ng-select.ng-select-multiple
          .ng-select-container
          .ng-value-container
          .ng-value {
          background-color: transparent;
          color: #6b7280;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.2rem 0.5rem 0.5rem 0.5rem;
          border: 2px solid #6b7280;
          border-radius: 1rem;
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
        }
        ::ng-deep
          .ng-select.ng-select-multiple
          .ng-select-container
          .ng-value-container
          .ng-value
          .ng-value-icon.left {
          border: none;
          font-weight: 600;
          font-size: 1.5rem;
        }
      }
      // public styles
      ::ng-deep .ng-select.ng-select-single .ng-select-container {
        border: none;
        &:hover {
          box-shadow: none;
        }
        &:focus {
        }
      }
      ::ng-deep
        .ng-select.ng-select-focused:not(.ng-select-opened)
        > .ng-select-container {
        box-shadow: none;
      }
      ::ng-deep .ng-select .ng-select-container {
        border: none;
        &:hover {
          box-shadow: none;
        }
      }
    `,
  ],
})
export class EditProfileComponent implements OnInit, AfterViewInit {
  // #1 / info section / phone number
  @ViewChild('mobileCode', { static: false }) element!: ElementRef;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      intlTelInput(this.element.nativeElement, {
        initialCountry: 'eg',
        nationalMode: false,
        separateDialCode: false,
        preferredCountries: ['eg'],
        utilsScript: `https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js`,
        formatOnDisplay: true,
        autoInsertDialCode: true,
        autoPlaceholder: 'polite',
        placeholderNumberType: 'PERSONAL_NUMBER',
      });
    }
  }

  // #2 / account-type section
  genders = [
    { id: 'male', label: 'ذكر', checked: true },
    { id: 'female', label: 'أنثى', checked: false },
  ];

  accountTypes = [
    { id: 'person', label: 'فرد', checked: true },
    { id: 'company', label: 'مؤسسة', checked: false },
  ];

  // #4 / location section
  countries: Country[] = [
    {
      name: 'Saudi Arabia',
      cities: [
        {
          name: 'Riyadh',
          regions: [{ name: 'Northern Riyadh' }, { name: 'Southern Riyadh' }],
        },
        {
          name: 'Jeddah',
          regions: [{ name: 'Western Jeddah' }, { name: 'Eastern Jeddah' }],
        },
      ],
    },
    {
      name: 'United Arab Emirates',
      cities: [
        {
          name: 'Dubai',
          regions: [{ name: 'Downtown Dubai' }, { name: 'Dubai Marina' }],
        },
        {
          name: 'Abu Dhabi',
          regions: [
            { name: 'Central Abu Dhabi' },
            { name: 'Suburban Abu Dhabi' },
          ],
        },
      ],
    },
  ];

  form!: FormGroup;

  get selectedCountry(): Country | undefined {
    const countryName = this.form.get('selectedCountry')?.value;
    return this.countries.find((country) => country.name === countryName);
  }

  get selectedCity(): City | undefined {
    const cityName = this.form.get('selectedCity')?.value;
    return this.selectedCountry?.cities.find((city) => city.name === cityName);
  }

  get selectedRegion() {
    return this.form.get('selectedRegion')?.value;
  }

  constructor(
    private formBuilder: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      selectedCountry: new FormControl(),
      selectedCity: new FormControl(),
      selectedRegion: new FormControl(),
    });
  }

  // #5 / specialist-fileds section
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
  selectedOptions: any[] = [];

  // #6 / certificates section
  public certificates: { name: string; rating: number }[] = [
    { name: 'جافاسكربت', rating: 5 },
    { name: 'برمجة PHP', rating: 3 },
    { name: 'لغة جافا', rating: 4 },
  ];

  // #8 / showcase section
  // Select multiple files from device to upload via input:file with cancel function (button(x))
  selectedFiles: File[] = [];

  onFilesSelected(event: any): void {
    const files: FileList = event.target.files;
    this.selectedFiles.push(...Array.from(files));
  }

  cancelFileSelection(file: File): void {
    this.selectedFiles = this.selectedFiles.filter((f) => f !== file);
  }

  // #8 / links section
  socialMediaLinks = [
    { label: 'حراج', name: 'haraj', placeholder: 'haraj.com.sa/username' },
    { label: 'مستقل', name: 'mostaql', placeholder: 'mostaql.com/username' },
    { label: 'بحر', name: 'baher', placeholder: 'baher.com/username' },
    { label: 'بنترست', name: 'pintrest', placeholder: 'pintrest.com/username' },
    {
      label: 'فري لانسر',
      name: 'freelancer',
      placeholder: 'freelancer.com/username',
    },
    { label: 'اب ورك', name: 'upWork', placeholder: 'upWork.com/username' },
    {
      label: 'انستقرام',
      name: 'instagram',
      placeholder: 'instagram.com/username',
    },
    { label: 'تويتر', name: 'twitter', placeholder: 'twitter.com/username' },
    { label: 'فيسبوك', name: 'facebook', placeholder: 'facebook.com/username' },
    { label: 'أخرى', name: 'other', placeholder: 'other.com/username' },
  ];
}

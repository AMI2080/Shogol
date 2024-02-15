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
        utilsScript:
          'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js' +
          '/utils.js',
        // formatOnDisplay: true,
        autoInsertDialCode: true,
        autoPlaceholder: 'polite',
        placeholderNumberType: 'PERSONAL_NUMBER',
      });
    }
  }

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

  addOption(event: Event) {
    const option = event;
    if (!this.selectedOptions.includes(option)) {
      this.selectedOptions.push(option);
    }
  }

  removeOption(index: number) {
    this.selectedOptions.splice(index, 1);
  }

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

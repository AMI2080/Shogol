import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';

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
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  // #1 / info section / phone number
  public preferredCountries: CountryISO[] = [CountryISO.Egypt, CountryISO.Syria, CountryISO.SaudiArabia];

  public selectedCountryISO: CountryISO = CountryISO.Egypt;

  public searchCountryField: SearchCountryField[] = [SearchCountryField.Iso2, SearchCountryField.Name]

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

  addressForm!: FormGroup;

  get selectedCountry(): Country | undefined {
    const countryName = this.addressForm.get('selectedCountry')?.value;
    return this.countries.find((country) => country.name === countryName);
  }

  get selectedCity(): City | undefined {
    const cityName = this.addressForm.get('selectedCity')?.value;
    return this.selectedCountry?.cities.find((city) => city.name === cityName);
  }

  get selectedRegion() {
    return this.addressForm.get('selectedRegion')?.value;
  }

  public constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      selectedCountry: new FormControl(),
      selectedCity: new FormControl(),
      selectedRegion: new FormControl(),
    });
  }

  // #5 / specialist-fileds section
  skills: string[] = [
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

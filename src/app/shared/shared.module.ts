import { NgModule, Renderer2, RendererFactory2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './page/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './page/footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {
  HttpClientModule,
  HttpClient,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Title } from '@angular/platform-browser';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const sharedComponents = [PageComponent, HeaderComponent, FooterComponent];

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    // components
    ...sharedComponents,
  ],
  exports: [
    // components
    ...sharedComponents,
  ],
  providers: [provideHttpClient(withFetch())],
})
export class SharedModule {
  private renderer: Renderer2;
  public constructor(
    rendererFactory: RendererFactory2,
    translate: TranslateService,
    titleService: Title,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    if (
      typeof document !== 'undefined' &&
      typeof localStorage !== 'undefined'
    ) {
      const lang = localStorage.getItem('lang') ?? 'ar';
      translate.setDefaultLang('ar');
      translate.use(lang);

      translate.onLangChange.subscribe((event: LangChangeEvent) => {
        const dir = event.lang === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem('lang', event.lang);
        this.renderer.setAttribute(
          document.documentElement,
          'lang',
          event.lang,
        );
        this.renderer.setAttribute(document.documentElement, 'dir', dir);
        titleService.setTitle(translate.instant('translate_title'));
      });
    }
  }
}

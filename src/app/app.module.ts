import { NgModule, Renderer2 } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [provideClientHydration(), provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {
  // solotion 1
  public constructor(
    private renderer: Renderer2,
    translate: TranslateService,
  ) {
    if (
      typeof document !== 'undefined' &&
      typeof localStorage !== 'undefined'
    ) {
      const lang = localStorage.getItem('lang') ?? 'ar';
      translate.setDefaultLang(lang);
      translate.use(lang);

      translate.onLangChange.subscribe((event: LangChangeEvent) => {
        const dir = event.lang === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem('lang', event.lang);
        renderer.setAttribute(document.documentElement, 'lang', event.lang);
        renderer.setAttribute(document.documentElement, 'dir', dir);
      });
    }
  }

  // solotion 2

  // private renderer: Renderer2;
  // public constructor(
  //   rendererFactory: RendererFactory2,
  //   translate: TranslateService,
  // ) {
  //   this.renderer = rendererFactory.createRenderer(null, null);
  //   if (
  //     typeof document !== 'undefined' &&
  //     typeof localStorage !== 'undefined'
  //   ) {
  //     const lang = localStorage.getItem('lang') ?? 'ar';
  //     translate.setDefaultLang(lang);
  //     translate.use(lang);

  //     translate.onLangChange.subscribe((event: LangChangeEvent) => {
  //       const dir = event.lang === 'ar' ? 'rtl' : 'ltr';
  //       localStorage.setItem('lang', event.lang);
  //       this.renderer.setAttribute(
  //         document.documentElement,
  //         'lang',
  //         event.lang,
  //       );
  //       this.renderer.setAttribute(document.documentElement, 'dir', dir);
  //     });
  //   }
  // }
}

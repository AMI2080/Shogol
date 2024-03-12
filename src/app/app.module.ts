import { NgModule, RendererFactory2 } from '@angular/core';
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
  public constructor(
    private rendererFactory: RendererFactory2,
    translate: TranslateService,
  ) {
    let renderer = this.rendererFactory.createRenderer(null, null);
    translate.onLangChange.subscribe((event: any) => {
      if (typeof document !== 'undefined') {
        let htmlTag = document.getElementsByTagName('html')[0];
        console.log(htmlTag);

        if (event.lang === 'en') {
          renderer.setAttribute(htmlTag, 'lang', 'en');
          renderer.setAttribute(htmlTag, 'dir', 'ltr');
        } else {
          renderer.setAttribute(htmlTag, 'lang', 'ar');
          renderer.setAttribute(htmlTag, 'dir', 'rtl');
        }
      }
    });
  }
}

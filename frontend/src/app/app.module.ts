import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatePipe } from './paginate.pipe';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './modules/auth/services/auth-interceptor.service';
import { FormatLargeIntegerDirective } from './format-large-integer.directive';
import { LargeIntegerPipe } from './large-integer.pipe';
import { WordCountValidatorDirective } from './word-count-validator.directive';
import { WaveChartComponent } from './_metronic/partials/content/widgets/charts/wave-chart/wave-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

// #fake-end#

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      // @ts-ignore
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    PaginatePipe,
    FormatLargeIntegerDirective,
    LargeIntegerPipe,
    WordCountValidatorDirective,
    WaveChartComponent,
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,
    FormsModule,
    NgxPaginationModule,
    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
          passThruUnknownUrl: true,
          dataEncapsulation: false,
        })
      : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
  ],
  providers: [
    AuthInterceptor,
    {
      provide: APP_INITIALIZER, // APP_INITIALIZER token
      useFactory: appInitializer, // Factory function for initialization
      multi: true, // Specify it's a multi-provider
      deps: [AuthService], // Dependencies required by the factory
    },
    {
      provide: HTTP_INTERCEPTORS, // HTTP_INTERCEPTORS token
      useClass: AuthInterceptor, // The interceptor class
      multi: true, // Specify it's a multi-provider
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

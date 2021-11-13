import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteSixComponent } from './Views/route-six/route-six.component';
import { ImageUiComponent } from './Views/image-ui/image-ui.component';
import { StudentsMarksComponent } from './Views/students-marks/students-marks.component';
import { ECommerceComponent } from './Views/e-commerce/e-commerce.component';
import { TimerIOComponent } from './Views/timer-io/timer-io.component';

import { CountOfClicksComponent } from './Views/timer-io/count-of-clicks/count-of-clicks.component';
import { LogsComponent } from './Views/timer-io/logs/logs.component';
import { CountDownComponent } from './Views/timer-io/count-down/count-down.component';
import { CaseStudyComponent } from './Views/case-study/case-study.component';
import { TimerLimitComponent } from './views/timer-io/timer-limit/timer-limit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RouteSixComponent,
    ImageUiComponent,
    StudentsMarksComponent,
    ECommerceComponent,
    TimerIOComponent,
    CountDownComponent,
    LogsComponent,
    CountOfClicksComponent,
    CaseStudyComponent,
    TimerLimitComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

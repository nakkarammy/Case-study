import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudyComponent } from './Views/case-study/case-study.component';
import { ECommerceComponent } from './Views/e-commerce/e-commerce.component';
import { ImageUiComponent } from './Views/image-ui/image-ui.component';
import { RouteSixComponent } from './Views/route-six/route-six.component';
import { StudentsMarksComponent } from './Views/students-marks/students-marks.component';
import { TimerIOComponent } from './Views/timer-io/timer-io.component';

const routes: Routes = [
  {path:"CaseStudy",component:CaseStudyComponent},
  {path:"imageUI",component:ImageUiComponent},
  {path:"e-commerce",component:ECommerceComponent},
  {path:"timerIo",component:TimerIOComponent},
  {path:"studentsMarks",component:StudentsMarksComponent},
  {path:"routeSix",component:RouteSixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

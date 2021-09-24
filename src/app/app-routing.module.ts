import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitLogComponent } from './components/habit-log/habit-log.component';
import { HabitReportComponent } from './components/habit-report/habit-report.component';
import { HabitComponent } from './components/habit/habit.component';

const routes: Routes = [
  {path:'habit',component:HabitComponent},
  {path:'habit-log',component:HabitLogComponent},
  {path:'habit-report',component:HabitReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { AnimationsDemoComponent } from './components/animations-demo/animations-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainContentComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'data', component: DataTableComponent },
  { path: 'animations', component: AnimationsDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdtfyComponent } from './edtfy/edtfy.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: EdtfyComponent },
  { path: ':locale', component: EdtfyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

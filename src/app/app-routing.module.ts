import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportComponent } from './sport/sport.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';

const routes: Routes = [
  {path: '', component:TopHeadingComponent},
  {path: 'tech', component:TechnewsComponent},
  {path: 'sport', component:SportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

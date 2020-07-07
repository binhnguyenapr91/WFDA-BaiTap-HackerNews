import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'articles',component:ArticlesComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'detail/:id', component:ArticleDetailComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

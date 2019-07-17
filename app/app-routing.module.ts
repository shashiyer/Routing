import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MovieComponent } from "src/movie/movie.component";
//import { MovieDetailComponent } from "src/movie-detail/movie-detail.component";
import { HomeComponent } from 'src/home/home.component';
import { AboutComponent } from "src/about/about.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
//  {path:'movies', component:MovieComponent},
  {path:'about', component:AboutComponent}
 // {path:'movies/:id', component:MovieDetailComponent},
  //{path:'', component:HomeComponent, pathMatch:'full'},
  //{path:'**', component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AddEventComponent } from "./pages/add-event/add-event.component";
import { DetailEventComponent } from "./pages/detail-event/detail-event.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'event', component: AddEventComponent },
  { path: 'detail/:id', component: DetailEventComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

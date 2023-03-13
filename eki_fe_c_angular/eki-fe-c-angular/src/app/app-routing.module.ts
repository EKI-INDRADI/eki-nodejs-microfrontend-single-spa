import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  //----------------20230313
  { path: '**', component: EmptyRouteComponent }
  //----------------20230313
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
   { provide: APP_BASE_HREF, useValue: '/' } // ERROR DEPRECCATESD V14 +
     //{ provide: APP_BASE_HREF, useValue: 'http://localhost:9002/' }
  ]
})
export class AppRoutingModule { }

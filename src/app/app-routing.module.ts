import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ControlpannelComponent } from './controlpannel/controlpannel.component';
import { HomeComponent } from './home/home.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ServerdetailsComponent } from './serverdetails/serverdetails.component';
import { TdformComponent } from './tdform/tdform.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'controlpannel', component: ControlpannelComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'server/:id', component: ServerdetailsComponent },
  { path: 'tdform', component: TdformComponent},
  { path: 'reactiveform', component: ReactiveformComponent},
  { path: 'blogs', component: BlogsComponent },
  { path: 'authenticate', component: AuthComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
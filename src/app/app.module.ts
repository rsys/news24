import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders,NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { footerComponent } from './DashBorad/footer';
import { HeaderComponent } from './DashBorad/Header';
import { DashBoardComponent } from './DashBorad/dashboard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashBoardComponent },
 
];
//const rootRouting: ModuleWithProiders = RouterModule.forRoot([]);
@NgModule({
  declarations: [
    AppComponent,
    footerComponent,
    HeaderComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

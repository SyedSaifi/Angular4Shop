import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AdminModule } from 'app/admin/admin.module';
import { CoreModule } from 'app/core/core.module';
import { SharedModule } from 'app/shared/shared.module';
import { ShoppingModule } from 'app/shopping/shopping.module';

import { environment } from './../environments/environment';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/component/login/login.component';
import { ProductsComponent } from './shopping/component/products/products.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
    ])    
  ],
  providers: [
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

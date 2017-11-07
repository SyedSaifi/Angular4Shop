import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsNavbarComponent } from 'app/core/component/bs-navbar/bs-navbar.component';
import { HomeComponent } from 'app/core/component/home/home.component';
import { LoginComponent } from 'app/core/component/login/login.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }

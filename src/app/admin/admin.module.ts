import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminOrdersComponent } from 'app/admin/component/admin-orders/admin-orders.component';
import { AdminProductsComponent } from 'app/admin/component/admin-products/admin-products.component';
import { ProductFormComponent } from 'app/admin/component/product-form/product-form.component';
import { AdminAuthGuard } from 'app/admin/services/admin-auth-guard.service';
import { AuthGuard } from 'app/shared/services/auth-guard.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([    
      { 
        path: 'admin/products/new', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/products/:id', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      }
    ]) 
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ]
})
export class AdminModule { }

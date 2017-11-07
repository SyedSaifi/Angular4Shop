import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'app/shared/services/auth-guard.service';
import { SharedModule } from 'app/shared/shared.module';
import { CheckOutComponent } from 'app/shopping/component/check-out/check-out.component';
import { MyOrdersComponent } from 'app/shopping/component/my-orders/my-orders.component';
import { OrderSuccessComponent } from 'app/shopping/component/order-success/order-success.component';
import { ProductFilterComponent } from 'app/shopping/component/products/product-filter/product-filter.component';
import { ProductsComponent } from 'app/shopping/component/products/products.component';
import { ShippingFormComponent } from 'app/shopping/component/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from 'app/shopping/component/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from 'app/shopping/component/shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([    
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
      ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent
  ]
})
export class ShoppingModule { }

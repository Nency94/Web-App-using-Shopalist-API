import { Route, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

const appRoutes = [
  { path: 'product', component: ProductComponent },
  { path: '**', redirectTo: 'product' }
];

export const routing = RouterModule.forRoot(appRoutes);
import { Route, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';

const appRoutes = [
  { path: 'product', component: ProductComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: 'product' }
];

export const routing = RouterModule.forRoot(appRoutes);
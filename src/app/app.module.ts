import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { routing } from './app.route';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UtilsModule } from './utils/util.module';
import { AuthService } from './product/product.service';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageModalComponent } from './image-model/image-model.component';
  
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SearchComponent,
    FiltersComponent,
    ProductListComponent,
    ImageModalComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    UtilsModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    ImageModalComponent
  ]
})
export class AppModule { }

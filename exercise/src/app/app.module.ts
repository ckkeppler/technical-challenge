import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { TableComponent } from './table/table.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, OrderDetailComponent, TableComponent],
  imports: [BrowserModule, NgbModule, NgxPaginationModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

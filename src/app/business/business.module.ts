import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './components/business.component';

@NgModule({
  imports: [
    CommonModule,
    BusinessRoutingModule
  ],
  declarations: [BusinessComponent]
})
export class BusinessModule { }

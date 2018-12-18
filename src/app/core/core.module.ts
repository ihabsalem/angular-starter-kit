import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHttpRequestsService } from './services/app-http-requests/app-http-requests.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AppHttpRequestsService]
})
export class CoreModule { }

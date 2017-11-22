import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaComponent } from './vista/vista.component';
import { FormsModule } from '@angular/forms';
import { RestService } from './rest.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [VistaComponent],
  providers : [RestService]
})
export class LoginModule { }

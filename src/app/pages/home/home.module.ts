import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

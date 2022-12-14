import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// Module primeng import
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from "primeng/inputtextarea";
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ToastModule } from "primeng/toast";
import { RippleModule } from "primeng/ripple";
// Custom Module import
import { HeaderComponent } from './features/header/header.component';
import { TableComponent } from './features/table/table.component';
import { HomeComponent } from './pages/home/home.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { DetailEventComponent } from './pages/detail-event/detail-event.component';
import { ChartComponent } from './features/chart/chart.component';
import { FormComponent } from './features/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    HomeComponent,
    AddEventComponent,
    DetailEventComponent,
    ChartComponent,
    FormComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        SkeletonModule,
        TableModule,
        ToolbarModule,
        InputTextModule,
        InputTextareaModule,
        FormsModule,
        ChartModule,
        ButtonModule,
        CardModule,
        ToastModule,
        RippleModule
    ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})

export class AppModule {
 }

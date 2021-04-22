import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MainLifeCycleComponent } from './main-life-cycle/main-life-cycle.component';
import { LifeCycleChildComponent } from './main-life-cycle/life-cycle-child/life-cycle-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLifeCycleComponent,
    LifeCycleChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaysComponent } from './pays/pays.component';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { FormsModule } from '@angular/forms';
import { UpdatePaysComponent } from './update-pays/update-pays.component';

@NgModule({
  declarations: [
    AppComponent,
    PaysComponent,
    AddPaysComponent,
    UpdatePaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

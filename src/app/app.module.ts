import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTableModule} from 'primeng/datatable';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PecaComponent } from './peca/peca.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PecaComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    MenubarModule,
    InputTextModule,
    KeyFilterModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

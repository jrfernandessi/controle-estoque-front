import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTableModule} from 'primeng/datatable';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import { GrowlModule } from 'primeng/growl';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PecaComponent } from './peca/peca.component';
import {ButtonModule} from 'primeng/button';
import { PecaService } from './peca/peca.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
    ButtonModule,
    MenubarModule,
    GrowlModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PecaService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

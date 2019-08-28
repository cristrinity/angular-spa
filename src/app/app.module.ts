import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponentComponent } from './shared/menu-component/menu-component.component';
import { FormTableComponent } from './pages/form/form-table/form-table.component';
import { FormEditComponent } from './pages/form/form-edit/form-edit.component';
import { FormCreateComponent } from './pages/form/form-create/form-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponentComponent,
    FormTableComponent,
    FormEditComponent,
    FormCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

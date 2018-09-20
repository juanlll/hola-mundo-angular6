import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route  } from '@angular/router/'

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';



import {DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { HolamundoComponent } from './holamundo/holamundo.component';

const routes: Route[] = [
{path: '',component:HolamundoComponent},
{path: 'about',component:AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AboutComponent,
    HolamundoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

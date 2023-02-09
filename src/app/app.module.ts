import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { ThirdsubComponent } from './thirdsub/thirdsub.component';
import { FourthsubComponent } from './fourthsub/fourthsub.component';
import { FifthcompComponent } from './fifthcomp/fifthcomp.component';
import { SixthComponent } from './sixth/sixth.component';
import { SeventhComponent } from './seventh/seventh.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubheaderComponent,
    ThirdsubComponent,
    FourthsubComponent,
    FifthcompComponent,
    SixthComponent,
    SeventhComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



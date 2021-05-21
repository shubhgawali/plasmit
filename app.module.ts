import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { Data1bindingComponent } from './data1binding/data1binding.component';
import { NewdirComponent } from './newdir/newdir.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './custom.pipe';
import { NewdirDirective } from './newdir.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import {FormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DatabindingComponent,
    Data1bindingComponent,
    NewdirComponent,
    PipesComponent,
    CustomPipe,
    NewdirDirective,
    NavigationComponent,
    PagenotfoundComponent,
    LoginComponent,
    ServicesComponent,
    FormsComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }












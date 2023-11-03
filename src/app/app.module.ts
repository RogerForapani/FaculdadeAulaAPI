import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './pages/observable/observable.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { FakeapiComponent } from './pages/fakeapi/fakeapi.component';
import { HttpClientModule } from '@angular/common/http';
import { TrueapiComponent } from './pages/trueapi/trueapi.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    HeaderComponent,
    FakeapiComponent,
    TrueapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './pages/observable/observable.component';
import { AppComponent } from './app.component';
import { FakeapiComponent } from './pages/fakeapi/fakeapi.component';
import { TrueapiComponent } from './pages/trueapi/trueapi.component';

const routes: Routes = [
  {
 path:"",component:AppComponent
  },
  {path:"observable", component:ObservableComponent

  },
  {path:"fakeapi", component: FakeapiComponent},
  {path:"trueapi", component: TrueapiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

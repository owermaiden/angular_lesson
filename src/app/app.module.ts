import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypecsriptComponent } from './typecsript/typecsript.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { XcomponentComponent } from './xcomponent/xcomponent.component';
import { ChildComponent } from './xcomponent/child/child.component';
import { LeftsideComponent } from './interComponent/leftside/leftside.component';
import { RightSideComponent } from './interComponent/right-side/right-side.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDemoComponent } from './servicesDemo/service-demo/service-demo.component';
import { FormsComponent } from './forms/forms.component';
import { TdformComponent } from './tdform/tdform.component';
import { RoutingComponent } from './routing/routing.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [ 

  {path: 'bindings', component: BindingComponent },
  {path: 'directives', component: DirectivesComponent},
  {path: 'routing/:id', component: RoutingComponent},
  {path: 'xcross', component: XcomponentComponent},
  {path: 'inter', component: RightSideComponent},
  {path: 'left', component: LeftsideComponent},
  {path: 'service', component: ServiceDemoComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'form', component: TdformComponent},
  {path: 'reactive', component: RxjsDemoComponent},
  {path: '', pathMatch: 'full', component: BindingComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    TypecsriptComponent,
    BindingComponent,
    DirectivesComponent,
    XcomponentComponent,
    ChildComponent,
    LeftsideComponent,
    RightSideComponent,
    ServiceDemoComponent,
    FormsComponent,
    TdformComponent,
    RoutingComponent,
    CustomButtonComponent,
    RxjsDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

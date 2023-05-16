import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypecsriptComponent } from './typecsript/typecsript.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { XcomponentComponent } from './xcomponent/xcomponent.component';
import { ChildComponent } from './xcomponent/child/child.component';
import { LeftsideComponent } from './interComponent/leftside/leftside.component';
import { RightSideComponent } from './interComponent/right-side/right-side.component';

@NgModule({
  declarations: [
    AppComponent,
    TypecsriptComponent,
    BindingComponent,
    DirectivesComponent,
    XcomponentComponent,
    ChildComponent,
    LeftsideComponent,
    RightSideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

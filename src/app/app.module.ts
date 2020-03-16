import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { InlineTempComponent } from "./Examples/inline-temp/inline-temp.component";
import { BasicsComponent } from './examples/basics/basics.component';
import { BgcolorDirective } from './examples/bgcolor.directive';

@NgModule({
  declarations: [AppComponent, LoginComponent, InlineTempComponent, BasicsComponent, BgcolorDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

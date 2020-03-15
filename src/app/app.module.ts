import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { InlineTempComponent } from "./Examples/inline-temp/inline-temp.component";
import { BasicsComponent } from './examples/basics/basics.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, InlineTempComponent, BasicsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

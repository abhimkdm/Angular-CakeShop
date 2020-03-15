import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MenuBarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule {}

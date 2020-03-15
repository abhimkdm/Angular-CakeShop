import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basics",
  templateUrl: "./basics.component.html",
  styleUrls: ["./basics.component.css"]
})
export class BasicsComponent {
  //Interpolation
  message: string = "Interpolation";
  //Property bind
  color: string = "green";
  googleUrl: string = "http://www.google.com";

  //Change Color
  toggleColor(): void {
    this.color = this.color == "green" ? "brown" : "green";
  }
}

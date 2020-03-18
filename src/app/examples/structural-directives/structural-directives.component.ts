import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-structural-directives",
  templateUrl: "./structural-directives.component.html",
  styleUrls: ["./structural-directives.component.css"]
})
export class StructuralDirectivesComponent {
  public onoffProp: boolean = true;
  bgColors: any[] = ["Green", "Red", "Blue"];

  OnOff() {
    this.onoffProp = this.onoffProp ? false : true;

    // if (this.onoffProp == true) {
    //   this.onoffProp = false;
    // } else {
    //   this.onoffProp = true;
    // }
  }
}

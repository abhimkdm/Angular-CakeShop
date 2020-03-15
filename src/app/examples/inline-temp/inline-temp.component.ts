import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inline-temp",
  template: `
    <p>
      inline-temp works!
    </p>
  `,
  styles: ["p{color:red}"]
})
export class InlineTempComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

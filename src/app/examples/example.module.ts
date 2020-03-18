import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InlineTempComponent } from "./inline-temp/inline-temp.component";
import { BasicsComponent } from "./basics/basics.component";
import { BgcolorDirective } from "./bgcolor.directive";
import { StructuralDirectivesComponent } from "./structural-directives/structural-directives.component";

@NgModule({
  declarations: [
    InlineTempComponent,
    BasicsComponent,
    BgcolorDirective,
    StructuralDirectivesComponent
  ],
  imports: [CommonModule],
  exports: [StructuralDirectivesComponent]
})
export class ExampleModule {}

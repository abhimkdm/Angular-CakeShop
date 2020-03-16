import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appBgcolor]"
})
export class BgcolorDirective {
  constructor(private elref: ElementRef) {
    console.log(this.elref);
    this.elref.nativeElement.style.backgroundColor = "#ffc107";
    this.elref.nativeElement.href = "http://www.facebook.com";
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.elref.nativeElement.style.backgroundColor = "green";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.elref.nativeElement.style.backgroundColor = "#ffc107";
  }
}

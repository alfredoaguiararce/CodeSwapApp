import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import * as Prism from 'prismjs';

@Directive({
  selector: '[appSyntaxHighlight]'
})
export class SyntaxHighlightDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    Prism.highlightAllUnder(this.el.nativeElement);
  }
}

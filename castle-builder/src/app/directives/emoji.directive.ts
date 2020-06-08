import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[emoji]',
})
export class EmojiDirective implements OnInit {
  @Input('emoji') emoji: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.textContent += this.emoji;
  }
}

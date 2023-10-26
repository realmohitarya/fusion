import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormatLargeInteger]',
})
export class FormatLargeIntegerDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: any): void {
    // Get the input value
    let value = event.target.value;

    // Remove existing commas and non-numeric characters
    value = value.replace(/,/g, '').replace(/[^0-9]/g, '');

    // Format the number with commas
    const formattedValue = Number(value).toLocaleString();

    // Set the formatted value back to the input element
    this.el.nativeElement.value = formattedValue;
  }
}

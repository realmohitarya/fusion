import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appWordCountValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: WordCountValidatorDirective,
      multi: true,
    },
  ],
})
export class WordCountValidatorDirective {
  @Input('appWordCountValidator') maxWords: number;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const inputValue = this.el.nativeElement.value;
    const wordCount = inputValue
      .split(/\s+/)
      .filter((word: any) => word.length > 0).length;

    if (wordCount > this.maxWords) {
      this.el.nativeElement.value = this.el.nativeElement.value.substr(
        0,
        this.maxWords
      );
    }
  }
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const inputValue = control.value;
      const wordCount = inputValue
        .split(/\s+/)
        .filter((word: any) => word.length > 0).length;

      if (wordCount > this.maxWords) {
        return { wordCountExceeded: true };
      }
    }

    return null;
  }
}

import { AbstractControl, ValidationErrors } from '@angular/forms';

export function requiredWhitespace(control: AbstractControl) {
  return ((control.value as string) || '').trim().length === 0
    ? { required: true }
    : null;
}

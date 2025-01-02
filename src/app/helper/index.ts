import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator to check if password and confirm password match
export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const cnfPassword = control.get('cnf_password')?.value;

    if (password && cnfPassword && password !== cnfPassword) {
      return { passwordMismatch: true };
    }

    return null;
  };
}

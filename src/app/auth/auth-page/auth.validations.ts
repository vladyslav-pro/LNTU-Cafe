import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function firstNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    const sanitizedValue = value.replace(/[^a-zA-Z]/g, '');
    const isValid = /^[a-zA-Z]{3,}$/.test(sanitizedValue);

    if (!value) {
      return null;
    }

    if (sanitizedValue !== value) {
      return { invalidFirstName: 'Ім`я містить неправильні знаки або пробіли' };
    }
    return isValid ? null : { invalidFirstName: 'Ім`я повинно містити від 3 до 12 символів та не містити зніків окрім літер' };
  };
}

export function lastNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    const sanitizedValue = value.replace(/[^a-zA-Z]/g, '');
    const isValid = /^[a-zA-Z]{3,}$/.test(sanitizedValue);

    if (!value) {
      return null;
    }

    if (sanitizedValue !== value) {
      return { invalidFirstName: 'Прізвище містить неправильні знаки або пробіли' };
    }
    return isValid ? null : { invalidFirstName: 'Прізвище повинно містити від 3 до 12 символів та не містити зніків окрім літер' };
  };
}

export function lntuEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    const sanitizedValue = value.trim();
    const isValid = /^[a-zA-Z0-9._%+-]+@lntu\.edu\.ua$/.test(sanitizedValue);

    if (!value) {
      return null;
    }
    return isValid ? null : { invalidEmail: 'Email must be in the format your.email@lntu.edu.ua and contain no spaces' };
  };
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
  const password = control.value;
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{}|\\;:,.<>?]/;

  const sanitizedPassword = password.trim();

  if (!password) {
    return { required: 'invalid password' };
  }

  if (password.includes(' ')) {
    return { noSpaces: 'include spaces' };
  }

  if (!specialCharRegex.test(password)) {
    return { missingSpecialChar: 'miss special char' };
  }

  if (password.length < 8 || password.length > 16) {
    return { invalidLength: 'invalid length, length must be between 8 to 16 char' };
  }

  return sanitizedPassword === password ? null : { invalidPassword: 'invalid password' };
  }
}

export function comparePasswords(controlName1: string, controlName2: string) {
  return (group: AbstractControl) => {
    const password = group.get(controlName1)?.value;
    const confirmPassword = group.get(controlName2)?.value;

    return password === confirmPassword ? null : { passwordsNotEqual: 'password not equal' };
  };
}

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
  const phone = control.value;
  const phoneRegex = /^\+?\d{10}$/;
  const sanitizedPhone = phone.trim();

  if (!phone) {
    return { required: true };
  }

  if (phone.includes(' ')) {
    return { noSpaces: true };
  }

  if (!phoneRegex.test(phone)) {
    return { invalidPhone: true };
  }

  return sanitizedPhone === phone ? null : { invalidPhone: true };
  };
}

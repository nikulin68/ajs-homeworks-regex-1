export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const checkingGeneralAppearance = /^[a-z][\da-z_-]*[a-z]$/i.test(this.name);
    const checkingNumbers = !(/\d{4,}/.test(this.name));

    if (checkingGeneralAppearance && checkingNumbers) {
      return true;
    }

    return false;
  }
}

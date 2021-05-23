class TextTransformAnimation {
  constructor(element) {
    this._element = element;
    this._property = `transform`;
    this._duration = 700;
    this._timingFunction = `cubic-bezier(0.33, 0.23, 0.17, 0.87)`;
    this._delay = 0;
    this._stringNumber = 0;
  }

  init() {
    const stringsArr = this._element.innerHTML.trim().split(`<br>`);

    if (stringsArr.length) {
      this._element.innerHTML = ``;
      this._element.classList.add(`animated-text`);

      this.createString(stringsArr);
    }
  }

  createElem(elem) {
    return document.createElement(elem);
  }

  createString(strings) {
    strings.forEach((string, index) => {
      this._stringNumber = index;

      let stringContainer = this.createElem(`span`);
      stringContainer.classList.add(`animated-text__string`);

      const lettersArr = string.trim().split(``);

      this.createLetter(lettersArr, stringContainer);

      this._element.appendChild(stringContainer);
      this._element.appendChild(this.createElem(`br`));
    });
  }

  createLetter(letters, element) {
    letters.forEach((letter) => {
      let letterContainer = this.createElem(`span`);
      letterContainer.innerText = letter;

      if (letter === ` `) {
        letterContainer.classList.add(`animated-text__space`);
      } else {
        letterContainer.classList.add(`animated-text__letter`);
        this.addTransition(letterContainer);
      }

      element.appendChild(letterContainer);
    });
  }

  addTransition(elem) {
    this.generateRandomDelayTime();
    elem.style.transition = `${this._property} ${this._duration}ms ${this._timingFunction} ${this._delay}ms`;
  }

  generateRandomDelayTime() {
    const maxMS = 250;
    const minMS = 0;
    const stepMS = 330;

    this._delay = Math.floor(Math.random() * (maxMS - minMS)) + (stepMS * this._stringNumber);
  }
}

export default (screenElement, className) => {
  const textElement = screenElement.querySelector(className);

  if (!textElement) {
    return;
  }

  const textIsAnimated = textElement.classList.contains(`animated-text`);

  if (textIsAnimated) {
    return;
  }

  const textTransform = new TextTransformAnimation(textElement);
  textTransform.init();
};

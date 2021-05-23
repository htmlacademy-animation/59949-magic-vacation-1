class TextTransformAnimation {
  constructor(element) {
    this._element = element;
    this._property = `transform`;
    this._duration = 700;
    this._timingFunction = `ease`;
    this._delay = 0;
  }

  init() {
    const stringsArr = this._element.innerHTML.trim().split(`<br>`);

    if (stringsArr.length) {
      this._element.innerHTML = ``;

      this.createString(stringsArr);
    }
  }

  createElem(elem) {
    return document.createElement(elem);
  }

  createString(strings) {
    strings.forEach((string) => {
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
      letterContainer.classList.add(`animated-text__letter`);

      element.appendChild(letterContainer);
    });
  }
}

export default (screenElement, className) => {
  const textElement = screenElement.querySelector(className);

  if (!textElement) {
    return;
  }

  const textTransform = new TextTransformAnimation(textElement);
  textTransform.init();
};

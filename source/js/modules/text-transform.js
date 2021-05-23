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

  createString(strings) {
    strings.forEach((string) => {
      let stringContainer = document.createElement(`span`);

      stringContainer.classList.add(`animated-text__string`);
      stringContainer.innerText = string.trim();

      this._element.appendChild(stringContainer);
      this._element.appendChild(document.createElement(`br`));
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

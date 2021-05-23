class TextTransformAnimation {
  constructor(element) {
    this._element = element;
    this._property = `transform`;
    this._duration = 700;
    this._timingFunction = `ease`;
    this._delay = 0;
  }

  init() {}
}

export default (screenElement, className) => {
  const textElement = screenElement.querySelector(className);

  if (!textElement) {
    return;
  }

  const textTransform = new TextTransformAnimation(textElement);
  textTransform.init();
};

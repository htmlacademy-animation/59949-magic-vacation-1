import {animateDigits} from './helper.js';

export const initSVGAnimation = function () {
  const svgObjectsList = document.querySelectorAll(`.prizes__list object`);

  svgObjectsList.forEach((object) => {
    const imgSrc = object.getAttribute(`data-img-src`);

    if (imgSrc) {
      object.setAttribute(`data`, imgSrc);
      object.removeAttribute(`data-img-src`);
    }
  });
};

export const animatePrizesCount = () => {
  const secondaryPrizeDelay = 6300;
  const additionalPrizeDelay = 8000;

  if ((window.innerWidth / window.innerHeight < 1) || (window.innerWidth < 769)) {
    return;
  }

  const secondaryPrizeCountElem = document.querySelector(`.prizes__item--cases .prizes__count`);
  const additionalPrizeCountElem = document.querySelector(`.prizes__item--codes .prizes__count`);

  if (secondaryPrizeCountElem) {
    const initVal = 1;
    secondaryPrizeCountElem.innerHTML = initVal;

    setTimeout(() => {
      animateDigits(secondaryPrizeCountElem, initVal, 7, 500);
    }, secondaryPrizeDelay);
  }

  if (additionalPrizeCountElem) {
    const initVal = 11;
    additionalPrizeCountElem.innerHTML = initVal;

    setTimeout(() => {
      animateDigits(additionalPrizeCountElem, initVal, 900, 600);
    }, additionalPrizeDelay);
  }
};

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

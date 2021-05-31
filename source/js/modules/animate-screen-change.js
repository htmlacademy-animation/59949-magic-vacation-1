export default (evt) => {
  if (window.location.hash) {
    const currentHash = window.location.hash;

    if (currentHash === `#story` && evt.target.hash === `#prizes`) {
      evt.preventDefault();

      const storyScreenElem = document.getElementById(`story`);
      const storyScreenLink = document.querySelector(`[data-href='story']`);

      storyScreenElem.classList.remove(`active`);
      storyScreenLink.classList.remove(`active`);
      storyScreenElem.classList.add(`screen-change`);

      setTimeout(() => {
        storyScreenElem.classList.remove(`screen-change`);
        window.location.hash = `#prizes`;
      }, 650);
    }

    if (currentHash === `#prizes` && evt.target.hash === `#rules` || currentHash === `#rules` && evt.target.hash === `#prizes`) {
      evt.preventDefault();

      const prizesFooterElem = document.querySelector(`#prizes .screen__footer-wrapper`);
      const rulesFooterElem = document.querySelector(`#rules .screen__disclaimer`);

      prizesFooterElem.classList.add(`text--hidden`);
      rulesFooterElem.classList.add(`text--hidden`);

      setTimeout(() => {
        prizesFooterElem.classList.remove(`text--hidden`);
        rulesFooterElem.classList.remove(`text--hidden`);
      }, 550);

      setTimeout(() => {
        window.location.hash = (currentHash === `#prizes` ? `#rules` : `#prizes`);
      }, 400);
    } else {
      evt.preventDefault();

      const footerElemArr = document.querySelectorAll(`.screen__footer`);
      const rulesFooterElem = document.querySelector(`#rules .screen__disclaimer`);

      footerElemArr.forEach((elem) => {
        elem.classList.add(`footer--hidden`);
      });
      rulesFooterElem.classList.add(`footer--hidden`);

      setTimeout(() => {
        window.location.hash = evt.target.hash;

        footerElemArr.forEach((elem) => {
          elem.classList.remove(`footer--hidden`);
        });
        rulesFooterElem.classList.remove(`footer--hidden`);
      }, 500);
    }
  }
};

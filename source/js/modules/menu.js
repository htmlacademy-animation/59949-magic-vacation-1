export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function (evt) {
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }

      animateScreenChange(evt);
    });
  }
};

const animateScreenChange = (evt) => {
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
  }
};

import textTransform from './text-transform';
import slider from './slider';

export default () => {
  document.body.addEventListener(`screenChanged`, (evt) => {
    switch (evt.detail.screenName) {
      case `top`:
        textTransform(evt.detail.screenElement, `.intro__title`);
        textTransform(evt.detail.screenElement, `.intro__date`, 1200);
        break;
      case `story`:
        slider();
        textTransform(evt.detail.screenElement, `.slider__item-title`);
        break;
      case `prizes`:
        textTransform(evt.detail.screenElement, `.prizes__title`);

        if (!evt.detail.screenElement.classList.contains(`is-visited`)) {
          setTimeout(() => {
            evt.detail.screenElement.classList.add(`is-visited`);
          }, 100);
        }
        break;
      case `rules`:
        textTransform(evt.detail.screenElement, `.rules__title`);
        break;
      case `game`:
        textTransform(evt.detail.screenElement, `.game__title`);
        break;
      default:
        break;
    }
  });
};

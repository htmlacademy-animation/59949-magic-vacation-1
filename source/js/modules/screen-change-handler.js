import textTransform from './text-transform';

export default () => {
  document.body.addEventListener(`screenChanged`, (evt) => {
    textTransform(evt.detail.screenElement, `.intro__title`);
  });
};

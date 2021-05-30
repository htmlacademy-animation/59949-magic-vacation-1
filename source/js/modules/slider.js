import Swiper from "swiper";

export default () => {
  let storySlider;
  let sliderContainer = document.getElementById(`story`);

  const slide1Background = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
  const slide2Background = `url("img/slide2.jpg"), linear-gradient(180deg, rgba(45, 54, 179, 0) 0%, #2A34B0 16.85%)`;
  const slide3Background = `url("img/slide3.jpg"), linear-gradient(180deg, rgba(92, 138, 198, 0) 0%, #5183C4 16.85%)`;
  const slide4Background = `url("img/slide4.jpg"), linear-gradient(180deg, rgba(45, 39, 63, 0) 0%, #2F2A42 16.85%)`;

  const pageContainer = document.body;

  const setSlider = function () {
    if (storySlider) {
      storySlider.destroy();
    }

    setBackgroundImage();
    setColorThemeAttr();

    if (((window.innerWidth / window.innerHeight) < 1) || window.innerWidth < 769) {
      storySlider = new Swiper(`.js-slider`, {
        pagination: {
          el: `.swiper-pagination`,
          type: `bullets`
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            setBackgroundImage(storySlider.activeIndex);
            setColorThemeAttr(storySlider.activeIndex);
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    } else {
      storySlider = new Swiper(`.js-slider`, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`
        },
        navigation: {
          nextEl: `.js-control-next`,
          prevEl: `.js-control-prev`,
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            setBackgroundImage(storySlider.activeIndex);
            setColorThemeAttr(storySlider.activeIndex);
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    }
  };

  const setBackgroundImage = (index = 0) => {
    switch (index) {
      case 0:
      case 1:
        sliderContainer.style.backgroundImage = slide1Background;
        break;
      case 2:
      case 3:
        sliderContainer.style.backgroundImage = slide2Background;
        break;
      case 4:
      case 5:
        sliderContainer.style.backgroundImage = slide3Background;
        break;
      case 6:
      case 7:
        sliderContainer.style.backgroundImage = slide4Background;
        break;
    }
  };

  const setColorThemeAttr = (index = 0) => {
    switch (index) {
      case 0:
      case 1:
        pageContainer.dataset.colorTheme = `dark-purple`;
        break;
      case 2:
      case 3:
        pageContainer.dataset.colorTheme = `soft-blue`;
        break;
      case 4:
      case 5:
        pageContainer.dataset.colorTheme = `bright-blue`;
        break;
      case 6:
      case 7:
        pageContainer.dataset.colorTheme = `purple`;
        break;
    }
  };

  const removeSlider = (evt) => {
    if (evt.detail.screenName !== `story`) {
      window.removeEventListener(`resize`, setSlider);
      document.body.removeEventListener(`screenChanged`, removeSlider);

      pageContainer.dataset.colorTheme = ``;
      storySlider.destroy();
    }
  };

  window.addEventListener(`resize`, setSlider);
  document.body.addEventListener(`screenChanged`, removeSlider);

  setSlider();
};

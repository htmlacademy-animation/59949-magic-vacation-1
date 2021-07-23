export const animateDigits = (elem, initVal, lastVal, duration) => {
  let startTime = null;

  const step = (currentTime) => {
    if (!startTime) {
      startTime = currentTime;
    }
    const progress = Math.min((currentTime - startTime) / duration, 1);
    elem.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };

  window.requestAnimationFrame(step);
};

export const animateDigits = (elem, initVal, lastVal, duration) => {
  const fps = 12;
  let startTime = null;
  let lastTime = null;
  let fpsInterval = 1000 / fps;

  const step = (currentTime) => {
    if (!startTime) {
      startTime = currentTime;
      lastTime = currentTime;
    }

    let timePassed = currentTime - lastTime;

    if (timePassed > fpsInterval) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      elem.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

      lastTime = currentTime;

      if (progress >= 1) {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
    }
    window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
};

export default () => {
  const svgPathsList = document.querySelectorAll(`.result__svg-result-logo path`);

  svgPathsList.forEach((path) => {
    const pathLength = Math.round(path.getTotalLength());

    path.setAttribute(`stroke-dashoffset`, `${pathLength}`);
    path.setAttribute(`stroke-dasharray`, `${pathLength}`);
  });
};

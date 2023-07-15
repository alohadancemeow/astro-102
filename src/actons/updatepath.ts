type updatePathType = {
  textMainId: string;
  pathId: string;
};

export const updatePath = ({ pathId, textMainId }: updatePathType) => {
  const textMain = document.querySelector(textMainId) as HTMLElement;
  const path = document.querySelector(pathId) as SVGPathElement;

  if (textMain && path) {
    path.setAttribute(
      "d",
      `M0,0 V${textMain.offsetHeight} H${textMain.offsetWidth} v${
        textMain.offsetHeight / 2
      }`
    );

    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength.toString();
    path.style.strokeDashoffset = pathLength.toString();
  }
};

import React from "react";

import "./index.scss";
import ComponentGithubLink from "../../../ThisWebsiteComponents/ComponentGithubLink";

const images = import.meta.glob("/public/images/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
});

const imageList = Object.values(images).map((image) => image.default);

export default function SimpleMobileSlideshow() {
  const [index, setIndex] = React.useState(0);

  const timeoutRef = React.useRef(null);
  const moveToLastRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    async function myFunction() {
      resetTimeout();
      timeoutRef.current = await setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
          ),

        3000
      );
    }

    myFunction();

    return () => {
      resetTimeout();
    };
  }, [index]);

  const nextImgHandler = () => {
    setIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const backImgHandler = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="simpleMobileSlideshow">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imageList.map((image, index) => (
            <img
              src={image}
              alt="image"
              className={`slideshowImg fakeImg_${image}`}
              draggable="false"
              key={index}
            />
          ))}
        </div>
        <div
          className="changeImgBtn changeImgBtn__back"
          onMouseDown={() => backImgHandler()}
        >
          <i className="fa-solid fa-angle-left"></i>
        </div>

        <div
          className="changeImgBtn changeImgBtn__next"
          onMouseDown={() => nextImgHandler()}
        >
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>

      <ComponentGithubLink
        url={
          "https://github.com/adrianlebaron/whistle-ui-components/tree/main/src/components/Slideshows/SimpleMobileSlideshow"
        }
      />
    </div>
  );
}

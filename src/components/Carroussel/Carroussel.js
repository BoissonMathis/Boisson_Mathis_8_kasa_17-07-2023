import { useState } from "react";
import arrow from "../../assets/desktop/arrow.png";

import "../Carroussel/Carroussel.scss";

function Carroussel(props) {
  const carousselPictures = props.pictures;

  let [count, setCount] = useState(0);
  let [isVisible, setIsVisible] = useState(true);

  function arrowAndCountVisible() {
    if (carousselPictures.length === 1) {
      setIsVisible(false);
    }
  }

  function nextSlide() {
    if (count < carousselPictures.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  function previousSlide() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(carousselPictures.length - 1);
    }
  }

  return (
    <div className="carroussel" onLoad={arrowAndCountVisible}>
      <img src={carousselPictures[count]} alt="" className="active-picture" />

      <p className={"count font18 " + (isVisible ? "visible" : "invisible")}>
        {count + 1}/{carousselPictures.length}
      </p>

      <img
        src={arrow}
        alt="back"
        className={"arrow arrow-back " + (isVisible ? "visible" : "invisible")}
        onClick={previousSlide}
      />

      <img
        src={arrow}
        alt="forward"
        className={
          "arrow arrow-forward " + (isVisible ? "visible" : "invisible")
        }
        onClick={nextSlide}
      />
    </div>
  );
}

export default Carroussel;

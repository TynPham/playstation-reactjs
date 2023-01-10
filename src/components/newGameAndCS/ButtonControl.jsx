import React from "react";
import { useRef } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const ButtonControl = ({ NewGameRef, ComingSoonRef }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleClickPrev = () => {
    if (!prevRef.current.classList.contains("clickable")) {
      return;
    }

    NewGameRef.current.style.left = "-100%";
    ComingSoonRef.current.style.left = "0";

    prevRef.current.classList.remove("clickable");
    prevRef.current.childNodes[0].classList.add("notClick");

    nextRef.current.classList.add("clickable");
    nextRef.current.childNodes[0].classList.remove("notClick");
  };

  const handleClickNext = () => {
    if (!nextRef.current.classList.contains("clickable")) {
      return;
    }

    NewGameRef.current.style.left = "0";
    ComingSoonRef.current.style.left = "100%";

    nextRef.current.classList.remove("clickable");
    nextRef.current.childNodes[0].classList.add("notClick");

    prevRef.current.classList.add("clickable");
    prevRef.current.childNodes[0].classList.remove("notClick");
  };

  return (
    <div className="sm:top-4 sm:right-4 md:top-12 md:right-20 absolute top-16 right-32 flex gap-2">
      <span
        ref={prevRef}
        className="p-2p rounded-full transition-all clickable"
      >
        <button
          onClick={handleClickPrev}
          className="p-0.85r rounded-full bg-white "
        >
          <GrPrevious className="text-xl" />
        </button>
      </span>
      <span ref={nextRef} className="p-2p rounded-full transition-all">
        <button
          onClick={handleClickNext}
          className="p-0.85r rounded-full bg-white notClick"
        >
          <GrNext className="text-xl" />
        </button>
      </span>
    </div>
  );
};

export default ButtonControl;

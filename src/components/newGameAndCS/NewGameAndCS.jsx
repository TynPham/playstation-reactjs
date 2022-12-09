import React from "react";
import { useRef } from "react";
import ButtonControl from "./ButtonControl";
import ComingSoon from "./ComingSoon";
import NewGame from "./NewGame";

const NewGameAndCS = () => {
  const NewGameRef = useRef(null);
  const ComingSoonRef = useRef(null);

  return (
    <div className="relative bg-[#121314] h-[750px]">
      <NewGame NewGameRef={NewGameRef} />
      <ComingSoon ComingSoonRef={ComingSoonRef} />
      <ButtonControl NewGameRef={NewGameRef} ComingSoonRef={ComingSoonRef} />
    </div>
  );
};

export default NewGameAndCS;

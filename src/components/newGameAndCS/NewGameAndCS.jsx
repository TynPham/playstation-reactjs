import React from "react";
import { useRef } from "react";
import ButtonControl from "./ButtonControl";
import ComingSoon from "./ComingSoon";
import NewGame from "./NewGame";

const NewGameAndCS = () => {
  const NewGameRef = useRef(null);
  const ComingSoonRef = useRef(null);

  return (
    <div className="sm:h-1000 md:h-900h-750 relative bg-newGame overflow-hidden">
      <NewGame NewGameRef={NewGameRef} />
      <ComingSoon ComingSoonRef={ComingSoonRef} />
      <ButtonControl NewGameRef={NewGameRef} ComingSoonRef={ComingSoonRef} />
    </div>
  );
};

export default NewGameAndCS;

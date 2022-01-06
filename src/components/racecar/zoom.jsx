import React from "react";
import M from "./M";
import Z from "./Z";
import BigO from "./BigO";
import O from "./O";

const Zoom = ({ animate, letterClassName }) => {
  return (
    <>
      <Z className={letterClassName} animate={animate} />
      <BigO className={letterClassName} animate={animate} />
      <O className={letterClassName} animate={animate} />
      <M className={letterClassName} animate={animate} />
    </>
  );
};

export default Zoom;

import React, { useState, useRef, useEffect } from "react";
import styles from "./scrollContainer.module.css";

const ScrollContainer = ({ children }) => {
  const [transformAmount, setTransformAmount] = useState(0);
  const [activeChildIndex, setActiveChildIndex] = useState(0);
  const moving = {
    processing: false,
    data: undefined,
    nextIndex: 0,
    overflow:0
  };
  const movingRef = useRef(moving);
  const containerRef = useRef();
  const showAlert = (e) => {
      console.log(e)
  }
  const touchStartRef = useRef(0)
  const handleTouchStart = (e) => {
      touchStartRef.current = e.touches[0].clientY
  }
  const handleScroll = (e) => {
    if (!movingRef.current.processing) {
      const isTouchDevice = e._reactName === 'onTouchMove'
      // returns -1 for scroll up and 1 for scroll down
      const direction = 
      isTouchDevice 
      ? 
      e.touches?.[0].clientY > touchStartRef.current 
      ? -1 : 1 : e.deltaY > 0 ? 1 : -1;
      console.log("DIRECTION", direction)
      const activeChild = containerRef.current.querySelector(
        `.${styles.active}`
      );
      const isLastElement = !activeChild.nextSibling
      console.log("ACTIVE", activeChild)
      const atEndOfElement 
      = 
      direction > 0
      ?
      window?.innerHeight - activeChild.getBoundingClientRect().bottom >= 0 
      :
      activeChild.getBoundingClientRect().top >= 0
      console.log("AT END", atEndOfElement)
      const nextActiveChild =
        direction > 0 ? activeChild.nextSibling : activeChild.previousSibling;
      console.log("NEXT", nextActiveChild)
      const moveAmount =
        atEndOfElement
        ?
        activeChild && nextActiveChild
        ? 
        //1
        nextActiveChild.getBoundingClientRect().top 
        -
        activeChild.getBoundingClientRect().top
        : 
        //2
        0
        :
        nextActiveChild && direction < 0 
        ? 
        //3
        window?.innerHeight + activeChild.getBoundingClientRect().top >= 0
        ?
        activeChild.getBoundingClientRect().top
        :
        -window?.innerHeight 
        :
        !isLastElement && activeChild.getBoundingClientRect().bottom - window?.innerHeight < window?.innerHeight
        ?
        //4
        activeChild.getBoundingClientRect().bottom - window?.innerHeight
        :
        //5
        activeChild.getBoundingClientRect().bottom - window?.innerHeight
      //  console.log("TEST", activeChild.getBoundingClientRect().bottom, window?.innerHeight )
        const moveAmountTest =
        atEndOfElement
        ?
        activeChild && nextActiveChild
        ? 
        1
        : 
        2
        :
        nextActiveChild && direction < 0 
        ? 
        window?.innerHeight + activeChild.getBoundingClientRect().top <= 0
        ?
        3
        :
        3.5 
        :
        !isLastElement && activeChild.getBoundingClientRect().bottom - window?.innerHeight < window?.innerHeight
        ?
        4
        :
        5
      console.log("MOVE TEST", moveAmountTest)
      if (moveAmount) {
        movingRef.current.processing = true;
        movingRef.current.data = transformAmount - moveAmount;
        if(atEndOfElement){
          setTransformAmount(movingRef.current.data + movingRef.current.overflow);
          movingRef.current.nextIndex = movingRef.current.nextIndex + direction
          movingRef.current.overflow = 0
        }
        else{
          setTransformAmount(movingRef.current.data);
          movingRef.current.overflow = movingRef.current.overflow + moveAmount
        }
        
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      movingRef.current.processing = false;
      movingRef.current.data = undefined;
      setActiveChildIndex(movingRef.current.nextIndex);
    }, 1250);
  }, [movingRef, transformAmount]);
  return (
    <div
      className={styles.scrollContainer}
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleScroll}
      ref={containerRef}
    >
      {children.map((child, key) => {
        const newChild = React.createElement(
          child.type,
          {
            ...child.props,
            style: { transform: `translateY(${transformAmount}px)` },
            className: `${child.props.className} ${styles.scrollItem}${
              key === activeChildIndex ? ` ${styles.active}` : ``
            }`,
          },
          child.props.children
        );
        return newChild;
      })}
    </div>
  );
};

export default ScrollContainer;

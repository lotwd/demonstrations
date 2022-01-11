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
      // current displayed child
      const activeChild = containerRef.current.querySelector(
        `.${styles.active}`
      );
      // if the child is the last
      const isLastElement = !activeChild.nextSibling
      // if the end of the element is displayed
      const atEndOfElement 
      = 
      direction > 0
      ?
      window?.innerHeight - activeChild.getBoundingClientRect().bottom >= 0 
      :
      activeChild.getBoundingClientRect().top >= 0
      // next element to enter display area
      const nextActiveChild =
        direction > 0 ? activeChild.nextSibling : activeChild.previousSibling;
      // determines translate amount
      const moveAmount =
        atEndOfElement
        ?
        activeChild && nextActiveChild
        ? 
        nextActiveChild.getBoundingClientRect().top 
        -
        activeChild.getBoundingClientRect().top
        : 
        0
        :
        nextActiveChild && direction < 0 
        ? 
        window?.innerHeight + activeChild.getBoundingClientRect().top >= 0
        ?
        activeChild.getBoundingClientRect().top
        :
        -window?.innerHeight 
        :
        !isLastElement && activeChild.getBoundingClientRect().bottom - window?.innerHeight < window?.innerHeight
        ?
        activeChild.getBoundingClientRect().bottom - window?.innerHeight
        :
        activeChild.getBoundingClientRect().bottom - window?.innerHeight
      
      if (moveAmount) {
        movingRef.current.processing = true;
        movingRef.current.data = transformAmount - moveAmount
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

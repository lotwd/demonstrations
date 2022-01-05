import React from "react";
import styles from "./grid.module.css";

const Grid = (props) => {
  // object containing classes to attach to the component.  The keys match component props.
  const classesMap = {
    className: props.className,
    direction: {
      column: `${styles.column}`,
      [`row-reverse`]: `${styles.rowReverse}`,
      [`column-reverse`]: `${styles.columnReverse}`,
    }[props.direction],
    container: `${styles.container}`,
    item: `${styles.item}`,
    justify: {
      center: `${styles.justifyCenter}`,
      left: `${styles.justifyLeft}`,
      right: `${styles.justifyRight}`,
    }[props.justify],
    align: {
      center: `${styles.alignCenter}`,
      start: `${styles.alignStart}`,
      end: `${styles.alignEnd}`,
    }[props.align],
    gap:
      props.gap &&
      `${styles[`rgap${props.gap}`]} ${styles[`cgap${props.gap}`]}`,
    rowGap: props.rowGap && `${styles[`rgap${props.rowGap}`]}`,
    columnGap: props.columnGap && `${styles[`cgap${props.columnGap}`]}`,
    xs: props.xs && `${styles[`xswrap${props.xs}`]}`,
    sm: props.sm && `${styles[`smwrap${props.sm}`]}`,
    md: props.md && `${styles[`mdwrap${props.md}`]}`,
    lg: props.lg && `${styles[`lgwrap${props.lg}`]}`,
    xl: props.xl && `${styles[`xlwrap${props.xl}`]}`,
    hide: props.hide && `${styles[`hide${props.hide}`]}`,
    show: props.show && `${styles[`show${props.show}`]}`,
  };
  // loops through the class map above, removing entries with null or undefined values, and converts the class names to a string
  const classes = Object.keys(classesMap)
    .map((key) => (props[key] ? classesMap[key] : null))
    .filter((className) => className)
    .toString()
    .replaceAll(",", " ");
  // creates a component to use if a component is passed through the component prop.
  // the new component will combine classes with the item component
  // the new component children, if any, will overide the Grid component children
  const NewComponent = ({ component }) => {
    const newComponent = { ...component };
    newComponent.props = { ...newComponent.props };
    newComponent.props.className = `${
      props.component.props.className
        ? `${props.component.props.className} `
        : ``
    }${classes}`;
    newComponent.props.children 
      = newComponent.props.children
      ? newComponent.props.children
      : props.children;
    return newComponent;
  };
  return props.component ? (
    <NewComponent {...props} />
  ) : (
    <div className={classes}>{props.children}</div>
  );
};

export default Grid;

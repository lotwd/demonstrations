# React Components Demonstrations.

Demonstrations of these components can be view by clicking [Here](https://demonstrations.lotwebdesign.com)

## Grid
<p>The grid component is a component used to create a responsive flex grid.  It is based off of the Material-UI Grid component</p>

| Prop | Default | Type | Values | Description
|---| :---| :---| :--- | :---|
| className | undefined | string | | class to attach to the grid component
| direction | row | string| row </br> row-reverse </br> column </br> column-reverse | the direction of the flexbox
|  container | false | bool | true </br> false | true if Grid component is a container for other Grid components
| component | div | component | div<br/>button<br/>ul<br/>... | changes the grid root element to the passed component.  Component children override Grid component children 
| item | false | bool | true </br> false | true if Grid component is a child of a Grid container component
| justify | right | string | right <br/>left<br/>center<br/> | sets the justify-content css attribute
| align | start | string | start<br/>end<br/>center<br/> | sets the align-items css attribute
| gap | 0 | integer | 0-10 | sets the row-gap and column-gap css attributes in px.  Adds space between Grid items.
| gapRow | 0 | integer | 0-10 | sets the row-gap css attribute in px.  Adds space between rows.
| gapColumn | 0 | integer | 0-10 | sets the column-gap css attribute in px.  Adds space between columns.
| xs | undefined | integer | 1-12 | sets the number of columns a Grid item compoment will occupy on an extra small device.  
| sm | undefined | integer | 1-12 | sets the number of columns a Grid item compoment will occupy on a small device.  
| md | undefined | integer | 1-12 | sets the number of columns a Grid item compoment will occupy on an medium sized device. 
| lg | undefined | integer | 1-12 | sets the number of columns a Grid item compoment will occupy on a large device.  
| xl | undefined | integer | 1-12 | sets the number of columns a Grid item compoment will occupy on an extra large device.  
| hide | undefined | string | xs<br/>sm<br/>md<br/>lg<br/>xl<br/> | hides the component on the selected device size and up.
| show | undefined | string | xs<br/>sm<br/>md<br/>lg<br/>xl<br/> | shows the component on the selected device size and up.  Used to show components hidden with the hide prop.

## SVG Border
<p>The SvgBorder component adds an arced image to use as a border or divider</p>

Prop | Default | Type | Values | Description
|---| :---| :--- | :--- |:---|
flipX | false | bool | true <br/> false | flip the border horizontally
flipY | false | bool | true <br/> false | flip the border vertically
color | black | color | any color | sets the border color
shadow | undefined | integer | 1-4 | adds a drop shadow to the border.  Higher number provides a stronger shadow intensity.
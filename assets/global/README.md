## Description
This files will import automatically by App main file (index.html).
You can import your own files in `index.html`, but for more organization and comfort you can use this files.

## app.js
Here you can set all functions and code available for all pages in the App.

## style.css
All style that you Apply in this file will be applied in all Elements of Every page of your Application, without the need to apply the same style on each page.

If you decide to edit an element with a global style, just edit it by page's file (`page/style.css`). All properties in that file will overwrites global stylish properties. Example:

```
  //Global style.css
  .mi-class {
    background-color: red;
    border: 2px solid black;
  }

  //Page style.css
  .mi-class {
    background-color: blue;
  }

  //The final result will show the Element with a **blue** background color overwritten by page style.css, but with a black border specified by global style.
```

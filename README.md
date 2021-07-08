# Mini shopping mall
This is mini shopping mall which filters items by type and color.

## Technology Stack
* HTML
* CSS
* JavaScript

## Key Features
* Every item will be shown by clicking logo button
* Filtered item will be shown by clicking filtering button

## Problem Solving
* How to show json data in HTML
  * Get data using fetch API
  * Make HTML String array, join the array, and assign to container using innerHTML tag

 
* How to filter items by clicking each button
  * Add data-type and data-color attribute to each li tag by type and color
  * Add data-key and data-value attribute to each filtering button, key is type or color
  * When user click the filtering button, filtering items by target.dataset.key 

## What I learned from the project
* 'box-sizing' attribute sets how the total width and height of an element is calculated. The width and height properties include the content, padding, and border by 'border-box' value.
```CSS
* {
 box-sizing: border-box;
}
```
* If HTML tags have same features, add same class name to them. Also, If HTML tag has a original featur, add class name to it.
```html
 <button class="btn">
        <img
          src="img/blue_s.png"
          alt="skirt"
          class="imgBtn"
          data-key="type"
          data-value="skirt"
        />
</button>
<button class="btn colorBtn blue" data-key="color" data-value="blue">
        Blue
</button>
```

* Use :root {}, declare color, size etc.
```css
:root {
  /* color */
  --color-black: #3f454d;
  --color-white: #ffffff;
  --color-blue: #3b88c3;
  --color-yellow: #fbbe28;
  --color-pink: #fd7f84;
  --color-light-grey: #dfdfdf;

  /* size */
  --base-space: 8px;
  --size-button: 60px;
  --size-border: 4px;
  --size-thumbnail: 50px;
  --font-size: 18px;

  /* annimation */
  --animation-duration: 300ms;
}
```
* Use dataset property for sorting HTML tag
* Event delegation
  * If we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
  * If event.target is nothing to do, the call returns immediately
```javascript
function onButtonClick(event) {
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;
  console.log(target, key, value);
  if (key === undefined || value === undefined) {
    return;
  }
  updateItems(key, value);
}
function setClickEvent(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', onButtonClick);
}
```

* The overflow CSS shorthand property sets the desired behavior for an element's overflow 
* The alt attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility 

## Screenshot / GIF of the project
![스크린샷 2021-07-08 오후 2 48 07](https://user-images.githubusercontent.com/78864112/124869155-c6cc5f80-dffb-11eb-9c4b-42f075244d24.png)
![스크린샷 2021-07-08 오후 2 48 23](https://user-images.githubusercontent.com/78864112/124869167-ca5fe680-dffb-11eb-863e-c006da30ec4e.png)
![스크린샷 2021-07-08 오후 2 48 38](https://user-images.githubusercontent.com/78864112/124869176-ccc24080-dffb-11eb-8050-700da2548828.png)



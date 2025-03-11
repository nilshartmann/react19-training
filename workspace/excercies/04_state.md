# Build an Interactive "CardImageSelector"

# Files

* `src/components/CardImageSelector.tsx` 

# Description

* The "CardImageSelector" component should only display a subset of three images from the given list with all images
* With a previous/next button, the user should be able to navigate through the images
  * Later we will allow the user to select an image from the list

# Steps

* Add a state to `CardImageSelector` in which you store the index of the first image that should be shown (index from the image list).
    * Initially, the first three images should be displayed, so the initial state should be set to `0`
* Determine the images to display from the `images` property
  * You can use the JavaScript function `slice` for this.
    * This function allows you to pass the first and last element of an array.
    * The function will return a new array with the selected elements.
    * If the specified end element is beyond the last element in the array, fewer elements will be returned automatically
      * So there are no invalid accesses
      * You don’t need to worry about the indices being in a valid range.
      * User experience is not our priority today 🤓
* Modify the rendering of your `CardImage` list: only display the three visible images
* Render two `button` components to navigate through the image list (`Previous` and `Next`)
  * The button must have its `type` set to `button` (default `type` for html buttons is `submit` which does not make sense here and won't work when we later use the `CardImageSelector` inside a form.)  
  * When a button is clicked, the image view should be "shifted" accordingly
  * The state must be increased or decreased by `1` on a button click
* **Optional**, if you have time, you can make improvements, for example:
  * Use the `disabled` property to disable the buttons, so the user cannot select invalid index values (e.g., an index less than `0`)

# Material

* JavaScript `slice`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

* React
  * React State: https://react.dev/learn/state-a-components-memory
      * especially: https://react.dev/learn/state-a-components-memory#adding-a-state-variable
  * useState: https://react.dev/reference/react/useState
  * Event Handler: https://react.dev/learn/responding-to-events#adding-event-handlers
  * Properties of HTML Elements (built-in browser components): https://react.dev/reference/react-dom/components/common

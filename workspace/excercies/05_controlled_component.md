# Make an image selectable in your CardImageSelector

# Files

* `src/components/CardImageSelector.tsx` 

# Description

* The "CardImageSelector" should be a _controlled_ component that receives the name of a selected image (or null) and informs the parent component if the selected image changes

# Steps

1. Add to new properties to `CardImageSelector`:
  - `selectedImageName` (allowed types: `string` and `null`)
  - `onSelectedImageNameChange`: a callback-function with one function argument `newImageName` of type `string`. The callback-function will not return anything, so their return type can be set to `void`
2. Add a "wrapper" `div` in your list around the `CardImage` component
  - Note that you have to move the `key` attribute to the `div`
  - The wrapper `div` should call the `onSelectedImageNameChange` from the props if it is clicked (`onClicked` event handler). It should pass the name of the image that has been clicked on as parameter.
  - The wrapper `div` should have set the CSS class `CardImageSelectorImage`
    - If the image that is rendered inside the div is the currently selected image, the `div` should have also the CSS class `selected`.
3. Control the component from your `App` component
  - (note that we will move this to our form later)
  - Create a state that can contain values of type `string|null`
  - Initialize the state either with `null` (no image selected) or preselect an image by setting the state to one of the known image names, `02.png` for example.
  - Set the `selectedImageName` and `onSelectedImageNameChange` property on `CardImageSelector`
  - It should now be possible to select an image by clicking on it

# Material

* TypeScript
  * Types for function signatures: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions
  * `null` and `undefined`: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined
  * Union Types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
* React
  * Types for `useState`: https://react.dev/learn/typescript#typing-usestate
  * Sharing states between components: https://react.dev/learn/sharing-state-between-components
  * Controlled and uncontrolled components: https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components



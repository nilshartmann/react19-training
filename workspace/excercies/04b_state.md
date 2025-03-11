- Add a "wrapper" div around CardImage
  - The wrapper div should have CSS classes:
    - If the image is NOT selected the div should have `className="CardImageSelectorImage"` as CSS class
    - If the image IS selected then the div should have `className="CardImageSelectorImage selected"`
    
- Add a new state "selectedImageName" with a name of the image that is currently selected

- If the user clicks on an image, the selected image should be "saved" in the state
  - You can use "onClick" on the "wrapper" div

- When you're finished, please raise hand!
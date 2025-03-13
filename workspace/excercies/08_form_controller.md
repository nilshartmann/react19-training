# Integrate the CardImageSelector into our form

# Files

- src/components/CardEditor.tsx (create!)
- src/components/card-schema.ts

# Steps

1. Enhance the `CardSchema`
  - please add `imageName` (`string`) to your `CardSchema` in `card-schema.ts`
  - note that the tests in `card-schema.test.ts` now fail, but we don't care anylonger. If you like to, you can remove the test file.

2. "Watch" the values of `imageCaption` and `imageDecoration` fields from the form

3. Add the `CardImageSelector` to your form. 
  - Set an arbitrary value for `selectedImageName` and a function with no operation as `onSelectedImageNameChange` for now
  - Set the `caption` and `decoration` props to the values from the form, so that the user immediately see how the image will look like

4. Add a `Controller` around your `CardImageSelector` and connect it with the form
  - You need to set three props on `Controller`:
    - `name` (set to `"imageName"`)
    - `control` (`control` from the object returned by `useForm` )
    - `render`: Render property with a callback function that provides you all data you need to render the `CardImageSelector`
      - The one and only argument of the callback function is an object with a `field` property
      - For our excercise, that is all what you need
      - From the `field` property you get the current `value` and an `onChange` method. Connect both with `selectedImageName` and `onSelectedImageNameChange` property of your `CardImageSelector`
5. When everything works, and you click on the "Save" button, the selected image should be part of the form data that is logged onto the console
6. **Optional**: Show an error message if no image is selected and the user presses the "Create" button

# Reference

- React Hook Form:
  - `watch` function from `useForm`: https://react-hook-form.com/docs/useform/watch
  - `control` object from `useForm`: https://react-hook-form.com/docs/useform/control 
  - `Controller` component https://react-hook-form.com/docs/usecontroller/controller

- React
  - Render props: https://react.dev/reference/react/Children#calling-a-render-prop-to-customize-rendering
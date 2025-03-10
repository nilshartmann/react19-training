# Build a List of CardImages

# Files

- src/components/CardImageSelector.tsx (create)
- src/components/App.tsx

# Description

- **Create a new component `CardImageSelector` that can display a list of multiple card images**
    - The task of `CardImageSelector` now in the first step is only to render a list of `CardImage` components
      - Each image passed should be displayed using the `CardImage`
      - The component should receive a list of image names and the information, whether each image should render a caption and a "decoration"
    - Later we will add more features and make the component interactive:
      - users can then "browse" through the images
      - we will allow users to select an image from the list

# Steps

1. Create the properties for your component
   - The component needs:
     - `imageNames`, list of images names (`01.png`, `02.png`) that the selector should render
     - `caption` and `decoration` as in the `CardImage` component
       - Note that the same `caption` and `decoration` is applied for _all_ images in the `imageNames` list
2. Your component should return a root element (e.g., `div` or `section`)
  - You can set the CSS class `CardImageSelector` on the root element to display the images horizontally
3. Inside the root element render a list (with `map`) so that all images that are passed by properties are rendered using `CardImage` component
    - Remember that you need to use a `key` for `CardImage`.
        - The `key` property is automatically available in each React component, and you just need to set it.
        - The value of the `key` property must be unique within the list (we can assume that an image name is unique)
4. Update the `App` component
  - The `App` component should no longer render `CardImage` components (you can remove them)
  - Create an array (outside the component function) with sample image names:
    - `const imageNames = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"];`
      - (In a real application, we would probably read this data from a backend, e.g., via REST api)
  - Use your `CardImageSelector` component to display the images

# Material

- Rendering Lists in React: https://react.dev/learn/rendering-lists
- `key` property: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
- JavaScript
  `map` function on an array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


# Component Properties

# Files

- src/components/CardImage.tsx
- src/components/App.tsx

# Steps

- **Make your `CardImage` component configurable with properties**
    - `name`, `caption` and `decoration` should be passed as properties
    - Define a TypeScript `type` (or `interface`) for the property object of the component
        - `name` should be a string
        - `caption` should be an _optional_ string
        - `decoration` should be a boolean
- Use the passed properties in your `CardImage`
    - Remove the hardcoded values from the previous exercise and replace them with the values from the properties
    - The `name` only takes the file name (`01.png`), but not the path. So in your component remember to add the path (`/images`) when 
      setting the `src` property of the `img`
    - If `decoration` is set, the CSS class on the root `div` should also have `CardImageDecoration`
    - Only render the `div` for the `caption` if a caption is set (remember: `caption` property is optional)
- **Update the call in the `App` component**
    - Now you need to pass your properties here. 
    - Render multiple "instances" of your component with different properties to see if everything works as expected

# Material

- Component properties: https://react.dev/learn/passing-props-to-a-component
- Template literals in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
- TypeScript object type (for describing the property object): https://www.typescriptlang.org/docs/handbook/2/objects.html
- JavaScript in JSX: https://react.dev/learn/javascript-in-jsx-with-curly-braces
- Conditionally rendering: https://react.dev/learn/conditional-rendering#conditionally-including-jsx
- Single Root Element: https://react.dev/learn/writing-markup-with-jsx#1-return-a-single-root-element
    - Fragment component: https://react.dev/reference/react/Fragment

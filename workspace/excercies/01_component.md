# Exercise: A React Component

# Preparation

- Make sure the development server is running
- To do this, run the `dev` script from the root directory of the workspace
    - For example: `pnpm dev` or `npm run dev`
- The server with your application will then run on port 3000
- **Note:** When the server is running and you **save files**, the display in the browser should update automatically
    - If that doesn't work, refresh the browser
    - In general, it is not necessary to restart the server.

# Files

- src/components/App.tsx
- src/components/CardImage.tsx (please create this file!)

# Steps

- Create the new file `src/components/CardImage.tsx`
    - Files containing TypeScript and JSX code **must** end with `.tsx`
    - Files containing only "regular" TypeScript code can also have the `.ts` extension.
- Create a very simple React component inside it
- It should be called `CardImage`
    - The idea is that it will render the image of our greeting cards that we will create later
    - To keep things simple, we start with the following:
        - A root div, should have the CSS class `CardImage`, that contains two children:
          1. An `img` element. There are some sample images in `workspace/public/images`. Pick one and reference
            it in the `src` attribute with the path `/images/IMAGE_NAME`
          2. Another div that displays a "caption" (just a simple word or sentence). The `div` should have the class
            `CardImageCaption`
    - Styling, etc., is not the focus of our workshop, but if you want, you can add own CSS (see below)
- Remember to export the component!
- **Include your component in our `App` component**
    - The `App` component is the root component of our application, that will be rendered, when our application starts
      - It's embedded using the TanStack Router. We will get to that later. For now, just assume, "it works" and the `App`
        component is rendered somehow "magically"
    - The `App` component currently outputs `Hello World`. Remove the `h1` component and render your `CardImage` instead
       - We will later add more components to the `App` component


# Material

- Components: https://react.dev/learn/your-first-component
- CSS class names in React: https://react.dev/learn#adding-styles
- Importing and exporting components: https://react.dev/learn/importing-and-exporting-components
    - Note! In our setup, you don't need to specify the file extension when using `import`!

# Background: CSS in React
- Tailwind is installed in the workspace, and you can use it out of the box
    - If you don't want to use Tailwind, you can delete everything in `src/index.css`
        - You can then write your own CSS classes in the file
        - Alternatively, you can split your own CSS into individual files. To do this, create one or more `.css` files and import them in one or more components, e.g., `import './ArticleCard.css';`
- Regardless of whether you're using Tailwind or your own CSS: instead of `class`, in React you use the attribute `className` to set CSS classes (https://react.dev/learn#adding-styles)
- To specify inline styles (`style` attributes), you need to provide an object in React.
    - See here: https://react.dev/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx

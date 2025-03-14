# Create some routes for our application

In the last step of our workshop we will add routing to our application, so that we have multiple routes (or "pages") in our app:

- `/` should show the list of greeting cards (`CardList` component)
- `/create` should open the `CardEditor` for creating new cards
- (Later also: `/cards/$cardId` should load and display the card with id `cardId`)

# Files

- routes/index.tsx
- routes/create.tsx (create)

### Important notes on the TanStack router filebased routing
- we are working in the `routes` directory now!
- _All_ files in `routes` directory (and below) are interpreted as Route files from TanStack Router. So if you create any file there it will be a Route!
  - To exclude files or directories from beeing a Route, choose a name starting with `-` (`Title.tsx` or `-components/`)
- When you create a new (Route) file in `routes` the Router plug-in in the development server will generate the basic route configuration into that file.
  - It might take a few moments until your IDE/Editor picks up the changes.
  - In IntelliJ you can reload the created file to make sure it has the changes made by the plugin. Therefore use the context menu in the Project Explorer and select `Reload from disc` (or use `File -> Reload all from disc`)
- You can find more about the filebased routing conventions in the docs: https://tanstack.com/router/v1/docs/framework/react/routing/file-based-routing

# Steps

1. Create the `/create` route for the Card Editor
  - Add a new file for the route (`/components/create.tsx`)
    - Wait until the code generator has generated the basic route configuration to that file
    - (you might have to reload the file in your IDE if the changes are not picked up automatically, see above)
    - Change the generated route configuration and set as `component` for this route you your `CardEditor` component
2. Remove the `CardEditor` component from your `App` component. The `App` component should only render the `CardList` component for now.
    - Note that the `App` component is already set as the route component for the `/` route (`routes/index.tsx`)
      - In a "real" app you could avoid the `App` component at all and just implement a component in `index.tsx`. In our case I only created the `App` component as a "playground" for the various components we built during the workshop.
3. Use the `Link` component from TanStack Router to create a link from your `CardList` to your `/create` route
    - Note that my default CSS makes the link look like a button, but if you inspect the DOM you will see that the `Link` component actually creates a regular HTML `a` element
  - If you want to, you can also create a link back from your `CardEditor` to the root route (`/`) to allow navigating between the editor and the card list

# Reference

- TanStack Router: https://tanstack.com/router/latest/docs/framework/react/overview
  - Filebased routing: https://tanstack.com/router/latest/docs/framework/react/routing/file-based-routing
  - Navigation: 
    - Links: https://tanstack.com/router/latest/docs/framework/react/guide/navigation#link-component
    - Link Component API: https://tanstack.com/router/latest/docs/framework/react/api/router/linkComponent
  - (Background: Vite plugin for code generation https://tanstack.com/router/latest/docs/framework/react/routing/installation-with-vite)

# Create the single card display route for our application

- `/cards/$cardId` should load and display the card with id `cardId`

# Files

- routes/cards.$cardId.tsx (create)

# Steps

1. Create a new route to show an individual greeting card

- The route needs one variable segment in the path. A variable segment is "declared" using a `$` sign in the file name.
    - The route should be `/cards/$cardId` so that at runtime we have paths like `/cards/C1`, `/cards/C2` etc.
    - The route file must either be `routes/cards.$cardId.tsx` or `routes/cards/$cardId.tsx`
        - (The first naming convention is called "flat route", the second is called "directory route")
        - The `$cardId` creates a dynamic segment with the parameter name `cardId`
2. Implement a new component `CardDisplay` for that route that loads and displays a single greeting card
    - Create the component `CardDisplay`directly in your route file (`$cardId.tsx`). You do not need to export the component
    - Set `CardDisplay` as `component` for the Route in the route configuration.
    - The component can access the `cardId` from the URL using `Route.useParams()`.
    - In the first step, just display the value of `cardId` from the current route
    - You can test your component by manually setting the url in your browser, like http://localhost:3000/cards/C1 (the string
      `C1` should be displayed in your component)
3. Use TanStack query and ky to load the actual data for a in `CardDisplay`
   - It's almost the same request as for the `CardList`, but:
       - the URL is `http://localhost:7100/cards/CARD_ID` (`http://localhost:7100/cards/C1`)
       - The response type is a single `CardSchemaDto` (not an array)
       - The query key must contain the `cardId`! (each card is cached separately)
   - If you need some styling, you can create a `div` with CSS class `CardDisplay`.
           - As a child of the `div` you can show the card information (same as within
             `CardList` but only a single card this time)
   - You can also add a link back to the root route `/` to make navigation possible
       - Add a link to the `CardList` component for each card
           - In your `CardList` you can add a link for each card to their individual page (`/cards/$cardId`)
               - As param for `cardId` you can use `card.id` from the card data
4. Inspect the TanStack query cache behaviour
   - "Slowdown" the GET requests in `CardList` and your `CardDisplay` (`/card/$cardId`) by adding a `?slow=2000` paramter
   - Navigate through the app using your links, for example: `/` -> `/cards/C1` -> `/` -> `/cards/C1` again
       - What is happening with the cache?
   - If you like to inspect the content of the cache, you can add the "Query Devtools" to your application.
       - To do so, open `src/main.tsx` and add `<ReactQueryDevtools />` as another child of the `QueryClientProvider`

# Reference

- Path params (dynamic segments in your URL): https://tanstack.com/router/latest/docs/framework/react/guide/path-params
  - `Route.useParams` for accessing the dynamic segments of a route at runtime: https://tanstack.com/router/latest/docs/framework/react/api/router/RouteApiType#useparams-method
  - "Dynamic" Links to routes with variable segments: https://tanstack.com/router/latest/docs/framework/react/guide/navigation#dynamic-links

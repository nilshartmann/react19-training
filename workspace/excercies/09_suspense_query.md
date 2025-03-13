# DataFetching using TanStack Query

# Files

- src/components/CardList.tsx (create)
- src/components/App.tsx

# PREPARATION: Start the Backend

- For these exercises, the "backend" must be running. The backend process provides a
  simple REST API for reading and writing "cards".
- First, start the backend (if not done yet):
  - Navigate to the `backend` directory
  - Run `pnpm install` there (if not done yet)
  - Run "pnpm start` there
  - The backend should now be running on port 7100
  - You can test the backend by opening "http://localhost:7100/cards" in the browser (or using curl or wget in the terminal).
      - This should return a list of json objects


# Tasks

1. Create the `CardList` component in `src/components/CardList.tsx`
2. Use 'useSuspenseQuery' from TanStack Query to fetch the cards from the server
   - You must specify a `queryKey`. This could be `["cards", "list"]`, for example.
     - In a real-world application, the query key might contain additional parameters, such as a sorting order.
   - You must implement the `queryFn`.
     - You can use the ky library to make the request (https://github.com/sindresorhus/ky?tab=readme-ov-file#usage)
   - The request must be a GET request to the URL http://localhost:7100/cards
   - Read the result with ky using `.json()`
   - You can use `zod` to parse and validate the result.
     - The schema is an _array_ of `CardDtoSchema` objects (already defined in `src/types.ts`)
   - Use the validated/parsed result as return value of your `queryFn`
3. Visualize the result of `useSuspenseQuery`:
   - Your `CardList` component should render a root `div` with CSS class `CardList`
   - Inside the root div, use `map` to render a list of cards
     - Each card in the list should have a `div` as root element with CSS class `CardListCard`
       - remember to set the `key` property!
       - inside the `CardListCard` `div`, render:
         - the image (use our `CardImage` component!)
         - A `p` element containing the card `message`
4. Add the `CardList` to your `App` component
   - Add the `CardList` above the `CardEditor`
   - Wrap the `CardList` with a `Suspense` component from React to show a loading message
     - To simulate a slow response time from the backend, you can add the `?slow` search param to your GET request. This will delay the response by the given time in ms (for example `?slow=4000`)
5. Add an "ErrorBoundary" around your `Suspense` block and show an error message if something fails while loading the data
  - To simulate a failing network request you can:
    - add the search param `fail` to your url (`http://localhost:7001/cards?fail`). This will return one invalid `GreetingCardDto` object and makes your zod validation failing
  - or: just shutdown your backend (Ctrl+C)
6. **Optional**, only if there is time left:
- Implement a button to sort the list:
  - When the button is clicked, the server should sort the list by likes.
  - To do this, add the search parameter "orderBy=likes": http://localhost:7100/cards?orderBy=likes
  - If sorting by likes is not selected, use the default sorting without a search parameter: http://localhost:7100/cards
  - The button should allow toggling between the two sorting options ("Default", "Likes").
  - Attention! You also need to update the queryKey.

# Material

- ky library for data fetching: https://github.com/sindresorhus/ky
- TanStack Query: 
  - Suspense support: https://tanstack.com/query/latest/docs/framework/react/guides/suspense
  - useSuspenseQuery: https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery#usesuspensequery
  - Query Function: https://tanstack.com/query/latest/docs/framework/react/guides/query-functions
  - Query Key: https://tanstack.com/query/latest/docs/framework/react/guides/query-keys
* React
  * Suspense component: https://react.dev/reference/react/Suspense

### Error Boundary
* React "Catching rendering errors with an error boundary": https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
* Ready to use ErrorBoundary components: https://github.com/bvaughn/react-error-boundary
  * FallbackComponent: https://github.com/bvaughn/react-error-boundary?tab=readme-ov-file#errorboundary-with-fallbackcomponent-prop
  * When implementing a `FallbackComponent` with TypeScript, the type of the props of the FallbackComponent are `FallbackProps`
* Reset the error boundary with TanStack Query:
  * https://tanstack.com/query/latest/docs/framework/react/guides/suspense#resetting-error-boundaries
  * useQueryErrorResetBoundary: https://tanstack.com/query/latest/docs/framework/react/reference/useQueryErrorResetBoundary
    * 

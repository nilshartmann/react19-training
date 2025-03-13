# Use TanStack Query to save a new card
- Use `useMutation` from TanStack Query to save the new card on the server.

# Files

- src/components/CardEditor.tsx

# Tasks

- In the `CardEditor` we already have the `Save` button that currently logs the card data onto the console.
  - It should now save the data on the server.
1. Use `useMutation` to create a mutation for saving the greeting card.
   - As options, you only need to specify `mutationFn`:
   - This should make a `POST` request to `http://localhost:7100/cards`.
   - You can use the `post` method from `ky` for this.
   - As a `json` body, pass the content of our form
   - You don't need to care about the result of the POST call, we don't handle it.
     - Keep an eye on the network tab to see if the request is executed successfully

2. Execute the mutation using `mutate` when the Save button is clicked.
- If an error occurs while saving (`error`), display a general error message.
    - (You can simulate an error by saving a message that starts with `fail`)
- While the mutation is running, disable the Save button.
    - To simulate a slow server request, use the URL `http://localhost:7100/cards?slow=4000`.
- If saving is successful (`success`), display a notification for the user.
- If saving is successful, ensure that the `CardList` is automatically updated:
  - Use `useQueryClient` to get the global TanStack Query `QueryClient` object.
  - In the mutation configuration, add the `onSuccess` method.
    - In this method, use `queryClient.invalidateQueries` to invalidate the cache.
    - Pass an object with the `queryKey` entry that contains the query key from your query in `CardList` to `invalidateQueries`.

# Material

- Mutations: https://tanstack.com/query/latest/docs/framework/react/guides/mutations
- invalidateQueries: https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation#query-matching-with-invalidatequeries
- useMutation: https://tanstack.com/query/latest/docs/framework/react/reference/useMutation#usemutation
- useQueryClient: https://tanstack.com/query/latest/docs/framework/react/reference/useQueryClient#usequeryclient

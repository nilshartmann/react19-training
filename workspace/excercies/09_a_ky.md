# Get familiar with the ky library

- Use ky to read and write data from our backend REST API

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

# Files

- src/components/App.tsx

# Steps

1. In `App.tsx` add a new `button` to _load_ cards from the server
  - When the button is clicked, you should execute a HTTP GET request to http://localhost:7100/cards
  - The server returns an _array_ of `CardDtoSchema` objects. This type is already defined in `src/types.ts`
  - You should use zod to validate the returned list of cards
  - You can then just use `console.log` to log the cards to the console
    - We will display the cards on the UI in a later step, but if you like you can try to show them on the UI (displaying their `message` properties would be sufficient)

2. In `App.tsx` add another button, to _save_ a new card to the server
   - When the button is clicked, execute a `POST` request to `http://localhost:7100/cards` to create a new card.
     - Your request needs a json body with an object of type `CardSchema`
       - Note: the return value of the GET request is an array of `CardSchemaDto`
       - The body of the POST request is a single `CardSchema` object
       - (I'm sorry for the confusing names)
     - You can use static sample data for your request body, we will connect our form in a later step.

# Reference

- ky library for data fetching: https://github.com/sindresorhus/ky
- Working with JavaScript promises:
  - "async" functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  - "await" keyword: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
  - Promise objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - 
# Validate card data with zod

# Files

- src/components/card-schema.ts
- src/components/card-schema.test.ts (only for verifying your zod schema)

# Description

- In a later step we will create a form where a user can create a greeting card
- We will use zod to validate the input
- In this first step we write the zod schema for the card data
  - Note that we will skip `imageName` for now. We will add it later.

# Steps

1. In `src/components/card-schema.ts` you find the `CardSchema` object
  - This is an empty object
  - Replace it with the zod schema definition
  - ⚠️: Before you start, remove the `any` type annotation
  - We need three fields on our schema object:
    - `message`: a string that is at least five chars long. 
      - The error message if the string is too short should be: `Please enter at least 5 chars for the message.`
    - `imageCaption`: an optional string
    - `imageDecoration`: a boolean 
2. To verify your schema is created correctly, use tests:
  - Run the tests in `card-schema.test.ts` (`pnpm test:card-schema` or `npm run test:card-schema`)
    - The test runner starts in watch mode: if you make changes to your schema, the test automatically runs again
    - You can also run the directly from IntelliJ/Webstorm
    - Make sure all tests are green
  - The last "test" in `card-schema.test.ts` is only a typechecking test.
    - Open `card-schema.test.ts` and make sure, there is no typescript error

# Material

- zod: https://zod.dev/
  - basic usage: https://zod.dev/?id=basic-usage
  - strings (with constraints): https://zod.dev/?id=strings
  - define objects: https://zod.dev/?id=objects
  - parse function: https://zod.dev/?id=parse
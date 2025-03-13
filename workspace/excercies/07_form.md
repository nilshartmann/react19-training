# A greeting card form, part 1

# Description

- With our form, a user should be able to create a new card
- In this first step we won't allow the user to select an image for the card
  - We will add that later

# Files

- src/components/CardEditor.tsx (create!)
- src/components/App.tsx

# Steps

1. Create the new component `CardEditor` in `src/components/CardEditor.tsx`
2. Use `useForm` from react-hook-form to create a new form
    - The `type` for `useForm` is `ICardSchema` from `card-schema.ts`
    - As form option, set `resolver` to `zodResolver` and pass your `CardSchema` object to it
    - If you like, you can specify `defaultValues` for the form
3. Create a `form` element
   - Inside the `form` add three elements:
     - `textarea` for `message`
     - `input type="checkbox"` for `imageDecoration`
     - `input type="text"` for `imageCaption`
     - Use `register` from the object returned by `useForm` to register them with your form
     - Wrap each of them in a `label` element and specify a valid label
       - note that my default CSS is very fragile, if you use another UI structure, the CSS may break. 
       - that may not be a problem, but don't be confused: it's probably not your fault, by mine
   - Inside the `form` element, add a button (`type submit`)  
4. Inside `CardEditor`, create a function `saveCard` with one argument of type `ICardSchema`
    - This function will be invoked when the user clicks on your submit button
    - For now, just log, the data on the console (`console.log`)
      - Later we will save the data on the server
5. Connect the `form`'s `onSubmit` with your `saveCard` function, using react-hook-form's `handleSubmit` function (returned from `useForm`) 
6. Render the `CardEditor` component in your `App` component (you can remove the `CardImageSelector` there)
7. **Optional** if you have time: can you add another button to our form, that resets all input fields (i.e. clears them?)

# Reference

- React Hook Form: https://react-hook-form.com/
  - `useForm`: https://react-hook-form.com/docs/useform
    - Configuration Options:
      - `resolver`: https://react-hook-form.com/docs/useform#resolver
      - `mode`: https://react-hook-form.com/docs/useform#mode
      - `defaultValues`: https://react-hook-form.com/docs/useform#defaultValues
    - Return values:
      - `register` function: https://react-hook-form.com/docs/useform/register
      - `formState`: https://react-hook-form.com/docs/useform/formstate
      - `watch` function: https://react-hook-form.com/docs/useform/watch
      - `reset` function: https://react-hook-form.com/docs/useform/reset

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CardSchema, ICardSchema } from "./card-schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";

// react-hook-form

export default function CardEditor() {
  const form = useForm<ICardSchema>({
    resolver: zodResolver(CardSchema),
    defaultValues: {
      message: "",
    },
    mode: "onChange",
  });

  // form.

  // const [message, setMessage] = useState("");
  // add more state for each field

  const saveForm = (data: ICardSchema) => {
    // save form to backend api
    console.log("Save form", data);
  };

  // const handleError = (err: any) => {
  //   console.log("Could not save form", err);
  // };

  // const ourProperties = {
  //   onChange() { /* ... */},
  //   value: "Good morning"
  // }
  // <input onChange={ourProperties.onChange} value={ourProperties.value} />
  // JavaScript SPREAD Operator:
  // <input {...ourProperties} />

  return (
    <div>
      <form id={"cardForm"} onSubmit={form.handleSubmit(saveForm)}>
        <h1>Design your own card</h1>

        <label>
          Message
          <textarea {...form.register("message")} />
        </label>

        <p>{form.formState.errors.message?.message}</p>

        {/*{message.length < 5 && (*/}
        {/*  <p>Please enter a message with 5 chars at least</p>*/}
        {/*)}*/}

        <label>
          Add decoration?
          <input type={"checkbox"} {...form.register("imageDecoration")} />
        </label>

        <label>
          Add Image Caption
          <input type={"text"} {...form.register("imageCaption")} />
        </label>

        {/*<button type={"submit"}>Save</button>*/}
        <button type={"button"}>Clear</button>
      </form>
      <SubmitButton />
    </div>
  );
}

function SubmitButton() {
  // useFormStatus
  return (
    <div>
      <button form={"cardForm"} type={"submit"}>
        Save
      </button>
    </div>
  );
}

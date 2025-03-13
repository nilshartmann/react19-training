import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CardSchema, ICardSchema } from "./card-schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import CardImageSelector from "./CardImageSelector.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ky from "ky";

// react-hook-form

export default function CardEditor() {
  const form = useForm<ICardSchema>({
    resolver: zodResolver(CardSchema),
    defaultValues: {
      message: "",
    },
    mode: "onBlur",
  });

  const queryClient = useQueryClient();

  const saveCardMutation = useMutation({
    async mutationFn(data: ICardSchema) {
      return ky.post("http://localhost:7100/cards", {
        json: data,
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["cards", "list"],
      });
    },
  });

  const [currentMessage, currentImageCaption, currentImageDecoration] =
    form.watch(["message", "imageCaption", "imageDecoration"]);

  console.log("Rendering Card Editor", new Date().toISOString());

  // form.

  // const [message, setMessage] = useState("");
  // add more state for each field

  const saveForm = (data: ICardSchema) => {
    // save form to backend api
    console.log("Save form", data);
    saveCardMutation.mutate(data);
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
        <p>
          You have to enter {5 - currentMessage.length} chars to make a valid
          message
        </p>

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

        <label>
          Select the Image for your Card
          <Controller
            name={"imageName"}
            control={form.control}
            render={(opts) => {
              return (
                <CardImageSelector
                  selectedImageName={opts.field.value}
                  onSelectedImageNameChange={(newSelectedImage) => {
                    if (newSelectedImage === opts.field.value) {
                      opts.field.onChange(null);
                    } else {
                      opts.field.onChange(newSelectedImage);
                    }
                  }}
                  imageNames={[
                    "01.png",
                    "02.png",
                    "03.png",
                    "04.png",
                    "05.png",
                    "06.png",
                  ]}
                  decoration={currentImageDecoration}
                  caption={currentImageCaption}
                />
              );
            }}
          />
        </label>
        <p>{form.formState.errors.imageName?.message}</p>

        {/*<button type={"submit"}>Save</button>*/}
        <button type={"button"} onClick={() => form.reset()}>
          Clear
        </button>
      </form>
      {saveCardMutation.isError && <p>Saving failed!</p>}
      {saveCardMutation.isPending && (
        <p>Please wait until data has been saved.</p>
      )}
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

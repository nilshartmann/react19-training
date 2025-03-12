import { useState } from "react";

export default function CardEditor() {
  const [message, setMessage] = useState("Good morning");
  // add more state for each field

  const saveForm = () => {
    // save form to backend api
    console.log("Save form", message);
  };

  return (
    <form>
      <h1>Design your own card</h1>

      <label>
        Message
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      {message.length < 5 && (
        <p>Please enter a message with 5 chars at least</p>
      )}

      <label>
        Add decoration?
        <input type={"checkbox"} />
      </label>

      <label>
        Add Image Caption
        <input type={"text"} />
      </label>

      <button onClick={() => saveForm()}>Save</button>
    </form>
  );
}

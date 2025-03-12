import { useState } from "react";

import CardImage from "./CardImage.tsx";

// Image-A -> Caption A Decoration A
// Image-B -> Caption B Decoration B

// after reording:
// Image-B -> Caption B Decoration B
// Image-A -> Caption A Decoration A

type CardImageSelectorProps = {
  // imageNames: Array<string>

  imageNames: string[];

  decoration: boolean;
  caption?: string;

  selectedImageName: string | null;

  // onSelectedImageNameChange2: (newSelectedImage: string) => void;

  onSelectedImageNameChange(newSelectedImage: string): void;
};

// function onSelectedImageNameChange(newSelectedImage: string): void {
//
// }

// interface SelectedImageNameChangeListenerInJava {
//   void onSelectedImageNameChange(String newSelectedImage);
// }

export default function CardImageSelector({
  imageNames,
  decoration,
  caption,
  selectedImageName,
  onSelectedImageNameChange,
}: CardImageSelectorProps) {
  // state
  // const state = useState(0);
  // const firstVisibleImageIndex = state[0];
  // const setFirstVisibleImageIndex = state[1];

  // Array Destructuring Operator of JavaScript [ ... ] = ...

  // individual states
  //   might be easier to refactor later
  // complex state (object)
  //   easier to save in browser storage for example
  //   rerendering optimization

  const [firstVisibleImageIndex, setFirstVisibleImageIndex] = useState(0);
  // const [selectedImageName, setSelectedImageName] = useState<string | null>(
  //   null,
  // );

  // function handleClick() {
  //   setFirstVisibleImageIndex(0);
  //   setSelectedImageName(null);
  // }

  // "realistic" example of complex state:
  // const apiCall = {
  //   isRunning: true,
  //   isError: false,
  //   data: null
  // }
  //
  // const finishedApiCall = {
  //   isRunning: false,
  //   data: "...."
  // }

  // "complex" state
  const x = useState({
    firstVisibleImageIndex: 0,
    selectedImage: "...",
  });

  // const firstVisibleImageIndex = 0;
  const visibleImageNames = imageNames.slice(
    firstVisibleImageIndex,
    firstVisibleImageIndex + 3,
  );

  const prevDisabled = firstVisibleImageIndex < 1;
  const nextDisabled = firstVisibleImageIndex >= imageNames.length - 3;

  const handlePrevButtonClick = () => {
    setFirstVisibleImageIndex(firstVisibleImageIndex - 1);
  };

  // Object.is ===
  // setFirstVisibleImageIndex(0)

  return (
    <div className={"CardImageSelector"}>
      <button
        type={"button"}
        disabled={prevDisabled}
        onClick={handlePrevButtonClick}
      >
        Previous
      </button>
      {visibleImageNames.map((imageName) => (
        <div
          key={imageName}
          className={
            selectedImageName === imageName
              ? "CardImageSelectorImage selected"
              : "CardImageSelectorImage"
          }
          onClick={() => onSelectedImageNameChange(imageName)}
        >
          <CardImage
            name={imageName}
            decoration={decoration}
            caption={caption}
          />
        </div>
      ))}
      <button
        type={"button"}
        disabled={nextDisabled}
        onClick={() => setFirstVisibleImageIndex(firstVisibleImageIndex + 1)}
      >
        Next
      </button>
    </div>
  );
}

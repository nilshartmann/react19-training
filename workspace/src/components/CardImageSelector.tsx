import { useState } from "react";

import CardImage from "./CardImage.tsx";

type CardImageSelectorProps = {
  // imageNames: Array<string>

  imageNames: string[];

  decoration: boolean;
  caption?: string;
};

export default function CardImageSelector({
  imageNames,
  decoration,
  caption,
}: CardImageSelectorProps) {
  // state
  // const state = useState(0);
  // const firstVisibleImageIndex = state[0];
  // const setFirstVisibleImageIndex = state[1];

  // Array Destructuring Operator of JavaScript [ ... ] = ...
  const [firstVisibleImageIndex, setFirstVisibleImageIndex] = useState(0);

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
        <CardImage
          key={imageName}
          name={imageName}
          decoration={decoration}
          caption={caption}
        />
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

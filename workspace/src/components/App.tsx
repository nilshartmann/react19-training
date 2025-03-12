import { useState } from "react";

import CardImage from "./CardImage.tsx";
import CardImageSelector from "./CardImageSelector.tsx";

// eslint
export default function App() {
  const title = <h1>Hello World</h1>;

  // REACT FRAGMENT:
  const myImages = (
    <>
      <CardImage name={"03.png"} decoration={false} caption={"Hello Image"} />
      <CardImage name={"04.png"} decoration={false} />
    </>
  );

  const [selectedImageName, setSelectedImageName] = useState<string | null>(
    null,
  );
  const [isCardSelectorVisible, setCardSelectorVisible] = useState(true); // FALSE!!!!
  // let name = "Klaus"
  // DO NOT DO THIS IN YOUR REACT COMPONENT!!!!!!!!!!!!!!!!!!!!!!!
  // JavaScript: CLOSURE functions
  // Java: lambdas are NO closure function
  // setTimeout( () => {
  //   name = "Susi";
  //   console.log("run after 5000 seconds")
  //   setCardSelectorVisible(!isCardSelectorVisible);  // true
  //   setCardSelectorVisible( currentIsSelectorVisible => !currentIsSelectorVisible )
  // }, 5000)
  //
  // function doSomething() {
  //   console.log(isCardSelectorVisible); // "false"
  //   setCardSelectorVisible(!isCardSelectorVisible); // setCardSelectorVisible(true)
  //   console.log(isCardSelectorVisible);
  // }

  const handleSelectedImageChange = (newSelectedImage: string) => {
    //
    if (newSelectedImage === selectedImageName) {
      setSelectedImageName(null);
    } else {
      setSelectedImageName(newSelectedImage);
    }
  };

  // return <div className={"container mx-auto pt-8"}>{myImages}</div>;
  return (
    <div className={"container mx-auto pt-8"}>
      <button onClick={() => setCardSelectorVisible(!isCardSelectorVisible)}>
        Show/hide Selector
      </button>
      {isCardSelectorVisible && (
        <CardImageSelector
          selectedImageName={selectedImageName}
          onSelectedImageNameChange={handleSelectedImageChange}
          imageNames={[
            "01.png",
            "02.png",
            "03.png",
            "04.png",
            "05.png",
            "06.png",
          ]}
          decoration={true}
          caption={"Caption"}
        />
      )}
    </div>
  );
}

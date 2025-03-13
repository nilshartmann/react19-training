import { Suspense, useState } from "react";

import CardImage from "./CardImage.tsx";
import CardImageSelector from "./CardImageSelector.tsx";
import CardEditor from "./CardEditor.tsx";
import ky from "ky";
import { CardDtoSchema, ICardDtoSchema } from "../types.ts";
import { ICardSchema } from "./card-schema.ts";
import CardList from "./CardList.tsx";
import LoadingIndicator from "./LoadingIndicator.tsx";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

function CardErrorFallback(props: FallbackProps) {
  return (
    <div>
      <h1>Error!</h1>
      {props.error.toString()}

      <button onClick={() => props.resetErrorBoundary()}>Retry</button>
    </div>
  );
}

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

  // const [cards, setCards] = useState<ICardDtoSchema[]>([]);

  // JavaScript "async" function
  const handleLoadClick = async () => {
    const responseJson = await ky.get("http://localhost:7100/cards").json();
    const cards = CardDtoSchema.array().parse(responseJson);
    // setCards(cards);
    // ...
    console.log("Returned data from server", cards);
  };

  const handleSaveClick = async () => {
    const data: ICardSchema = {
      imageName: "01.png",
      imageCaption: "Hello",
      imageDecoration: true,
      message: "Hello Backend",
    };

    // const myApiKy = ky.extend();

    const response = await ky.post("http://localhost:7100/cards", {
      json: data,
      // headers: {
      //   "Authentication": "Bearer 12345678"
      // }
    });

    if (response.status !== 201) {
      // "CREATED"
      console.error("Saving failed", response.status);
      return;
    }

    const responseDataFromBody = await response.json();
    console.log("Response", responseDataFromBody);
  };

  const resetQuery = useQueryErrorResetBoundary();

  // react-error-boundary (npm package)

  // return <div className={"container mx-auto pt-8"}>{myImages}</div>;
  return (
    <div className={"container mx-auto pt-8"}>
      <ErrorBoundary
        onReset={resetQuery.reset}
        FallbackComponent={CardErrorFallback}
      >
        <Suspense fallback={<h1>Please wait while cards are loading</h1>}>
          <CardList />
        </Suspense>
      </ErrorBoundary>

      {/*<ErrorBoundary fallback={<h1>Loading data failed</h1>}>*/}
      {/*  <Suspense fallback={<h1>Please wait while cards are loading</h1>}>*/}
      {/*    <CardList />*/}
      {/*  </Suspense>*/}
      {/*</ErrorBoundary>*/}

      {/*<Suspense fallback={<h1>Please wait while cards are loading</h1>}>*/}
      {/*  <UserList />*/}
      {/*</Suspense>*/}

      <button onClick={handleLoadClick}>Load Data!</button>
      <button onClick={handleSaveClick}>Save Data!</button>
      <CardEditor />
      {/*<button onClick={() => setCardSelectorVisible(!isCardSelectorVisible)}>*/}
      {/*  Show/hide Selector*/}
      {/*</button>*/}
      {/*{isCardSelectorVisible && (*/}
      {/*  <CardImageSelector*/}
      {/*    selectedImageName={selectedImageName}*/}
      {/*    onSelectedImageNameChange={handleSelectedImageChange}*/}
      {/*    imageNames={[*/}
      {/*      "01.png",*/}
      {/*      "02.png",*/}
      {/*      "03.png",*/}
      {/*      "04.png",*/}
      {/*      "05.png",*/}
      {/*      "06.png",*/}
      {/*    ]}*/}
      {/*    decoration={true}*/}
      {/*    caption={"Caption"}*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
}

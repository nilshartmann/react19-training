import CardImage from "./CardImage.tsx";
import CardImageSelector from "./CardImageSelector.tsx";

export default function App() {
  const title = <h1>Hello World</h1>;

  // REACT FRAGMENT:
  const myImages = (
    <>
      <CardImage name={"03.png"} decoration={false} caption={"Hello Image"} />
      <CardImage name={"04.png"} decoration={false} />
    </>
  );

  // return <div className={"container mx-auto pt-8"}>{myImages}</div>;
  return (
    <div className={"container mx-auto pt-8"}>
      <CardImageSelector
        imageNames={["01.png", "02.png", "03.png"]}
        decoration={true}
        caption={"Caption"}
      />
    </div>
  );
}

import CardImage from "./CardImage.tsx";

export default function App() {
  return (
    <div className={"container mx-auto pt-8"}>
      <CardImage name={"03.png"} decoration={false} caption={"Hello Image"} />
      <CardImage name={"04.png"} decoration={false} />
    </div>
  );
}

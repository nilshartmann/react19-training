import { useSuspenseQuery } from "@tanstack/react-query";
import ky from "ky";
import { CardDtoSchema } from "../types.ts";
import CardImage from "./CardImage.tsx";

// todo: LOOK AT THE CACHE CONFIGURATION!

export default function CardList() {
  // no useEffect!
  // Suspense

  const result = useSuspenseQuery({
    queryKey: ["cards", "lists"],
    async queryFn() {
      const responseJson = await ky.get("http://localhost:7100/cards").json();
      const cards = CardDtoSchema.array().parse(responseJson);
      return cards;
    },
  });

  const allCards = result.data;

  return (
    <div className={"CardList"}>
      {allCards.map((card) => (
        <div key={card.id} className={"CardListCard"}>
          <CardImage
            name={card.image.name}
            decoration={card.image.decoration}
            caption={card.image.caption}
          />
          <p>{card.message}</p>
        </div>
      ))}
    </div>
  );
}

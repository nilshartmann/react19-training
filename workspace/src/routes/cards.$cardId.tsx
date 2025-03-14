import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import ky from "ky";
import { CardDtoSchema } from "../types.ts";
import CardImage from "../components/CardImage.tsx";

export const Route = createFileRoute("/cards/$cardId")({
  component: RouteComponent,
});

function RouteComponent() {
  const cardId = Route.useParams().cardId;

  const result = useSuspenseQuery({
    queryKey: ["cards", cardId],
    async queryFn() {
      const response = await ky
        .get(`http://localhost:7100/cards/${cardId}?slow=4000`)
        .json();
      return CardDtoSchema.parse(response);
    },
  });

  const card = result.data;

  return (
    <div className={"CardDisplay"}>
      <CardImage
        name={card.image.name}
        decoration={card.image.decoration}
        caption={card.image.caption}
      />
      <p>{card.message}</p>
      <Link to={"/"}>List of Cards</Link>
    </div>
  );
}

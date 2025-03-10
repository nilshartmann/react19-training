// properties or props
//
// <CardImage name="/images/01.png" caption="Hello React" decoration={true} />
//
//  props
//  { name: "/images/01.png",
//    caption: "Hello React",
//    decoration: true
//  }

// "Type Alias" in Typescript
type CardImageProps = {
  name: string;
  caption?: string;
  decoration: boolean;
};

// type Boolean = boolean

// interface ICardImageProps  {
//   name: string;
//   caption?: string;
//   decoration: boolean;
// }

// destrucutring operator
// export default function CardImage(props: CardImageProps)
export default function CardImage({
  name,
  caption,
  decoration,
}: CardImageProps) {
  // console.log(props.name)
  // console.log(name);

  const imageSrc = `/images/${name}`;
  const rootClassName = decoration
    ? "CardImage CardImageDecoration"
    : "CardImage";

  // JSX
  return (
    <div className={rootClassName}>
      <img src={imageSrc} />
      {!!caption && <div className="CardImageCaption">{caption}</div>}
    </div>
  );
}

// export function CardList() {}

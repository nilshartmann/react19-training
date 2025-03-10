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

  let captionElement;
  if (caption) {
    captionElement = <div className="CardImageCaption">{caption}</div>;
  }

  const captionElement2 =
    caption === undefined ? null : (
      <div className="CardImageCaption">{caption}</div>
    );

  // JSX
  return (
    <div className={rootClassName}>
      <img src={imageSrc} />
      {!!caption && <div className="CardImageCaption">{caption}</div>}

      {caption === undefined ? null : (
        <div className="CardImageCaption">{caption}</div>
      )}
      {caption !== undefined && (
        <div className="CardImageCaption">{caption}</div>
      )}
      {captionElement}
      {captionElement2}
    </div>
  );
}

// export function CardList() {}

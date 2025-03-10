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
  return (
    <div className={"CardImageSelector"}>
      {imageNames.map((imageName) => (
        <CardImage
          key={imageName}
          name={imageName}
          decoration={decoration}
          caption={caption}
        />
      ))}
    </div>
  );
}

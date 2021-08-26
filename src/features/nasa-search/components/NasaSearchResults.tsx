import NasaImage from "./NasaImage";
import { NasaImageType } from "../types";

const NasaSearchResults = ({ images }: { images: NasaImageType[] }) => {
  const renderImages = () =>
    images.map((image: NasaImageType) => (
      // TODO: Better styling
      <li style={{ display: "inline-block" }} key={image.links[0].href}>
        <NasaImage image={image} />
      </li>
    ));

  return <ul>{renderImages()}</ul>;
};
export default NasaSearchResults;

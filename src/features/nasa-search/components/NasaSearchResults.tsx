import { Link } from "react-router-dom";
import NasaImage from "./NasaImage";
import { NasaImageType, NasaSearchResultsProps } from "../types";

const NasaSearchResults = ({ images }: NasaSearchResultsProps) => {
  const renderImages = () =>
    images.map((image: NasaImageType) => (
      // TODO: Better styling
      <li style={{ display: "inline-block" }} key={image.links[0].href}>
        <Link to={`/asset/${image.data[0].nasa_id}`}>
          <NasaImage image={image} />
        </Link>
      </li>
    ));

  return <ul>{renderImages()}</ul>;
};
export default NasaSearchResults;

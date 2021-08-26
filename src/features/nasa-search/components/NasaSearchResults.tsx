import { Link } from "react-router-dom";
import Image from "../../common/components/Image";
import { NasaImageType, NasaSearchResultsProps } from "../types";

const NasaSearchResults = ({ images }: NasaSearchResultsProps) => {
  const renderImages = () =>
    images.map((image: NasaImageType) => (
      // TODO: Better styling
      <li style={{ display: "inline-block" }} key={image.links[0].href}>
        <Link to={`/asset/${image.data[0].nasa_id}`}>
          <Image src={image.links[0].href} alt={image.data[0].title} />
        </Link>
      </li>
    ));

  return <ul>{renderImages()}</ul>;
};
export default NasaSearchResults;

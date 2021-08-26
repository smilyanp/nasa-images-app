import { useMemo } from "react";
import { Link } from "react-router-dom";
import Image from "../../common/components/Image";
import { NasaImageType, NasaSearchResultsProps } from "../types";

const NasaSearchResults = ({ images }: NasaSearchResultsProps) => {
  const renderImages = useMemo(
    () => () =>
      images.map((image: NasaImageType) => (
        <li key={image.links[0].href}>
          <Link to={`/asset/${image.data[0].nasa_id}`}>
            <Image src={image.links[0].href} alt={image.data[0].title} />
          </Link>
        </li>
      )),
    [images]
  );
  return (
    <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
      {renderImages()}
    </ul>
  );
};
export default NasaSearchResults;

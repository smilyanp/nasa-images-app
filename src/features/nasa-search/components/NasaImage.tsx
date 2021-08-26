import { NasaImageProps } from "../types";

const NasaImage = ({ image }: NasaImageProps) => (
  <img
    key={image.data[0].description}
    src={image.links[0].href}
    alt={image.data[0].title}
  />
);
export default NasaImage;

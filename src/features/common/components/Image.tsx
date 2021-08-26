import { ImageProps } from "../types";

const Image = ({ src, alt, ...rest }: ImageProps) => (
  <img src={src} alt={alt} {...rest} />
);
export default Image;

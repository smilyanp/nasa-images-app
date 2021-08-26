export interface UseNasaSearchProps {
  mediaType?: "image" | "audio";
  query: string;
}
export type NasaSearchResultsProps = {
  images: NasaImageType[];
};
export interface NasaSearchResults {
  collection: {
    href: string;
    items: NasaImageType[];
    links: NasaSearchResultsPaginationLink[];
    metadata: NasaSearchResultsMetadataType;
  };
}

export type NasaSearchResultsMetadataType = {
  total_hits: number;
};

export type NasaImageProps = {
  image: NasaImageType;
};

export type NasaImageLinkType = {
  href: string;
  rel: string;
  render: string;
};

export type NasaImageDataType = {
  center: string;
  date_created: string;
  description: string;
  keywords: string[];
  location: string;
  media_type: string;
  nasa_id: string;
  photographer: string;
  title: string;
};

export interface NasaImageType {
  links: NasaImageLinkType[];
  data: NasaImageDataType[];
  href: string;
}

export type NasaSearchResultsPaginationLink = {
  prompt: string;
  href: string;
  rel: string;
};

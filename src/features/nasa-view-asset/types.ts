export type UseNasaAssetDetailsProps = {
  id: string;
};

export type UseNasaImageMetadataProps = {
  id: string;
};

export interface NasaAssetDetailResponse {
  collection: {
    version: string;
    href: string;
    items: NasaAssetDetailLinkType[];
  };
}

export type NasaAssetDetailLinkType = {
  href: string;
};

// Extend the interface with more properties when needed
// See all properties from response here:
// https://images-assets.nasa.gov/image/MSFC-1501283/metadata.json
export interface NasaImageMetadataResponse {
  "XMP:Title": string;
  "XMP:Description": string;
}

export type NasaAssetParams = {
  id: string;
};

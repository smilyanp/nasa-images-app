import { useParams } from "react-router-dom";
import Page from "../../common/components/Page";
import Image from "../../common/components/Image";
import Loading from "../../common/components/Loading";
import ResponseError from "../../common/components/ResponseError";
import { useNasaAssetDetails, useNasaImageMetadata } from "../api";
import { NasaAssetDetailLinkType, NasaAssetParams } from "../types";

const getMediumAssetUrl = (assetUrls: NasaAssetDetailLinkType[]) => {
  const mediumUrl = assetUrls.filter((asset) =>
    asset.href.includes("~medium")
  )[0].href;
  if (mediumUrl) {
    return mediumUrl;
  }
  // If medium size image is not available
  // get the largest available one
  return assetUrls[assetUrls.length - 1].href;
};

const NasaViewAsset = () => {
  const { id } = useParams<NasaAssetParams>();

  const {
    data: assetDetails = { collection: { items: [] } },
    isLoading: isLoadingAssetDetails,
    error: assetDetailsError,
  } = useNasaAssetDetails({ id });

  const {
    data: metadata,
    isLoading: isLoadingMetadata,
    error: metadataError,
  } = useNasaImageMetadata({ id });

  if (isLoadingAssetDetails || isLoadingMetadata) {
    return <Loading />;
  }

  const renderMetadata = () => {
    if (metadataError) {
      return <ResponseError error={metadataError} />;
    }
    return (
      <>
        {metadata?.["XMP:Title"] && (
          <h1 className="block text-3xl mb-5">{metadata?.["XMP:Title"]}</h1>
        )}
        {metadata?.["XMP:Description"] && (
          <p>{metadata?.["XMP:Description"]}</p>
        )}
      </>
    );
  };

  const renderImage = () => {
    const imageUrl = getMediumAssetUrl(assetDetails?.collection.items);
    if (assetDetailsError) {
      return <ResponseError error={assetDetailsError} />;
    }
    return (
      imageUrl && (
        <Image
          className="w-full h-auto sm:p-0 md:p-6"
          alt={metadata?.["XMP:Description"] || ""}
          src={imageUrl}
        />
      )
    );
  };

  return (
    <Page className="text-center p-20">
      {/* TODO: Add back button to return to the search page */}
      <div>{renderMetadata()}</div>
      <div className="sm:m-0 md:m-14 mt-8">{renderImage()}</div>
    </Page>
  );
};

export default NasaViewAsset;

import { useParams } from "react-router-dom";
import Image from "../../common/components/Image";
import Loading from "../../common/components/Loading";
import { useNasaAssetDetails, useNasaImageMetadata } from "../api";
import { NasaAssetDetailLinkType, NasaAssetParams } from "../types";

const getMediumAssetUrl = (assetUrls: NasaAssetDetailLinkType[]) =>
  assetUrls.filter((asset) => asset.href.includes("~medium"))[0].href;

const NasaViewAsset = () => {
  const { id } = useParams<NasaAssetParams>();

  const {
    data: assetDetails = { collection: { items: [] } },
    isLoading: isLoadingAssetDetails,
  } = useNasaAssetDetails({ id });

  const { data: metadata, isLoading: isLoadingMetadata } = useNasaImageMetadata(
    { id }
  );

  if (isLoadingAssetDetails && isLoadingMetadata) {
    return <Loading />;
  }

  // TODO: Style the page better
  // TODO: Handle errors
  return (
    <div>
      <h1>{metadata?.["XMP:Title"]}</h1>
      <p>{metadata?.["XMP:Description"]}</p>
      <p>ID: {id}</p>
      <Image
        alt={metadata?.["XMP:Description"] || ""}
        src={getMediumAssetUrl(assetDetails?.collection.items)}
      />
    </div>
  );
};

export default NasaViewAsset;

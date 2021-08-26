import { useParams } from "react-router-dom";
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

  // TODO: Refactor NasaImage component to be used here as well
  // TODO: Style the page better
  // TODO: Handle errors
  return (
    <div>
      NasaViewAsset with param id = {id}
      <h1>{metadata?.["XMP:Title"]}</h1>
      <p>{metadata?.["XMP:Description"]}</p>
      <img alt="test" src={getMediumAssetUrl(assetDetails?.collection.items)} />
    </div>
  );
};

export default NasaViewAsset;

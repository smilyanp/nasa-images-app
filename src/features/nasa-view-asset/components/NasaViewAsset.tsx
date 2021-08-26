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

  // TODO: Handle errors
  return (
    <div className="text-center pr-20 pl-20 pt-10">
      <h1 className="block text-3xl mb-5">{metadata?.["XMP:Title"]}</h1>
      <p>{metadata?.["XMP:Description"]}</p>
      <div className="border-2 border-black m-14 mt-8">
        <Image
          className="w-full h-screen p-6"
          alt={metadata?.["XMP:Description"] || ""}
          src={getMediumAssetUrl(assetDetails?.collection.items)}
        />
      </div>
    </div>
  );
};

export default NasaViewAsset;

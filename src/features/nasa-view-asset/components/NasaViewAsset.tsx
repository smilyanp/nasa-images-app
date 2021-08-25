import { useParams } from "react-router-dom";

type NasaAssetParams = {
  id: string;
};

const NasaViewAsset = () => {
  const { id } = useParams<NasaAssetParams>();
  return <div>NasaViewAsset with param id = {id}</div>;
};

export default NasaViewAsset;

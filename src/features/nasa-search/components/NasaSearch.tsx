import { useNasaSearch } from "../api";
import Loading from "../../common/components/Loading";
import ResponseError from "../../common/components/ResponseError";
import NasaSearchForm from "./NasaSearchForm";
import NasaSearchResults from "./NasaSearchResults";

const NasaSearch = () => {
  // TODO: Implement pagination / infinite scrolling
  const {
    data = { collection: { items: [] } },
    isLoading,
    isError,
    error,
  } = useNasaSearch({ query: "test" });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ResponseError error={error} />;
  }

  return (
    <div>
      <h1>NASA Search</h1>
      <NasaSearchForm />
      <NasaSearchResults images={data.collection.items} />
    </div>
  );
};

export default NasaSearch;

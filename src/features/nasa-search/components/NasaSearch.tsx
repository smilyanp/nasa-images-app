import { useState } from "react";
import { useNasaSearch } from "../api";
import useDebounce from "../hooks";
import Page from "../../common/components/Page";
import Loading from "../../common/components/Loading";
import ResponseError from "../../common/components/ResponseError";
import NasaSearchForm from "./NasaSearchForm";
import NasaSearchResults from "./NasaSearchResults";

const NasaSearch = () => {
  // TODO: Implement pagination / infinite scrolling
  // TODO: Retain search query when moving between the pages
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const {
    data = { collection: { items: [] } },
    isLoading,
    isError,
    error,
  } = useNasaSearch({ query: debouncedQuery });

  if (isError) {
    return <ResponseError error={error} />;
  }

  const handleChange = (value: string) => {
    setQuery(value);
  };

  return (
    <div>
      {isLoading ? <Loading /> : <></>}
      <Page>
        <h1 className="bold text-3xl mb-2">NASA Image Search</h1>
        <NasaSearchForm onSubmit={handleChange} />
        <NasaSearchResults images={data.collection.items} />
      </Page>
    </div>
  );
};

export default NasaSearch;

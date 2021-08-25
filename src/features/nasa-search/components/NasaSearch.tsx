// import { useQueryClient, useQuery, useMutation } from "react-query";
import { useNasaSearch } from "../api";

const NasaSearch = () => {
  // TODO: Implement pagination / infinite scrolling
  // TODO: Pass type / query params to request
  const { data, isLoading } = useNasaSearch();

  // TODO: Create the correct types
  const renderImages = (images: any) => {
    return images.collection.items.map((image: any) => (
      // TODO: Better styling
      <li style={{ display: "inline-block" }}>
        <img
          key={image.data[0].description}
          src={image.links[0].href}
          alt={image.data[0].title}
        />
      </li>
    ));
  };

  if (isLoading) {
    // TODO: Implement loading component
    return <div>Loading...</div>;
  }

  // TODO: Implement error component

  return (
    <div>
      <h1>NasaSearch</h1>
      <ul>{renderImages(data)}</ul>
    </div>
  );
};

export default NasaSearch;

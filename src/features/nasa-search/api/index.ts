import { useQuery } from "react-query";

export const useNasaSearch = () =>
  useQuery("getNasaSearch", () =>
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/search?media_type=image&q=test`
    ).then((data) => data.json())
  );

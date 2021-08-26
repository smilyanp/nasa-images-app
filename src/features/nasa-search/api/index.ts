import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { NasaSearchResults, UseNasaSearchProps } from "../types";

export const useNasaSearch = ({
  mediaType = "image",
  query = "",
}: UseNasaSearchProps) =>
  useQuery<NasaSearchResults, AxiosError>({
    queryKey: "getNasaSearch",
    queryFn: async () => {
      try {
        return await axios
          .get(
            `${process.env.REACT_APP_API_BASE_URL}/search?media_type=${mediaType}&q=${query}`
          )
          .then((response) => response.data);
      } catch (error) {
        throw new Error("Failed to get NASA image search results");
      }
    },
  });

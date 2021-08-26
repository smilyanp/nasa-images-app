import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import {
  UseNasaAssetDetailsProps,
  NasaAssetDetailResponse,
  UseNasaImageMetadataProps,
  NasaImageMetadataResponse,
} from "../types";

export const useNasaAssetDetails = ({ id = "" }: UseNasaAssetDetailsProps) =>
  useQuery<NasaAssetDetailResponse, AxiosError>({
    queryKey: ["getNasaAssetDetails", id],
    queryFn: async () => {
      try {
        return await axios
          .get(`${process.env.REACT_APP_IMAGES_API_BASE_URL}/asset/${id}`)
          .then((response) => response.data);
      } catch (error) {
        throw new Error("Failed to get NASA asset details");
      }
    },
  });

export const useNasaImageMetadata = ({ id = "" }: UseNasaImageMetadataProps) =>
  useQuery<NasaImageMetadataResponse, AxiosError>({
    queryKey: ["getNasaImageMetadata", id],
    queryFn: async () => {
      try {
        return await axios
          .get(
            `${process.env.REACT_APP_ASSETS_API_BASE_URL}/image/${id}/metadata.json`
          )
          .then((response) => response.data);
      } catch (error) {
        throw new Error("Failed to get NASA image metadata");
      }
    },
  });

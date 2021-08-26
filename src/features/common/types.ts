import { AxiosError } from "axios";

export type ImageProps = {
  src: string;
  alt: string;
  [key: string]: string;
};

export type PageProps = {
  [key: string]: string | JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
};

export type ResponseErrorProps = {
  error: AxiosError | null;
};

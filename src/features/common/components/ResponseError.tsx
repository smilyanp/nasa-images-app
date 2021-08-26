import { AxiosError } from "axios";

const ResponseError = ({ error }: { error: AxiosError | null }) => {
  return <div>{error ? error.toString() : ""}</div>;
};
export default ResponseError;

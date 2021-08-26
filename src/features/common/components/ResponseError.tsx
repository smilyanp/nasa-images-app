import Page from "./Page";
import { AxiosError } from "axios";

const ResponseError = ({ error }: { error: AxiosError | null }) => {
  return (
    <Page>
      <div>{error ? error.toString() : ""}</div>
    </Page>
  );
};
export default ResponseError;

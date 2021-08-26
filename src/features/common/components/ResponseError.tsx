import Page from "./Page";
import { ResponseErrorProps } from "../types";

const ResponseError = ({ error }: ResponseErrorProps) => {
  return (
    <Page>
      {/* 
        TODO: Give the use some directions
        for next call to action / resolution they can attempt
      */}
      <div>{error ? error.toString() : ""}</div>
    </Page>
  );
};
export default ResponseError;

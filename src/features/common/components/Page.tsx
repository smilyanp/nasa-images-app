import { PageProps } from "../types";

const Page = ({ children, ...rest }: PageProps) => {
  return (
    <div className="text-center p-20" {...rest}>
      {children}
    </div>
  );
};
export default Page;

import { QueryClient, QueryClientProvider } from "react-query";
import { AppProviderProps } from "./types";
export const queryClient = new QueryClient();

const AppProviders = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default AppProviders;

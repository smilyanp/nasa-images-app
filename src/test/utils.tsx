import React from "react";
import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { queryClient } from "../context";
import { QueryClientProvider } from "react-query";
import { AppProvidersForTestsProps } from "./types";

const AppProvidersForTests = ({ children }: AppProvidersForTestsProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const render = async (component: React.ReactElement) => {
  const renderedComponent = rtlRender(component, {
    wrapper: ({ children }) => (
      <AppProvidersForTests>{children}</AppProvidersForTests>
    ),
  });

  await waitForLoadingToFinish();

  return renderedComponent;
};

const waitForLoadingToFinish = async () => {
  if (screen.queryAllByLabelText(/loading.../i).length) {
    await waitForElementToBeRemoved(
      () => [
        ...screen.queryAllByLabelText(/loading/i),
        ...screen.queryAllByText(/loading/i),
      ],
      { timeout: 3000 }
    );
  }
};

export default AppProvidersForTests;
export * from "@testing-library/react";
export { render, screen, waitForLoadingToFinish };

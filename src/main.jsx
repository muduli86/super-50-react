import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./mocks/browser";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

if (process.env.NODE_ENV === "development") {
  worker.start({ onUnhandledRequest: "bypass" });
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </React.StrictMode>
  </QueryClientProvider>
);

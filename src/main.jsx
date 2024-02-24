import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProviderStore from "./store/ProviderStore.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <ProviderStore>
            <App />
          </ProviderStore>
        </QueryClientProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);

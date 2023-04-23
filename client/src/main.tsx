import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "react-lazy-load-image-component/src/effects/blur.css";
import "suneditor/dist/css/suneditor.min.css";
import AuthContextProvider from "./context/AuthContext";
import Router from "./components/routes";
import App from "./App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <App/>
          <Toaster />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  </React.StrictMode>
);

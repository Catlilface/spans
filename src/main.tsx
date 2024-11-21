import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "app/providers";
import { Provider } from "react-redux";
import { authStore } from "./store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={authStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

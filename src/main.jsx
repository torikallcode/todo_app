import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Todowrapper } from "./components/Elements/Todowrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex justify-center  pt-32 w-full min-h-screen bg-slate-700">
        <Todowrapper />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

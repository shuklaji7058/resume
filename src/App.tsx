import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Certificates from "./components/certificates";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const App: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "/certificates",
          element: <Certificates />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;

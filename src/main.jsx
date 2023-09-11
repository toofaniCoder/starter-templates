import ReactDOM from "react-dom/client";
import { extendTheme } from "@mui/joy/styles";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// AXIOS SETUP
// import axios from 'axios'
// axios.defaults.baseURL = "YOUR_BASE_URL"

// import fonts
import "@fontsource/inter";

const theme = extendTheme({});

// pages
import Layout from "./routes/layout";
import Home from "./routes/home";
import { CssBaseline, CssVarsProvider, GlobalStyles } from "@mui/joy";

// setup routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <RouterProvider router={router} />
    </CssVarsProvider>
  </>
);

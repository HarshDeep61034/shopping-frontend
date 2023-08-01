import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Products from "../pages/Products";

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
        //   errorElement: <ErrorPage />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
            path: "Contact",
            element: <Contact />,
          },
          {
            path: "Cart",
            element: <Cart />,
          },
          {
            path: "Products",
            element: <Products />,
          },
      ]);
    
      return <RouterProvider router={router} />;
}

export default Router
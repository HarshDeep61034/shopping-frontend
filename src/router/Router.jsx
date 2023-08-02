import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import {Coupons} from "../pages/Cuopons";
import Productpage from "../pages/Productpage";

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
            path: "Shop",
            element: <Shop />,
          },
          {
            path: "Shop/Product/:id",
            element: <Productpage />,
          },
          {
            path: "harshdeep61034/coupons",
            element: <Coupons />,
          },
      ]);
    
      return <RouterProvider router={router} />;
}

export default Router
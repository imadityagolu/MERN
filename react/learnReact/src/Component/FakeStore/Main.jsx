import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import First from "./First";
import Singleproduct from './Pages/Singleproduct';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Register from "./Pages/Register";
import Profile from "./pages/Profile";
import CartProvider from "./contexts/CartContext";
import AuthProvider from "./contexts/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <First/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/About",
                element: <About/>
            },
            {
                path: "/product/:id",
                element: <Singleproduct />,
            },
            {
              path: "/Cart",
              element: (
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              ),
            },
            {
              path: "/Wishlist",
              element: (
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              ),
            },
            {
                path: "/Login",
                element: <Login/>
            },
            {
              path: "/profile",
              element: (
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              ),
            },
            {
                path: "/Register",
                element: <Register/>
            },
            { path: "*", element: <NotFound/>},
        ],
    }
]);

function Main() {
    return (
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    );
  }
  
  export default Main;
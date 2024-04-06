import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/error",
    element: <div>Error!</div>,
  },
]);



function App():JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

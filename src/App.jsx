import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/home/Home"
import SingleCard from "./shared/singleCard/SingleCard"
import Post from "./components/postReq/Post"


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/card/:id",
    element: <SingleCard/>
  },
  {
    path: "/post",
    element: <Post/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

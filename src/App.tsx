
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import './App.css'
import Home from './components/Home';
import { StateContext } from "./utils/StateContext";

function App() {
 
    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
    ]
      )
    return (
      <StateContext>
         <RouterProvider router={appRouter} />
        </StateContext>
  
    )
}

export default App

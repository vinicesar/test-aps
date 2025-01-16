import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import FormClient from "./FormClient"
import ListClient from "./ListClient"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/form", element: <FormClient /> },
            { index: true, element: <ListClient /> }
        ]
    }
])

export default router

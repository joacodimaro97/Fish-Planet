import { createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
    {path: '/', element:<Main/>, errorElement:<div>ups hubo un error</div>}
])


export default routes
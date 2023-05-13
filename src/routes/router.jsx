import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const routes = createBrowserRouter([
    {path: '/', element:(
    <Layout>
      <Navbar />
      <Footer />
    </Layout>
    ), 
    children: [
        { path: '/', element: <Main /> },

    ]}
])


export default routes
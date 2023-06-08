import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import EditData from "../pages/EditData";
import AddData from "../pages/AddData";
import ViewData from "../pages/ViewData";
const router = () => {

    return (
        <BrowserRouter>
            <Routes>
              <Route exact path = "/" element={<Home/>} />
              <Route path = "/add" element={<AddData/>} />
              <Route path = "/edit/:id" element={<EditData/>} />
              <Route exact path = "/view" element={<ViewData/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default router;

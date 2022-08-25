import { Route, Routes as RDRoutes} from "react-router-dom";
import { HomeView } from "./Views/Home";
import { NotFoundView } from "./Views/NotFound";
import { CartView } from "./Views/Cart"


export function Routes () {
    return(
        <RDRoutes>
            <Route path="/" element={<HomeView />} /> 
            <Route path="*" element={<NotFoundView />} />
            <Route path="/cart" element={<CartView />} />
        </RDRoutes>
    )
}
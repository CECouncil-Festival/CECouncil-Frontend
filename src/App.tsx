import { Routes, Route, BrowserRouter } from "react-router-dom";
import TailwindcssPage from "./pages/TailwindcssPage";
import MenuListPage from "./pages/OrderPages/MenuListPage";
import OrderListPage from "./pages/OrderPages/OrderListPage";
import ShoppingCartPage from "./pages/OrderPages/ShoppingCartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<TailwindcssPage></TailwindcssPage>}></Route>
        <Route
          path={"/css"}
          element={<TailwindcssPage></TailwindcssPage>}
        ></Route>
        <Route
          path={"/menulist/:table_id"}
          element={<MenuListPage></MenuListPage>}
        ></Route>
        <Route
          path={"/menuspec/:menu_id"}
          element={<MenuListPage></MenuListPage>}
        ></Route>
        <Route
          path={"/shoppingcart/:table_id"}
          element={<ShoppingCartPage></ShoppingCartPage>}
        ></Route>
        <Route
          path={"/orderlist/:table_id"}
          element={<OrderListPage></OrderListPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

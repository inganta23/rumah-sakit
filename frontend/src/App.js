import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { formBayi, formIbu } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { bayiColumns, bayiRows, ibuColumns } from "./datatablesource";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="bayi">
              <Route
                index
                element={<List tableColumns={bayiColumns} tableRows={"bayi"} />}
              />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={formBayi} title="Tambah Data Bayi" />}
              />
            </Route>
            <Route path="ibu">
              <Route
                index
                element={<List tableColumns={ibuColumns} tableRows={"ibu"} />}
              />
              <Route path=":ibuId" element={<Single data={"ibu"} />} />
              <Route
                path="new"
                element={<New inputs={formIbu} title="Tambah Data Ibu" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Home from "./pages/home/Home";
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
            <Route path="bayi">
              <Route
                index
                element={<List tableColumns={bayiColumns} option="bayi" />}
              />
              <Route path=":bayiId" element={<Single path={"bayi"} />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={formBayi}
                    title="Tambah Data Bayi"
                    option="bayi"
                  />
                }
              />
            </Route>
            <Route path="ibu">
              <Route
                index
                element={<List tableColumns={ibuColumns} option="ibu" />}
              />
              <Route path=":ibuId" element={<Single path="ibu" />} />
              <Route
                path="new"
                element={
                  <New inputs={formIbu} title="Tambah Data Ibu" option="ibu" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

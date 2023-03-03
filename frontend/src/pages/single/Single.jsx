import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import Ibu from "./Ibu";
import Bayi from "./Bayi";

const Single = ({ path }) => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {edit ? (
              <div className="editButton" onClick={() => setEdit(false)}>
                Close
              </div>
            ) : (
              <div
                className="editButton"
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit
              </div>
            )}
            <h1 className="title">Informasi Pasien</h1>
            {path === "ibu" ? (
              <Ibu edit={edit} setEdit={setEdit} />
            ) : (
              <Bayi edit={edit} setEdit={setEdit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;

import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import {
  getDataIbuService,
  postDataBayiService,
  postDataIbuService,
} from "../../api/services";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title, option }) => {
  const [selectOptions, setSelectOptions] = useState([]);
  const [selectValue, setSelectValue] = useState();
  const [selectValueGender, setSelectValueGender] = useState();
  const [form, setForm] = useState({
    nama: "",
    kondisi: "",
    waktu: "",
    umur: "",
    telepon: "",
    metode: "",
    gender: "",
  });

  const navigate = useNavigate();

  const postDataIbu = async (body) => {
    try {
      await postDataIbuService(body);
    } catch (error) {
      console.log(error);
    }
  };

  const postDataBayi = async (body) => {
    try {
      await postDataBayiService(body);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataIbu = async () => {
    try {
      const { data } = await getDataIbuService();
      setSelectOptions(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (option === "bayi") getDataIbu();
  }, [option]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (option === "ibu") {
      postDataIbu({
        nama: form.nama,
        kondisi: form.kondisi,
        umur: form.umur,
        waktu_masuk: form.waktu,
        telepon: form.telepon,
      });
    } else {
      postDataBayi({
        nama: form.nama,
        kondisi: form.kondisi,
        umur_kehamilan: form.umur,
        tanggal_kelahiran: form.waktu,
        metode: form.metode,
        ibu: selectValue,
        gender: selectValueGender,
      });
    }

    navigate(-1);
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmitForm}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.label === "Nama Ibu" ? (
                    <select
                      name="ibu"
                      id="ibu"
                      style={{ padding: "6px", borderRadius: "4px" }}
                      value={selectValue}
                      onChange={(e) => setSelectValue(e.target.value)}
                    >
                      {selectOptions.map((value) => (
                        <option value={value._id} key={value._id}>
                          {value.nama} : {value._id}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <>
                      {input.label === "Gender" ? (
                        <select
                          name="ibu"
                          id="ibu"
                          style={{ padding: "6px", borderRadius: "4px" }}
                          value={selectValueGender}
                          onChange={(e) => setSelectValueGender(e.target.value)}
                        >
                          <option value="pria">Pria</option>
                          <option value="wanita">Wanita</option>
                        </select>
                      ) : (
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          value={form[input.name]}
                          onChange={(e) =>
                            setForm({ ...form, [input.name]: e.target.value })
                          }
                          required
                        />
                      )}
                    </>
                  )}
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

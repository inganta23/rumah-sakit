import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { postDataIbuService } from "../../api/services";

const New = ({ inputs, title }) => {
  const [form, setForm] = useState({
    nama: "",
    kondisi: "",
    waktu: "",
    umur: "",
  });

  const postDataIbu = async (body) => {
    try {
      await postDataIbuService(body);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newDateTime = new Date(form.waktu).toLocaleString();
    postDataIbu({
      nama: form.nama,
      kondisi: form.kondisi,
      umur: form.umur,
      waktu_masuk: newDateTime,
    });
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
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    value={form[input.name]}
                    onChange={(e) =>
                      setForm({ ...form, [input.name]: e.target.value })
                    }
                    required
                  />
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

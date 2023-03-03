import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getDataIbuService,
  getOneDataBayiService,
  updateDataBayiService,
} from "../../api/services";

const Bayi = ({ edit, setEdit }) => {
  const [data, setData] = useState();
  const [selectOptions, setSelectOptions] = useState([]);
  const [selectValue, setSelectValue] = useState();
  const [editForm, setEditForm] = useState({
    nama: "",
    umur_kehamilan: "",
    kondisi: "",
    tanggal_kelahiran: "",
    metode: "",
  });
  const [loading, setLoading] = useState(true);
  const { bayiId } = useParams();
  const getDataIbu = async () => {
    try {
      const { data } = await getDataIbuService();
      setSelectOptions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailData = async () => {
    setLoading(true);
    try {
      const response = await getOneDataBayiService(bayiId);
      setData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const submitEditedData = async () => {
    setLoading(true);
    try {
      await updateDataBayiService(bayiId, { selectValue, ...editForm });
      await getDetailData();
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDetailData();
    getDataIbu();
  }, []);

  useEffect(() => {
    if (edit && data) {
      setEditForm({
        nama: data.nama,
        umur_kehamilan: data.umur_kehamilan,
        kondisi: data.kondisi,
        tanggal_kelahiran: data.tanggal_kelahiran,
        metode: data.metode,
      });
      setSelectValue(data.ibu);
    }
  }, [edit]);

  if (loading) return <div>Loading...</div>;
  else
    return (
      <>
        {edit ? (
          <div className="item">
            <div className="details">
              <div className="detailItem">
                <span className="itemKey">Nama:</span>
                <input
                  className="itemValue"
                  value={editForm.nama}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      nama: e.target.value,
                    })
                  }
                />
              </div>
              <div className="detailItem">
                <span className="itemKey">Umur Kehamilan:</span>
                <input
                  className="itemValue"
                  value={editForm.umur_kehamilan}
                  type="number"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      umur_kehamilan: e.target.value,
                    })
                  }
                />
              </div>
              <div className="detailItem">
                <span className="itemKey">Kondisi:</span>
                <input
                  className="itemValue"
                  value={editForm.kondisi}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      kondisi: e.target.value,
                    })
                  }
                />
              </div>
              <div className="detailItem">
                <span className="itemKey">Waktu Masuk:</span>
                <input
                  className="itemValue"
                  value={editForm.tanggal_kelahiran}
                  type="datetime-local"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      tanggal_kelahiran: e.target.value,
                    })
                  }
                />
              </div>
              <div className="detailItem">
                <span className="itemKey">Metode:</span>
                <input
                  className="itemValue"
                  type="text"
                  value={editForm.metode}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      metode: e.target.value,
                    })
                  }
                />
              </div>
              <div className="detailItem">
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
              </div>
              <div className="detailItem">
                <button
                  type="button"
                  className="itemKey"
                  onClick={submitEditedData}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="item">
            <div className="details">
              <h1 className="itemTitle">{data.nama}</h1>
              <div className="detailItem">
                <span className="itemKey">Umur Kehamilan:</span>
                <span className="itemValue">{data.umur_kehamilan}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Kondisi:</span>
                <span className="itemValue">{data.kondisi}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Tanggal Kelahiran:</span>
                <span className="itemValue">
                  {new Date(data.tanggal_kelahiran).toLocaleString()}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Metode Melahirkan:</span>
                <span className="itemValue">{data.metode}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Nama Ibu:</span>
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
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default Bayi;

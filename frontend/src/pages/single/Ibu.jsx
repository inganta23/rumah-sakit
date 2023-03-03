import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getDataBayiService,
  getOneDataIbuService,
  updateDataIbuService,
} from "../../api/services";

const Ibu = ({ edit, setEdit }) => {
  const [data, setData] = useState();
  const [dataBayi, setDataBayi] = useState([]);
  const [editForm, setEditForm] = useState({
    nama: "",
    umur: "",
    kondisi: "",
    waktu_masuk: "",
    telepon: "",
  });
  const [loading, setLoading] = useState(true);
  const { ibuId } = useParams();

  const getDataBayi = async () => {
    try {
      const bayi = await getDataBayiService({ ibu: data._id });
      console.log(bayi);
      // setDataBayi(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailData = async () => {
    setLoading(true);
    try {
      const response = await getOneDataIbuService(ibuId);
      setData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const submitEditedData = async () => {
    setLoading(true);
    try {
      await updateDataIbuService(ibuId, editForm);
      await getDetailData();
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  useEffect(() => {
    if (data) getDataBayi();
  }, [data]);

  useEffect(() => {
    if (edit && data) {
      setEditForm({
        nama: data.nama,
        umur: data.umur,
        kondisi: data.kondisi,
        waktu_masuk: data.waktu_masuk,
        telepon: data.telepon,
      });
    }
  }, [edit]);

  if (loading) return <div>Loading...</div>;
  else
    return (
      <div>
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
                <span className="itemKey">Umur:</span>
                <input
                  className="itemValue"
                  value={editForm.umur}
                  placeholder={data.umur}
                  type="number"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      umur: e.target.value,
                    })
                  }
                />
              </div>
              <div className="detailItem">
                <span className="itemKey">Kondisi:</span>
                <input
                  className="itemValue"
                  value={editForm.kondisi}
                  placeholder={data.kondisi}
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
                  value={editForm.waktu_masuk}
                  type="datetime-local"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      waktu_masuk: e.target.value,
                    })
                  }
                />
              </div>
              <div className="detailItem">
                <span className="itemKey">Nomor Telepon:</span>
                <input
                  className="itemValue"
                  type="number"
                  value={editForm.telepon}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      telepon: e.target.value,
                    })
                  }
                />
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
                <span className="itemKey">Umur:</span>
                <span className="itemValue">{data.umur}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Kondisi:</span>
                <span className="itemValue">{data.kondisi}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Waktu Masuk:</span>
                <span className="itemValue">
                  {new Date(data.waktu_masuk).toLocaleString()}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Nomor Telepon:</span>
                <span className="itemValue">{data.telepon}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default Ibu;

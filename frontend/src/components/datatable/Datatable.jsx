import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  deleteDatabayiService,
  deleteDataIbuService,
  getDataBayiService,
  getDataIbuService,
} from "../../api/services";
import { useEffect } from "react";
import FilterIbu from "./FilterIbu";
import FilterBayi from "./FilterBayi";

const Datatable = ({ tableColumns, option }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={params.row._id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const getDataIbu = async () => {
    setLoading(true);
    try {
      const { data } = await getDataIbuService();
      setData(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getDataBayi = async () => {
    setLoading(true);
    try {
      const { data } = await getDataBayiService();
      setData(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const average = () => {
    const length = data.length;
    let dataIbu = [];
    let sum = 0;
    data.forEach((bayi) => dataIbu.push(bayi.ibu));
    if (dataIbu.length) {
      sum = dataIbu.reduce((total, item) => ({
        umur: Number(total?.umur) + Number(item?.umur),
      }));
    }

    return Math.round(sum?.umur / length);
  };

  const handleDelete = async (id) => {
    try {
      if (option === "ibu") {
        await deleteDataIbuService(id);
        await getDataIbu();
      } else {
        await deleteDatabayiService(id);
        await getDataBayi();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (option === "ibu") getDataIbu();
    else {
      getDataBayi();
    }
  }, [option]);

  useEffect(() => {
    if (option === "ibu") getDataIbu();
    else {
      getDataBayi();
    }
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  else
    return (
      <div className="datatable">
        <div className="datatableTitle">
          {`Data ${option}`}
          <Link to="new" className="link">
            Tambah Data
          </Link>
        </div>

        {option === "ibu" ? (
          <FilterIbu setData={setData} />
        ) : (
          <FilterBayi setData={setData} />
        )}
        {option === "bayi" && (
          <div style={{ display: "flex", margin: "20px 0" }}>
            <p> Rata Rata Umur Ibu Melahirkan :</p>
            <p>{average() || 0} </p>
          </div>
        )}
        <DataGrid
          className="datagrid"
          rows={data}
          columns={tableColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(row) => row._id}
        />
      </div>
    );
};

export default Datatable;

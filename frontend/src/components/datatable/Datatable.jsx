import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getDataIbuService } from "../../api/services";
import { useEffect } from "react";

const Datatable = ({ tableColumns, tableRows }) => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

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
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const getDataIbu = async () => {
    try {
      const { data } = await getDataIbuService();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tableRows === "ibu") getDataIbu();
  }, [tableRows]);
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="new" className="link">
          Add New
        </Link>
      </div>
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

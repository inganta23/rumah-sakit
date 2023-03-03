export const bayiColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 130,
    renderCell: (params) => {
      return (
        <div
          id={`${params.row._id}`}
          style={{ overflowX: "auto", paddingBottom: "4px" }}
        >
          {params.row._id}
        </div>
      );
    },
  },
  {
    field: "nama",
    headerName: "Nama Bayi",
    width: 200,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  {
    field: "kondisi",
    headerName: "Kondisi Bayi",
    width: 100,
  },

  {
    field: "tanggal_kelahiran",
    headerName: "Tanggal Lahir",
    width: 150,
    renderCell: (params) => {
      return (
        <div>{new Date(params.row.tanggal_kelahiran).toLocaleString()}</div>
      );
    },
  },
  {
    field: "metode",
    headerName: "Metode Melahirkan",
    width: 150,
  },
  {
    field: "umur_kehamilan",
    headerName: "Umur Kehamilan",
    width: 100,
  },
  {
    field: "nama_ibu",
    headerName: "Nama Ibu",
    width: 200,
    renderCell: (params) => {
      return <div>{params.row.ibu?.nama}</div>;
    },
  },
  {
    field: "umur_ibu",
    headerName: "Umur Ibu",
    width: 80,
    renderCell: (params) => {
      return <div>{params.row.ibu?.umur}</div>;
    },
  },
];

export const ibuColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
    renderCell: (params) => {
      return (
        <div
          id={`${params.row._id}`}
          style={{ overflowX: "auto", paddingBottom: "4px" }}
        >
          {params.row._id}
        </div>
      );
    },
  },
  {
    field: "nama",
    headerName: "Nama Ibu",
    width: 200,
  },
  {
    field: "kondisi",
    headerName: "Kondisi Ibu",
    width: 100,
  },
  {
    field: "umur",
    headerName: "Umur",
    width: 80,
  },
  {
    field: "waktu_masuk",
    headerName: "Waktu Masuk",
    width: 150,
    renderCell: (params) => {
      return <div>{new Date(params.row.waktu_masuk).toLocaleString()}</div>;
    },
  },
  {
    field: "telepon",
    headerName: "Telepon",
    width: 150,
  },
];

export const bayiColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "nama",
    headerName: "Nama Bayi",
    width: 200,
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
  },
  {
    field: "umur_ibu",
    headerName: "Umur Ibu",
    width: 80,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

//temporary data
export const bayiRows = [
  {
    id: 1,
    nama: "Snow",
    kondisi: "sehat",
    tanggal_kelahiran: "23 Mei 2000",
    metode: "normal",
    umur_kehamilan: "9 bulan",
    nama_ibu: "Surni",
    umur_ibu: "28 tahun",
  },
  {
    id: 2,
    nama: "Snow",
    kondisi: "sehat",
    tanggal_kelahiran: "23 Mei 2000",
    metode: "normal",
    umur_kehamilan: "9 bulan",
    nama_ibu: "Surni",
    umur_ibu: "28 tahun",
  },
  {
    id: 3,
    nama: "Snow",
    kondisi: "sehat",
    tanggal_kelahiran: "23 Mei 2000",
    metode: "normal",
    umur_kehamilan: "9 bulan",
    nama_ibu: "Surni",
    umur_ibu: "28 tahun",
  },
];

export const ibuColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
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
    headerName: "Waktu Masuk Rumah Sakit",
    width: 200,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

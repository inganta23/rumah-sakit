import { useEffect, useState } from "react";
import { getFilteredDataBayiService } from "../../api/services";

const FilterBayi = ({ setData }) => {
  const [date, setDate] = useState({
    from: "",
    to: "",
  });
  const [umur, setUmur] = useState({
    from: "",
    dari: "",
  });
  const getFilteredData = async () => {
    try {
      const dataBayi = await getFilteredDataBayiService(
        `from=${date.from}&to=${date.to}`
      );
      setData(dataBayi.data);
    } catch (error) {}
  };
  useEffect(() => {
    if (date.from && date.to) getFilteredData();
  }, [date]);

  return (
    <div
      style={{
        marginLeft: "auto",
        width: "300px",
        background: "#fafafa",
        borderRadius: "10px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        border: "2px solid #454545",
      }}
    >
      <div className="filterDate">
        <label>Tanggal:</label>
        <div>
          <label htmlFor="from">Dari</label>
          <input
            type="datetime-local"
            name="from"
            value={date.from}
            onChange={(e) => setDate({ ...date, from: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="to">Sampai</label>
          <input
            type="datetime-local"
            name="to"
            value={date.to}
            onChange={(e) => setDate({ ...date, to: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBayi;

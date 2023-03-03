import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataBayiService, getDataIbuService } from "../../api/services";

const Widget = ({ type }) => {
  let data;

  const [total, setTotal] = useState();

  switch (type) {
    case "bayi":
      data = {
        title: "TOTAL KELAHIRAN",
        link: "Lihat Data Kelahiran",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "ibu":
      data = {
        title: "TOTAL IBU",
        link: "Lihat Data Ibu",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  const getDataIbu = async () => {
    try {
      const { data } = await getDataIbuService();
      setTotal(data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataBayi = async () => {
    try {
      const { data } = await getDataBayiService();
      setTotal(data.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (type === "ibu") getDataIbu();
    else getDataBayi();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{total}</span>
        <Link
          to={`/${type}`}
          style={{ textDecoration: "none" }}
          className="link"
        >
          {data.link}
        </Link>
      </div>
    </div>
  );
};

export default Widget;

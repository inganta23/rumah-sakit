import axios from "axios";

const URL = "http://localhost:5000/api";

export async function getDataIbuService() {
  try {
    const dataIbu = await axios.get(`${URL}/ibu`);
    return dataIbu;
  } catch (error) {
    throw new Error(error);
  }
}

export async function postDataIbuService(body) {
  try {
    await axios.post(`${URL}/ibu`, body);
  } catch (error) {
    throw new Error(error);
  }
}

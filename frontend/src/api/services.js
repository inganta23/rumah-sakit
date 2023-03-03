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

export async function getFilteredDataIbuService(query) {
  try {
    const dataIbu = await axios.get(`${URL}/ibu?${query}`);
    return dataIbu;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getFilteredDataBayiService(query) {
  try {
    const dataBayi = await axios.get(`${URL}/bayi?${query}`);
    return dataBayi;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getDataBayiService(body) {
  try {
    const dataBayi = await axios.get(`${URL}/bayi`, {
      params: { filter: body },
    });
    return dataBayi;
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

export async function postDataBayiService(body) {
  try {
    await axios.post(`${URL}/bayi`, body);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getOneDataIbuService(id) {
  try {
    const dataIbu = await axios.get(`${URL}/ibu/${id}`);
    return dataIbu;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getOneDataBayiService(id) {
  try {
    const dataBayi = await axios.get(`${URL}/bayi/${id}`);
    return dataBayi;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateDataIbuService(id, body) {
  try {
    await axios.put(`${URL}/ibu/${id}`, body);
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateDataBayiService(id, body) {
  try {
    await axios.put(`${URL}/bayi/${id}`, body);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteDataIbuService(id) {
  try {
    await axios.delete(`${URL}/ibu/${id}`);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteDatabayiService(id) {
  try {
    await axios.delete(`${URL}/bayi/${id}`);
  } catch (error) {
    throw new Error(error);
  }
}

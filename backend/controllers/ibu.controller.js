import {
  createDataIbu,
  deleteDataIbu,
  getDataIbu,
  updateDataIbu,
} from "../services/ibu.service.js";

export async function createDataIbuHandler(req, res) {
  try {
    const body = req.body;
    const dataIbu = await createDataIbu({ ...body });
    return res.send(dataIbu);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export async function getAllDataIbuHandler(req, res) {
  try {
    const query = req.query;
    let dataIbu;
    if (query.from && query.to) {
      dataIbu = await getDataIbu({
        waktu_masuk: {
          $gt: query.from,
          $lt: query.to,
        },
      });
    } else dataIbu = await getDataIbu();
    return res.send(dataIbu);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export async function getOneDataIbuHandler(req, res) {
  try {
    const ibuId = req.params.ibuId;
    const dataIbu = await getDataIbu({ _id: ibuId });
    return res.send(dataIbu);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export async function updateDataIbuHandler(req, res) {
  try {
    const ibuId = req.params.ibuId;
    const updateData = req.body;
    const dataIbu = await getDataIbu({ _id: ibuId });
    if (!dataIbu[0]) return res.status(404).send("Data did not exist");
    const updatedData = await updateDataIbu(
      {
        _id: ibuId,
      },
      updateData,
      { new: true }
    );
    return res.send(updatedData);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export async function deleteDataIbuHandler(req, res) {
  try {
    const ibuId = req.params.ibuId;
    const dataIbu = await getDataIbu({ _id: ibuId });
    if (!dataIbu[0]) return res.status(404).send("Data did not exist");
    const deletedData = await deleteDataIbu({ _id: ibuId });
    return res.send({
      data: deletedData,
      message: "Deleted Successfully",
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

import {
  createBayi,
  deleteDataBayi,
  getDataBayi,
  updateDataBayi,
} from "../services/bayi.service.js";

export async function createDataBayiHandler(req, res) {
  try {
    const body = req.body;
    const bayi = await createBayi({ ...body });
    return res.send(bayi);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export async function getAllDataBayiHandler(req, res) {
  try {
    const dataBayi = await getDataBayi({}, "ibu");
    return res.send(dataBayi);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export async function updateDataBayiHandler(req, res) {
  try {
    const bayiId = req.params.bayiId;
    const updateData = req.body;
    const dataBayi = await getDataBayi({ _id: bayiId });
    if (!dataBayi[0]) return res.status(404).send("Data did not exist");
    const updatedData = await updateDataBayi(
      {
        _id: bayiId,
      },
      updateData,
      { new: true }
    );
    return res.send(updatedData);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export async function deleteDataBayiHandler(req, res) {
  try {
    const bayiId = req.params.bayiId;
    const dataBayi = await getDataBayi({ _id: bayiId });
    if (!dataBayi[0]) return res.status(404).send("Data did not exist");
    const deletedData = await deleteDataBayi({ _id: bayiId });
    return res.send({
      data: deletedData,
      message: "Deleted Successfully",
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

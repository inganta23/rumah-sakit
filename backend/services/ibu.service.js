import IbuModel from "../models/ibu.model.js";

export async function createDataIbu(input) {
  try {
    return IbuModel.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getDataIbu(query = {}) {
  try {
    return IbuModel.find(query);
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateDataIbu(query, update, options) {
  try {
    return IbuModel.findOneAndUpdate(query, update, options);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteDataIbu(query) {
  try {
    return IbuModel.deleteOne(query);
  } catch (error) {
    throw new Error(error);
  }
}
